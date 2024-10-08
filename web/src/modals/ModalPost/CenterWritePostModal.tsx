import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";
import backgrounds from "@/config/backgrounds";
import { useSelector } from "react-redux";
import { RootState, getUser } from "@/reducers";
import PopoverEmoji from "@/popovers/PopoverEmoji";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";
import ContentAnswerQuestion from "@/modals/ModalAnswerQuestionPost/ContentAnswerQuestion";
import PopoversWrapper from "@/popovers/PopoversWrapper";

const CenterWritePostModal = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  const [backgroundListShow, setBackgroundListShow] = useState(
    !!posts.background
  );
  const refInput = useRef<HTMLInputElement>();
  const refArea = useRef<HTMLTextAreaElement>();
  useEffect(() => {
    //
    if (refInput.current) {
      refInput.current.innerText = posts.content;
      refInput.current.focus();
    }
    if (refArea.current) {
      refArea.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.background, refInput, refArea]);
  //
  return (
    <>
      {posts.background && (
        <div
          className="relative h-80 bg-cover"
          style={{ [posts.background.key]: posts.background.value }}
        >
          <div
            ref={refInput}
            onInput={(e) => {
              if (e.currentTarget.textContent.length >= 130) {
                postsDispatch(postsAction.updateData("background", null));
              } else {
                postsDispatch(
                  postsAction.updateData("content", e.currentTarget.textContent)
                );
              }
            }}
            className="text-2xl w-full flex justify-center text-white font-bold absolute top-1/2 
            left-1/2 transform -translate-x-1/2 -translate-y-1/2 break-all text-center "
            spellCheck={false}
            contentEditable
          />
        </div>
      )}
      {!posts.background && (
        <div className="w-full relative px-2">
          <textarea
            ref={refArea}
            onChange={(event) => {
              postsDispatch(
                postsAction.updateData("content", event.target.value)
              );
              if (posts.usingBackground) {
                if (event.target.value.length < 130) {
                  postsDispatch(
                    postsAction.updateData("background", posts.usingBackground)
                  );
                }
              }
            }}
            spellCheck={false}
            className={`w-full border-none ${
              posts.imageVideoUpload || posts.answer_question ? "" : "h-36"
            } dark:text-white text-xm px-2 pt-2 py-6 outline-none overflow-hidden dark:bg-dark-second resize-none`}
            placeholder={`${user.name} hey, what are you thinking about?`}
            defaultValue={posts.content}
          />
        </div>
      )}
      <div className="w-full flex -mt-4 relative px-2">
        {!posts.imageVideoUpload && !posts.answer_question && (
          <>
            {backgroundListShow ? (
              <div
                aria-hidden
                onClick={() => setBackgroundListShow(false)}
                className="w-9 h-9 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <span className="bx bx-chevron-left text-2xl text-gray-800" />
              </div>
            ) : (
              <img
                aria-hidden
                src="https://res.cloudinary.com/ensonet-dev/image/upload/v1640124392/BackgroundPosts/SATP_Aa_square-2x_a2yme5.png"
                onClick={() => setBackgroundListShow(true)}
                alt=""
                className="w-9 h-9 object-cover rounded-lg"
              />
            )}
            {backgroundListShow && (
              <ul className="mx-1 gap-1 flex">
                <li
                  aria-hidden
                  onClick={() => {
                    postsDispatch(postsAction.updateData("background", null));
                    postsDispatch(
                      postsAction.updateData("usingBackground", null)
                    );
                  }}
                  className={`w-9 h-9 bg-gray-100 rounded-lg bg-contain cursor-pointer`}
                />
                {backgrounds.map((item) => (
                  <li
                    aria-hidden
                    onClick={() => {
                      postsDispatch(postsAction.updateData("background", item));
                      postsDispatch(
                        postsAction.updateData("usingBackground", item)
                      );
                    }}
                    key={item.id}
                    className={`w-9 h-9 rounded-lg bg-contain ${
                      posts.background
                        ? posts.background.id === item.id &&
                          "border-2 border-solid border-white "
                        : ""
                    } cursor-pointer`}
                    style={{ [item.key]: item.value }}
                  />
                ))}
                <li
                  aria-hidden
                  onClick={() =>
                    postsDispatch(postsAction.openModalChooseBackground())
                  }
                  className="w-9 h-9 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <span className="bx bxs-grid-alt text-2xl text-gray-800" />
                </li>
              </ul>
            )}
          </>
        )}
        <div
          className={`absolute right-2 z-50 dark:bg-dark-second ${
            posts.imageVideoUpload || posts.answer_question
              ? "-top-16"
              : "top-1/2 transform -translate-y-1/2"
          }`}
        >
          <div className="relative">
            <PopoversWrapper
              button={
                <Button
                  type="button"
                  className={`w-8 h-8 rounded-full bg-white dark:bg-dark-third flex justify-center items-center `}
                >
                  <i className="far fa-smile text-gray-500 text-2xl dark:text-gray-300" />
                </Button>
              }
            >
              <PopoverEmoji
                handleClick={(item) => {
                  postsDispatch(
                    postsAction.updateData(
                      "content",
                      (refArea.current?.value ||
                        refInput.current?.innerText ||
                        "") + item
                    )
                  );
                  if (refArea.current) refArea.current.value += item;
                  if (refInput.current) refInput.current.innerText += item;
                }}
              />
            </PopoversWrapper>
          </div>
        </div>
      </div>
      {posts.answer_question && (
        <div className="px-9 w-full -mt-1">
          <div className="w-full relative">
            <ContentAnswerQuestion
              current={posts.answer_question.content}
              value={posts.answer_question?.value}
            />
            <span
              aria-hidden
              onClick={() => {
                postsDispatch(postsAction.updateData("answer_question", null));
                postsDispatch(
                  postsAction.updateData("imageVideoUpload", false)
                );
              }}
              className="w-7 h-7 rounded-full cursor-pointer hover:bg-gray-100 text-gray-600 items-center
              absolute -top-2 -right-2 bg-white flex justify-center border-gray-200 border-solid border text-xl"
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CenterWritePostModal;

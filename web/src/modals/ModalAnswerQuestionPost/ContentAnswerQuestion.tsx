import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import answerQuestion from "@/config/answerQuestion";
import { PostContext } from "@/contexts/PostContext/PostContext";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

const ContentAnswerQuestion = ({
  edit,
  current,
  setCurrent,
  value,
  setValue,
}: {
  edit?: boolean;
  current: string;
  setCurrent?: Function;
  setValue?: Function;
  value: string;
}) => {
  //
  const {
    posts: { answer_question },
    postsDispatch,
    postsAction,
  } = useContext(PostContext);
  const refInput = useRef<HTMLInputElement>();
  const user = useSelector<RootState, User>(getUser);
  const [show, setShow] = useState("Hi! I have a Q&A corner. Ask away...");
  useEffect(() => {
    if (refInput.current) {
      if (edit) {
        refInput.current.innerText = "Hi! I have a Q&A corner. Ask away...";
      } else {
        refInput.current.innerText = answer_question?.value || "";
      }
      setValue?.("Hi! I have a Q&A corner. Ask away...");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refInput, edit]);
  //
  return (
    <div
      className={`w-full rounded-${edit ? "lg" : "xl"} relative`}
      style={{ height: 550, backgroundImage: current }}
    >
      <img
        src={user.avatar}
        alt=""
        className="w-48 h-48 rounded-full object-cover shadow-lv1 mx-auto transform translate-y-9 shadow-lg"
      />
      <div className="w-full px-4">
        <div
          onInput={(e) => {
            if (edit) {
              if (e.currentTarget.textContent.length >= 200) {
                postsDispatch(postsAction.updateData("answer_question", null));
              } else {
                setValue(e.currentTarget.innerText);
              }
            }
          }}
          ref={refInput}
          className={`${
            value.length >= 105 ? "text-2xl" : "text-3xl"
          } w-full mt-16 flex justify-center text-white font-semibold break-all ${
            edit ? "contentedittable" : ""
          } text-center`}
          spellCheck={false}
          contentEditable={edit}
          // placeholder={edit ? "Hi! I have a Q&A corner. Ask away..." : ""}
        />
      </div>
      {edit && (
        <ul className="gap-1.5 w-full absolute bottom-2 px-6 flex items-center">
          {show ? (
            <li
              aria-hidden
              onClick={() => setShow("")}
              className="w-9 h-9 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer 
              bx bx-chevron-left text-2xl text-gray-800"
            />
          ) : (
            <img
              aria-hidden
              src="https://res.cloudinary.com/ensonet-dev/image/upload/v1640124392/BackgroundPosts/SATP_Aa_square-2x_a2yme5.png"
              onClick={() => setShow("true")}
              alt=""
              className="w-9 h-9 object-cover rounded-lg"
            />
          )}
          {show &&
            answerQuestion.map((item) => (
              <li
                aria-hidden
                onClick={() => setCurrent(item)}
                key={item}
                className={`w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer ${
                  current === item ? "border-2 border-white border-solid" : ""
                }`}
                style={{ backgroundImage: item }}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default ContentAnswerQuestion;

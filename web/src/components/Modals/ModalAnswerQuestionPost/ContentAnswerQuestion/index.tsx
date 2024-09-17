import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import answer_question from "@/config/answerQuestion";
import { PostContext } from "@/contexts/PostContext/PostContext";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

export default function ContentAnswerQuestion(props) {
  //
  const { postsDispatch, postsAction } = useContext(PostContext);
  const refInput = useRef<HTMLInputElement>();
  const user = useSelector<RootState, User>(getUser);
  const { edit, current, setCurrent, input, setInput, content } = props;
  const [show, setShow] = useState("Hi! Mình có góc hỏi đáp nè. Bạn hỏi đi...");
  useEffect(() => {
    if (refInput.current) {
      if (edit) {
        refInput.current.innerText =
          "Hi! Mình có góc hỏi đáp nè. Bạn hỏi đi...";
      } else {
        refInput.current.innerText = content;
      }
    }
  }, [refInput, edit, content]);
  //
  return (
    <div
      className={`w-full rounded-${edit ? "lg" : "xl"} relative`}
      style={{ height: 550, backgroundImage: current.data }}
    >
      <img
        src={user.avatar}
        alt=""
        className="w-48 h-48 rounded-full object-cover shadow-lv1 mx-auto transform translate-y-9 
            shadow-lg"
      />
      <div className="w-full px-4">
        <div
          onInput={(e) => {
            if (edit) {
              if (e.currentTarget.textContent.length >= 200) {
                postsDispatch(postsAction.updateData("answer_question", null));
              } else {
                setInput(e.currentTarget.textContent);
              }
            }
          }}
          ref={refInput}
          className={`${
            input.length >= 105 ? "text-2xl" : "text-3xl"
          } w-full mt-16 flex justify-center text-white font-semibold break-all
                ${edit ? "contentedittable" : ""} text-center`}
          spellCheck={false}
          contentEditable={edit}
          // placeholder={edit ? "Hi! Mình có góc hỏi đáp nè. Bạn hỏi đi..." : ""}
        />
      </div>
      {edit && (
        <ul className="gap-1.5 w-full absolute bottom-2 px-6 flex items-center">
          {show ? (
            <li
              aria-hidden
              onClick={() => setShow("")}
              className="w-9 h-9 bg-gray-300 rounded-lg flex items-center 
                    justify-center cursor-pointer"
            >
              <span className="bx bx-chevron-left text-2xl text-gray-800" />
            </li>
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
            answer_question.map((item) => (
              <li
                aria-hidden
                onClick={() => setCurrent(item)}
                key={item.id}
                className={`w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer 
                        ${
                          current.id === item.id
                            ? "border-2 border-white border-solid"
                            : ""
                        }`}
                style={{ backgroundImage: item.data }}
              ></li>
            ))}
        </ul>
      )}
    </div>
  );
}

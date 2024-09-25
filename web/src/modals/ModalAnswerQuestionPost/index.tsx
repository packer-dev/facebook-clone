import React, { useContext, useState } from "react";
import answer_question from "@/config/answerQuestion";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapperChildPost from "../ModalWrapperChildPost";
import ContentAnswerQuestion from "./ContentAnswerQuestion";
import { generateUUID } from "@/utils";
import { Button } from "@/components/ui/button";

export default function ModalAnswerQuestionPost() {
  //
  const { postsDispatch, postsAction } = useContext(PostContext);
  const [current, setCurrent] = useState(answer_question[0]);
  const [value, setValue] = useState("");
  //
  return (
    <ModalWrapperChildPost
      customerClass="shadow-sm border border-solid border-gray-200 bg-white w-11/12 absolute  
        dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-2 sm:w-10/12 md:w-2/3 lg:w-2/3 
        xl:w-1/3 shadow-lv1 z-50 top-1/2 left-1/2"
      title="Organize Q&A session"
    >
      <div className="w-full px-5 pb-2 pt-10">
        <ContentAnswerQuestion
          edit={true}
          setCurrent={setCurrent}
          current={current}
          value={value}
          setValue={setValue}
        />
        <Button
          onClick={() => {
            postsDispatch(
              postsAction.updateData("answer_question", {
                id: generateUUID(),
                content: current,
                value,
              })
            );
            postsDispatch(postsAction.returnModalPost());
          }}
          className="w-full font-bold p-2 mt-4 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Next
        </Button>
      </div>
    </ModalWrapperChildPost>
  );
}

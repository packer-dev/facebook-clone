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
    <ModalWrapperChildPost title="Organize Q&A session">
      <div className="w-full pb-2 pt-10">
        <ContentAnswerQuestion
          edit
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
          className="w-full mt-4"
        >
          Next
        </Button>
      </div>
    </ModalWrapperChildPost>
  );
}

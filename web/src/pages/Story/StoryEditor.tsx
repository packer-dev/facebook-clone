import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioList from "@/components/StoryEditor/AudioList";
import ColorTextList from "@/components/StoryEditor/ColorTextList";
import backgroundStory from "@/config/backgroundStory";
import { PAGE_CREATE_STORY, PAGE_HOME } from "@/constants/Config";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";
import html2canvas from "html2canvas";
import StoryEditLeft from "@/components/StoryEditor/StoryEditLeft";
import ContentStoryEditor from "@/components/StoryEditor/ContentStoryEditor";
import { Button } from "@/components/ui/button";

export default function StoryEditor({ mode }: any) {
  //
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const {
    state: { data },
    updateData,
  } = useContext(StoryEditorContext);
  useEffect(() => {
    //
    if (mode === 1) {
      if (!data) {
        navigation(PAGE_CREATE_STORY);
      }
    } else {
      updateData("data", backgroundStory[0]);
    }
    updateData("mode", mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
  const refImage = useRef();
  const handleCreateStory = async () => {
    if (refImage.current) {
      setLoading(true);

      html2canvas(refImage.current).then(async (canvas) => {
        const image = canvas.toDataURL("image/png"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
        const formData = new FormData();
        formData.append("base64", image);
        formData.append("id", new Date().getTime().toString());
        formData.append("publicId", "Stories/");
        formData.append("typeFile", "image");

        navigation(PAGE_HOME);
      });
    }
  };
  //
  return (
    <form
      action=""
      method="post"
      id="formCreatePicture"
      className="w-full flex flex-row h-full"
    >
      <textarea
        name="dataURI"
        id="dataURI"
        cols={30}
        rows={10}
        className="hidden"
      />
      <StoryEditLeft />
      <div className="w-2/4 bg-gray-200 dark:bg-dark-main story-right shadow-3xl h-full flex flex-col">
        <ContentStoryEditor ref={refImage} />
        <div className="w-full my-6 pl-9 flex-row flex">
          <span
            aria-hidden
            onClick={() => navigation(PAGE_CREATE_STORY)}
            className="text-center font-bold mr-4 py-3 flex-1 bg-gray-300 rounded-lg cursor-pointer"
          >
            Bỏ
          </span>
          <Button
            disabled={loading}
            onClick={handleCreateStory}
            type="button"
            className="font-bold w-1/2 bg-1877F2 py-3 rounded-lg text-white"
          >
            {loading ? (
              <i className="bx bx-shape-circle fa-spin text-main text-5xl">:</i>
            ) : (
              "Share story"
            )}
          </Button>
        </div>
      </div>
      <div className="w-1/4 p-4 pt-0 border-t-2 border-solid border-gray-300 shadow-md dark:border-dark-third">
        <p className="w-full flex py-6">
          <span className="font-bold text-xl dark:text-white">Color text</span>
        </p>
        <ColorTextList />
        <p className="w-full flex py-6">
          <span className="font-bold text-xl dark:text-white">Sound</span>
        </p>
        <AudioList />
      </div>
      <input
        type="file"
        className="hidden"
        name="myPictureStory"
        id="createStoryImage"
      />
    </form>
  );
}

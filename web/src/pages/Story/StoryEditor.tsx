import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioList from "@/modules/StoryEditor/AudioList";
import ColorTextList from "@/modules/StoryEditor/ColorTextList";
import backgroundStory from "@/config/backgroundStory";
import { PAGE_CREATE_STORY, PAGE_HOME } from "@/constants/Config";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";
import html2canvas from "html2canvas";
import StoryEditLeft from "@/modules/StoryEditor/StoryEditLeft";
import ContentStoryEditor from "@/modules/StoryEditor/ContentStoryEditor";
import { Button } from "@/components/ui/button";

const StoryEditor = () => {
  //
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const {
    state: { data, mode },
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
        <div className="w-11/12 mx-auto my-6 grid gap-3 grid-cols-2">
          <Button
            variant="secondary"
            onClick={() => navigation(PAGE_CREATE_STORY)}
          >
            Remove
          </Button>
          <Button disabled={loading} onClick={handleCreateStory} type="button">
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
};

export default StoryEditor;

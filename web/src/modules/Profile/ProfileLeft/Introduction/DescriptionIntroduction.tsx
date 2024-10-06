import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUser, getUserProfile, RootState } from "@/reducers";
import { User } from "@/interfaces/User";
import { updateUser } from "@/apis/userAPIs";
import { Button } from "@/components/ui/button";
import {
  updateDataUserProfile,
  UserProfileReduxProps,
} from "@/reducers/userProfile";

const DescriptionIntroduction = () => {
  //
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const user = useSelector<RootState, User>(getUser);
  const refContainer = useRef<HTMLDivElement>();
  const refDescription = useRef<HTMLDivElement>();
  const refAbsolute = useRef<HTMLDivElement>();
  const [description, setDescription] = useState(userProfile.bio || "");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //
    if (refDescription.current) {
      setDescription(userProfile.bio);
      refDescription.current.innerText = userProfile.bio;
      refDescription.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refDescription, userProfile]);
  useEffect(() => {
    //
    refAbsolute.current.style.height = refContainer.current.offsetHeight + "px";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  //
  return (
    <div ref={refContainer} className="w-full relative">
      <div className="w-full" style={{ display: show ? "block" : "none" }}>
        <div
          ref={refDescription}
          className="w-full px-3 flex break-all contentedittable text-center justify-center items-center resize-none rounded-lg bg-gray-300 h-20"
          contentEditable
          suppressContentEditableWarning
          onInput={(event) => {
            if (event.currentTarget.textContent.length <= 70) {
              setDescription(event.currentTarget.textContent);
            }
          }}
          spellCheck={false}
        />
        <p className="mt-1 text-right text-gray-500 text-sm">{`Còn ${
          70 - description?.length || 0
        } ký tự`}</p>
        <div className="text-right w-full my-1 pb-2 flex-row flex gap-1 justify-end">
          <Button
            onClick={() => {
              setShow(false);
              setDescription(user.bio || "");
            }}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              setLoading(true);
              const newUser = { ...userProfile, bio: description };
              await updateUser(newUser);
              dispatch(
                updateDataUserProfile({ key: "userProfile", value: newUser })
              );
              setLoading(false);
              setShow(false);
            }}
            disabled={user?.bio === description}
          >
            Save
          </Button>
        </div>
      </div>
      {!show && (
        <>
          <p className="mb-3 text-center">{description || ""}</p>
          {user.id === userProfile.id && (
            <Button
              onClick={() => {
                setLoading(true);
                setShow(true);
                setLoading(false);
              }}
              className="w-full"
            >
              Edit bio
            </Button>
          )}
        </>
      )}
      <div
        ref={refAbsolute}
        className="w-full absolute top-0 left-0 items-center justify-center bg-white dark:bg-dark-second bg-opacity-50 z-10"
        style={{ display: loading ? "flex" : "none" }}
      >
        <i className="fas fa-spinner fa-spin text-2xl" />
      </div>
    </div>
  );
};

export default DescriptionIntroduction;

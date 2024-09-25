import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

const WritePost = ({ view }: { view?: User }) => {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const user = useSelector<RootState, User>(getUser);
  //
  return (
    <div
      className="w-full bg-white mb-3 mt-2 dark:bg-dark-second m-auto rounded-lg border-2 border-solid 
      border-gray-200 shadow-lv1 dark:border-dark-third"
    >
      <div className="w-full flex p-2.5 items-center">
        <div className="mr-3">
          <Link to="">
            <img
              className="w-12 rounded-full h-12 object-cover"
              alt=""
              src={user.avatar}
            />
          </Link>
        </div>
        <div style={{ width: "calc(100% - 60px)" }}>
          <input
            onClick={() => modalsDispatch(modalsAction.openModalPost({}))}
            className="w-full rounded-full p-3 border-none outline-none bg-gray-100 dark:bg-dark-third"
            type="text"
            placeholder={
              view
                ? `Write anything to ${view.name}`
                : view.id === user.id && `${user.name}, what do you think?`
            }
          />
        </div>
      </div>
      <hr className="dark:border-dark-third" />
      <div className="w-full">
        <ul className="w-full px-3 py-3 flex text-gray-700 dark:text-gray-300 text-sm">
          <li
            className="w-1/2 md:w-1/3 xl:w-1/3  flex items-center justify-center cursor-pointer 
            py-2 text-center dark:hover:bg-dark-third hover:bg-gray-100 rounded-lg"
          >
            <span className="fas fa-video mr-1 text-2xl text-[#E73E5A]" />
            <span>Video stream</span>
          </li>
          <label
            htmlFor="uploadFileS"
            className="w-1/2 md:w-1/3 xl:w-1/3 cursor-pointer text-center 
            dark:hover:bg-dark-third hover:bg-gray-100 rounded-lg"
          >
            {" "}
            <input
              type="file"
              onChange={(event) => {
                if (event.target.files.length > 0)
                  modalsDispatch(
                    modalsAction.openModalPost({
                      files: event.target.files,
                    })
                  );
              }}
              id="uploadFileS"
              name="files[]"
              accept="image/*,video/*"
              multiple
              className="hidden"
            />
            <div className="py-2 w-full flex items-center justify-center rounded-lg">
              <span className="fas fa-image mr-1 text-2xl text-[#41B35D]" />
              <span>Image / video</span>
            </div>
          </label>
          <li
            onClick={() => modalsDispatch(modalsAction.openModalPost({}))}
            aria-hidden="true"
            className="w-1/3 md:w-1/3 xl:w-1/3 md:flex hidden cursor-pointer py-2 text-center dark:hover:bg-dark-third hover:bg-gray-100 
           xl:flex items-center justify-center rounded-lg"
          >
            <span className="fas fa-smile mr-1 text-2xl text-[#EAB027]" />
            <span>Feel / Activity</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WritePost;

import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapperChildPost from "../ModalWrapperChildPost";
import InputComponent from "@/components/InputComponent";

const ModalTagPost = () => {
  //
  const [users, setUsers] = useState([]);
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  useEffect(() => {
    //
    const fetch = async () => {
      const result = { data: [] };
      setUsers(result.data);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <ModalWrapperChildPost title="Tag friend">
      <div className="w-full my-2 px-2 flex items-center">
        <InputComponent
          className="dark:text-white font-bold w-10/12 p-2.5 pl-4 bg-transparent dark:bg-dark-third rounded-3xl border border-solid border-gray-300"
          search={true}
          type="text"
          placeholder="Modal search friends"
        />
        &nbsp;&nbsp;&nbsp;
        <span
          aria-hidden
          onClick={() => {
            postsDispatch(postsAction.returnModalPost());
          }}
          className="font-bold ml-4 text-blue-500 cursor-pointer"
        >
          Done
        </span>
      </div>
      {posts.tags.length > 0 && (
        <div className="w-full pb-3 px-2">
          <p className="w-full mx-auto dark:text-gray-300 font-bold py-1">
            Tagged
          </p>
          <div className="w-full mx-auto p-2 border-2 border-solid border-gray-300 rounded-lg">
            <div className="w-auto gap-2 flex flex-wrap max-h-32 overflow-y-auto">
              {posts.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="my-1 break-all text-sm w-auto rounded-md cursor-pointer p-1.5 bg-blue-100 text-blue-500 font-bold"
                >
                  {`${tag.name}`}
                  <span
                    aria-hidden
                    onClick={() => {
                      postsDispatch(
                        postsAction.updateData(
                          "tags",
                          [...posts.tags].filter((item) => item.id !== tag.id)
                        )
                      );
                    }}
                    className="ml-2 mr-1 text-xl cursor-pointer"
                  >
                    &times;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="tac-user wrapper-content-right">
        <p className="w-11/12 mx-auto dark:text-gray-300 font-bold py-2">
          Suggest
        </p>
        {users.map((user) => (
          <div
            aria-hidden
            onClick={() => {
              postsDispatch(
                postsAction.updateData(
                  "tags",
                  [...posts.tags].findIndex(
                    (item) => item.id === user.userUserRelationShip.id
                  ) === -1
                    ? [...posts.tags, user.userUserRelationShip]
                    : [...posts.tags].filter(
                        (item) => item.id !== user.userUserRelationShip.id
                      )
                )
              );
            }}
            key={user.id}
            className="w-full relative flex py-1.5 px-4 cursor-pointer hover:bg-gray-200 
                    rounded-lg dark:hover:bg-dark-third"
          >
            <div className="text-center pr-2.5">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.userUserRelationShip.avatar}
                alt=""
              />
            </div>
            <div
              className="tac-user-2"
              style={{ paddingTop: "1%", paddingLeft: "2%" }}
            >
              <p className="font-bold dark:text-white">{`${user.userUserRelationShip.firstName} ${user.userUserRelationShip.lastName}`}</p>
            </div>
            {[...posts.tags].findIndex(
              (item) => item.id === user.userUserRelationShip.id
            ) !== -1 && (
              <span className="absolute top-1/2 transform -translate-y-1/2 right-8">
                <i className="fas fa-check text-green-400 text-xl" />
              </span>
            )}
          </div>
        ))}
      </div>
    </ModalWrapperChildPost>
  );
};

export default ModalTagPost;

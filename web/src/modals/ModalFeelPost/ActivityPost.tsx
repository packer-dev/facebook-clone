import React, { useContext } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";

const ItemActivityPost = (props) => {
  //
  const { item, setActivity } = props;
  return (
    <div
      aria-hidden
      onClick={() => setActivity(item)}
      className="w-full p-2 flex items-center dark:hover:bg-dark-third rounded-lg cursor-pointer 
      relative hover:bg-gray-200"
    >
      <div className="w-10 h-10 mr-4 flex justify-center items-center bg-gray-100 rounded-full dark:bg-dark-third">
        <span className="text-xl">{item.data}</span>
      </div>
      <p className="dark:text-white">{item.label}</p>
      <span className="bx bx-chevron-right text-2xl dark:text-white absolute top-4 right-6" />
    </div>
  );
};

const ItemActivityChildPost = (props) => {
  //
  const { item, activity } = props;
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <div
      aria-hidden
      onClick={() => {
        postsDispatch(
          postsAction.updateData("activity", {
            ...item,
            name: activity.label,
            idActivity: activity.id,
          })
        );
        postsDispatch(postsAction.updateData("feel", null));
        postsDispatch(postsAction.returnModalPost());
      }}
      className={`tac-user-clone pl-4 flex items-center dark:hover:bg-dark-third rounded-lg cursor-pointer 
        relative ${
          posts?.activity?.id !== item.id ? "hover:bg-gray-200" : "bg-gray-200"
        }`}
    >
      <div className="w-10 h-10 mr-4 flex justify-center items-center bg-gray-100 rounded-full dark:bg-dark-third">
        <span className="text-xl">{item.data}</span>
      </div>
      <p className="dark:text-white">{item.label}</p>
      <span className="absolute top-4 right-6" />
    </div>
  );
};

const ActivityPost = (props) => {
  //
  const { activities, activity, setActivity } = props;
  //
  return (
    <div className={`w - full ${activity ? "flex flex-wrap" : ""} `}>
      {activity
        ? activity.list.map((item) => (
            <ItemActivityChildPost
              key={item.id}
              item={item}
              activity={activity}
            />
          ))
        : activities.map((item) => (
            <ItemActivityPost
              key={item.id}
              item={item}
              setActivity={setActivity}
            />
          ))}
    </div>
  );
};

export default ActivityPost;

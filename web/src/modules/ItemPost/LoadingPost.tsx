import * as React from "react";

const LoadingPost = () => {
  return (
    <div className="removeTimeline w-full mx-auto bg-white dark:bg-dark-second my-4 py-4 px-2 rounded-lg ph-item dark:ph-item">
      <div className="w-full py-2 flex">
        <div className="w-10 h-10 mb-1 bg-gray-300 rounded-full mr-3 linear-background dark:linear-background" />
        <div className="w-48 ">
          <ul className="ml-2 w-full">
            <li className="bg-gray-300 py-1.5 mb-2 mt-1 rounded-lg  linear-background dark:linear-background"></li>
            <li className="bg-gray-300 py-1.5 rounded-lg   linear-background dark:linear-background"></li>
          </ul>
        </div>
      </div>
      <div className="w-full h-32" />
      <div className="w-full">
        <ul className="w-full flex">
          <li className="w-1/3">
            <div className="w-40 mx-auto py-1.5 rounded-lg bg-gray-300  dark:bg-dark-third  linear-background dark:linear-background" />
          </li>
          <li className="w-1/3">
            <div className="w-40 mx-auto py-1.5 rounded-lg  bg-gray-300  dark:bg-dark-third linear-background dark:linear-background" />
          </li>
          <li className="w-1/3">
            <div className="w-40 mx-auto py-1.5  rounded-lg bg-gray-300 dark:bg-dark-third  linear-background dark:linear-background" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoadingPost;

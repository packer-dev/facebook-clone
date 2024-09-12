import React, { useContext } from "react";
import { UserProfileContext } from "../../../../contexts/UserProfileContext/UserProfileContext";
import RelationshipUserStatus from "./RelationshipUserStatus";

export default function InfoProfile(props) {
  //
  const {
    userProfile: { userProfile },
  } = useContext(UserProfileContext);
  //
  return (
    <div className="p-2 relative" style={{ width: "calc(100% - 180px)" }}>
      <p className="font-semibold flex text-4xl py-1 dark:text-white flex items-center">
        {`${userProfile.firstName} ${userProfile.lastName}`}
        <span className="ml-3 bg-blue-500 rounded-full text-sm font-bold text-white w-4 h-4 flex">
          <i className="bx bx-check flex justiy-center items-center "></i>
        </span>
      </p>
      <p className="text-gray-600 dark:text-gray-300 items-center pl-1 pb-1 flex">
        <span>1.870 bạn bè</span>
        <span className="mx-1">•</span>
        <span></span>
      </p>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex pl-2 my-1 w-full md:w-auto">
          <img
            className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third 
                                    relative z-30 -ml-2 rounded-full object-cover"
            src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third 
                                    relative z-20 -ml-2 rounded-full object-cover"
            src="http://res.cloudinary.com/tratahuong01/image/upload/v1634874843/Avatar/wwyvpklsoeqxbw0jzawr.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third 
                                    relative z-10 -ml-2 rounded-full object-cover"
            src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289083/PostNormal/xxxi1jytvxdmvnmwckcf.jpg"
            alt=""
          />
        </div>
        <RelationshipUserStatus />
      </div>
    </div>
  );
}

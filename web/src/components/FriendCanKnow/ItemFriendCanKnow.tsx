import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { User } from "@/interfaces/User";
import { Button } from "../ui/button";

type ItemFriendCanKnowProps = {
  item: User;
  setUsers: Function;
  users: User[];
};

const ItemFriendCanKnow = ({
  item,
  setUsers,
  users,
}: ItemFriendCanKnowProps) => {
  //
  //
  return (
    <div
      className="w-40 justify-center rounded-t-lg flex flex-shrink-0 border-2 border-solid 
    border-gray-200 shadow-lv1 dark:border-dark-third"
    >
      <div className="w-full relative">
        <Link to={PAGE_PROFILE + "/" + item.id}>
          <img
            src={item.avatar}
            alt=""
            className="w-full h-36 rounded-t-lg object-cover"
          />
          <p className="text-base px-2 py-0.5 font-semibold text-center">
            {`${item.name}`}
          </p>
        </Link>
        <div className="px-2 mx-auto text-sm flex items-center justify-center">
          <img
            src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
            alt=""
            className="w-4 h-4 rounded-full object-cover mr-2"
          />
          <span>256 manual friends</span>
        </div>
        <div className="w-full px-2">
          <Button
            onClick={async () => {
              setUsers([...users].filter((dt) => dt.id !== item.id));
            }}
            disabled
            // className="w-full justify-center p-0.5 my-2 rounded-md text-main bg-blue-100
            // flex items-center hover:bg-blue-200 font-semibold"
          >
            <i className="bx bx-user-plus text-2xl mr-1" /> Add friend
          </Button>
        </div>
        <div
          aria-hidden
          onClick={() => {
            setUsers([...users].filter((dt) => dt.id !== item.id));
          }}
          className="w-8 h-8 rounded-full bg-black bg-opacity-50 text-white font-semibold flex justify-center 
          items-center text-2xl cursor-pointer hover:bg-opacity-70 absolute top-2 right-2"
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default ItemFriendCanKnow;

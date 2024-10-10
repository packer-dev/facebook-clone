import { Notification } from "@/interfaces/Notification";
import moment from "moment";
import * as React from "react";

type ItemPopoverNotificationProps = {
  isRead?: boolean;
  notification: Notification;
};

const ItemPopoverNotification = ({
  isRead,
  notification,
}: ItemPopoverNotificationProps) => {
  return (
    <div
      className="my-1 w-full px-1 py-1.5 cursor-pointer flex rounded-sm hover:bg-gray-100 
        dark:hover:bg-dark-third relative"
    >
      <div className="w-16 h-16 relative mt-0.5">
        <img
          src={notification.sender.avatar}
          alt=""
          className="w-full h-full rounded-full shadow-lv1 object-cover"
        />
        <img
          src={
            notification.type === 1
              ? JSON.parse(notification.content)?.icon
              : "https://res.cloudinary.com/ensonet-dev/image/upload/v1639997973/Reactions/haha_b2vqtv.png"
          }
          alt=""
          className="w-6 h-6 shadow-lv1 rounded-full absolute -bottom-0.5 -right-0.5 object-cover"
        />
      </div>
      <div className="pl-3 opacity-60 w-2/3">
        <p className="text-tiny ">
          <span className="font-semibold text-base">
            {notification.sender.name}
          </span>
          <span>{JSON.parse(notification.content)?.content}</span>
        </p>
        <p className="text-sm mt-1">
          {moment(notification.time_created).fromNow()}
        </p>
      </div>
      {!isRead && (
        <span className="w-3.5 h-3.5 rounded-full bg-main absolute top-1/2 transform -translate-y-1/2 right-3.5" />
      )}
    </div>
  );
};

export default ItemPopoverNotification;

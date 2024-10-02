import moment from "moment";
import * as React from "react";

export default function InformationMain({ userProfile }) {
  //
  const description = JSON.parse(userProfile.description || "{}");
  //
  return (
    <ul className="w-full mt-3">
      {description.work && (
        <li className="w-full pb-3">
          <p className="dark:text-gray-300">
            <i className="fas fa-briefcase text-gray-600 text-xl dark:text-gray-300 mr-1" />
            <span>Làm việc tại</span>
            <span className="ml-1 dark:text-gray-300">{description.work}</span>
          </p>
        </li>
      )}
      {description.study && (
        <li className="w-full pb-3">
          <p className="dark:text-gray-300">
            <i className="fas fa-graduation-cap text-gray-600 dark:text-gray-300 text-xl mr-1" />
            <span>Học tại</span>
            <span className="dark:text-gray-300 ml-1">{description.study}</span>
          </p>
        </li>
      )}
      {description.live && (
        <li className="w-full pb-3">
          <p className="dark:text-gray-300">
            <i className="fas fa-home text-gray-600 dark:text-gray-300 text-xl mr-1" />
            <span>Sống tại</span>
            <span className="dark:text-gray-300 ml-1">{description.live}</span>
          </p>
        </li>
      )}
      {description.from && (
        <li className="w-full pb-3">
          <p className="dark:text-gray-300">
            <i className="fas fa-map-marker-alt text-gray-600 dark:text-gray-300 text-xl mr-1" />
            <span>Đến từ</span>
            <span className="dark:text-gray-300 ml-1">{description.from}</span>
          </p>
        </li>
      )}
      {description.status && (
        <li className="w-full pb-3">
          <p className="dark:text-gray-300">
            <i className="fas fa-heart text-gray-600 dark:text-gray-300 mr-1 text-xl" />
            {description.status}
          </p>
        </li>
      )}
      <li className="w-full pb-3">
        <p className="dark:text-gray-300">
          <i className="fas fa-clock text-gray-600 text-xl dark:text-gray-300 mr-1" />
          Joined at
          {moment(userProfile.timeCreated).month() + 1 > 12
            ? "01"
            : moment(userProfile.timeCreated).month() + 1 < 10
            ? `0${moment(userProfile.timeCreated).month() + 1}`
            : moment(userProfile.timeCreated).month() + 1}{" "}
          năm {moment(userProfile.timeCreated).year()}
        </p>
      </li>
    </ul>
  );
}

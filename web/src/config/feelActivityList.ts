export type FeelProps = {
  id: string;
  data: string;
  label: string;
  list?: FeelProps[];
};

const feelList: FeelProps[] = [
  {
    id: "0",
    data: "😀",
    label: "Happy",
  },
  {
    id: "1",
    data: "🥰",
    label: "Cute",
  },
  {
    id: "2",
    data: "🥲",
    label: "Sad",
  },
  {
    id: "3",
    data: "😃",
    label: "Grateful",
  },
  {
    id: "4",
    data: "🤪",
    label: "Crazy",
  },
  {
    id: "5",
    data: "😎",
    label: "Awesome",
  },
];

export type ActivityProps = {
  id: string;
  data: string;
  label: string;
  list?: ActivityProps[];
};

const activityList: ActivityProps[] = [
  {
    id: "0",
    data: "🎉",
    label: "Celebrating",
    list: [
      {
        id: "0",
        data: "🎂",
        label: "Birthday",
      },
      {
        id: "1",
        data: "🎓",
        label: "Graduation",
      },
    ],
  },
  {
    id: "1",
    data: "🎮",
    label: "Playing",
    list: [
      {
        id: "0",
        data: "🏀",
        label: "Basketball",
      },
      {
        id: "1",
        data: "🏌",
        label: "Tennis",
      },
    ],
  },
];

const feelActivityList = { feels: feelList, activities: activityList };

export default feelActivityList;

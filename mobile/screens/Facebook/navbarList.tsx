import { AntDesign, Ionicons, FontAwesome6, Entypo } from "@expo/vector-icons";

const navbarList = [
  {
    route: "Facebook",
    iconComponent: AntDesign,
    iconName: "home",
    name: "Home",
  },
  {
    route: "Watchs",
    iconComponent: Ionicons,
    iconName: "tv-outline",
    name: "Videos",
  },
  {
    route: "Friends",
    iconComponent: FontAwesome6,
    iconName: "user-group",
    name: "Friends",
  },
  {
    route: "Marketplaces",
    iconComponent: Entypo,
    iconName: "shop",
    name: "Market",
  },
  {
    route: "Notifications",
    iconComponent: AntDesign,
    iconName: "bells",
    name: "Notification",
  },
];

export default navbarList;

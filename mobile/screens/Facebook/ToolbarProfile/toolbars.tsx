import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

export const toolbars = [
  {
    component: MaterialCommunityIcons,
    icon: "clipboard-plus-outline",
    text: "Follow",
    isOwer: false,
  },
  {
    component: AntDesign,
    icon: "warning",
    text: "Report profile",
    isOwer: false,
  },
  {
    component: Entypo,
    icon: "block",
    text: "Block",
    isOwer: false,
  },
  {
    component: Entypo,
    icon: "remove-user",
    text: "Cancel relationship",
    isOwer: false,
  },
  {
    component: AntDesign,
    icon: "search1",
    text: "Search",
    isOwer: true,
  },
  {
    component: MaterialCommunityIcons,
    icon: "clipboard-plus-outline",
    text: "Invite friends",
    isOwer: true,
  },
  {
    component: AntDesign,
    icon: "sharealt",
    text: "Share personal page",
    isOwer: true,
  },
  {
    component: FontAwesome5,
    icon: "copy",
    text: "Link to personal page",
    isOwer: true,
  },
];

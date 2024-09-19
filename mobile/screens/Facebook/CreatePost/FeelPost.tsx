import { PopupProps } from "@/popups/PopupProps";
import SubPost from "./SubPost";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "@/tailwind";
import React, { useContext, useState } from "react";
import { activityList, feelList } from "@/config/feelActivityList";
import SearchWrapper from "@/screens/MessageList/Search";
import { AppContext } from "@/contexts";

const width = Dimensions.get("window").width;

const FeelPost = ({ popupId }: PopupProps) => {
  const {
    state: { popup, post },
    updateData,
  } = useContext(AppContext);
  const navbars = ["Feel", "Activity"];
  const [current, setCurrent] = useState(navbars[0]);
  return (
    <SubPost title="How are you feeling?" popupId={popupId} hideScroll>
      <View style={tailwind(`flex-1 flex-col`)}>
        <View style={tailwind(`flex-row`)}>
          {navbars.map((item) => (
            <TouchableOpacity
              onPress={() => setCurrent(item)}
              key={item}
              style={tailwind(
                `w-1/${navbars.length} p-2 flex-row justify-center ${
                  current === item ? "border-b-2 border-blue-500" : ""
                }`
              )}
            >
              <Text
                style={[
                  tailwind(
                    `${current === item ? "text-blue-500" : ""} font-semibold`
                  ),
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={tailwind(`py-1`)}>
          <SearchWrapper />
        </View>
        <ScrollView style={tailwind(`flex-1`)}>
          <View style={tailwind(`border border-gray-200 flex-row flex-wrap`)}>
            {(current === "Feel" ? feelList : activityList)
              .filter((item) => item)
              .map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    updateData("post", {
                      ...post,
                      [current === "Feel" ? "feel" : "activity"]: item,
                    });
                    updateData(
                      "popup",
                      [...popup].filter((item) => item?.id !== popupId)
                    );
                  }}
                  key={item.data}
                  style={[
                    tailwind(
                      `flex-row gap-2 px-2 py-4 border-b border-gray-200 ${
                        index % 2 === 0 ? "border-r" : ""
                      }`
                    ),
                    { width: (width - 2 - 1) / 2 },
                  ]}
                >
                  <Text>{item.data}</Text>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    </SubPost>
  );
};

export default FeelPost;

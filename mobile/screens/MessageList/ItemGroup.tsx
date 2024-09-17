import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import { Group } from "@/interfaces/Group";
import { AppContext } from "@/contexts";
import Avatar from "@/components/Avatar";
import GroupAvatar from "@/components/GroupAvatar";
import tailwind from "@/tailwind";

type ItemGroupProps = {
  handleClick?: Function;
  group?: Group;
  loading?: boolean;
};

const ItemGroup = ({ handleClick, group, loading }: ItemGroupProps) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const imageGroup = (() => {
    if (!group) return <></>;

    let result;
    const isBigGroup = group?.multiple;
    if (isBigGroup) {
      result = {
        uri: group?.image,
        isGroupAvatar: !group?.image,
      };
    } else {
      result = {
        uri: group?.members?.find((item) => item?.user?.id !== user?.id)?.user
          ?.avatar,
        isGroupAvatar: false,
      };
    }
    return !result.isGroupAvatar ? (
      <Avatar size={16} uri={result.uri} />
    ) : (
      <GroupAvatar group={group} size={16} child={7} />
    );
  })();
  const nameGroup = (() => {
    const isBigGroup = group?.multiple;
    if (isBigGroup) {
      return (
        group?.name ?? group?.members.map((item) => item?.user?.name).join(", ")
      );
    } else {
      return group?.members?.find((item) => item?.user?.id !== user?.id)?.user
        ?.name;
    }
  })();
  const lastMessage = (() => {
    let content = "";
    if (group?.last_message?.user?.id === user?.id) {
      content = "You";
    }
    if (group?.last_message?.content?.type === 2) {
      if (group?.last_message?.user?.id !== user?.id) {
        content = group?.last_message?.user?.name?.split(" ")[0];
      }
      content += " sent a sticker.";
    } else {
      if (group?.last_message?.user?.id === user?.id) {
        if (group?.last_message?.content?.type === 1) {
          content += ":";
        }
      } else if (group?.last_message?.content?.type !== 1) {
        content += group?.last_message?.user?.name?.split(" ")[0];
      }
      content += ` ${group?.last_message?.content?.text}`;
    }
    return content;
  })();
  const handleOpen = () => {
    if (!loading) handleClick?.();
  };
  //
  return (
    <TouchableOpacity
      onPress={handleOpen}
      style={tailwind(`flex-row gap-2 items-center`)}
    >
      {loading ? <Avatar size={16} loading={loading} /> : imageGroup}
      <View style={tailwind(`flex-1 pr-4`)}>
        <Text
          style={tailwind(
            `font-semibold text-lg pr-6 ${
              loading ? "w-1/2 bg-gray-300 h-3 rounded-full" : ""
            }`
          )}
          numberOfLines={1}
        >
          {loading ? "" : nameGroup}
        </Text>
        {loading ? (
          <Text style={tailwind("w-3/4 bg-gray-300 h-3 rounded-full mt-3")} />
        ) : (
          <Text
            style={tailwind(
              `${
                !group?.seen?.[user?.id ?? ""] &&
                group?.last_message?.user?.id !== user?.id
                  ? "font-bold"
                  : "text-gray-700"
              } mt-1 text-sm`
            )}
          >
            {lastMessage}
            {!loading &&
              ` - ${moment(group?.last_message?.time_created).fromNow()}`}
          </Text>
        )}
      </View>
      {!loading && <AntDesign name="checkcircle" size={16} color="gray" />}
    </TouchableOpacity>
  );
};
export default ItemGroup;

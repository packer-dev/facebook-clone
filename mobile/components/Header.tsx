import * as React from "react";
import { Text, View, TouchableOpacity, Platform, Alert } from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import tailwind from "../tailwind";
import { AppContext } from "../contexts/index";
import Avatar from "./Avatar";
import GroupAvatar from "./GroupAvatar";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { User } from "../interfaces/User";
import { Group } from "../interfaces/Group";

type HeaderProps = { friend: User };

type ScreenList = NavigationProp<{
  RunningCall: {
    group: Group | null;
  };
  MessageList: undefined;
  DetailChat: {
    group?: Group;
    friend?: User;
  };
}>;

const Header = ({ friend }: HeaderProps) => {
  //
  const {
    state: { user, groupCurrent, peerConnection, socket },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const obj: any = groupCurrent?.multiple
    ? groupCurrent
    : friend ||
      groupCurrent?.members?.find((item) => item?.user?.id !== user?.id)?.user;
  const bigGroup = obj?.image ? (
    <Avatar size={10} uri={obj?.image} />
  ) : (
    <GroupAvatar group={obj} size={10} />
  );

  const startCall = async (isVideo?: boolean) => {
    if (!peerConnection) {
      Alert.alert("Current system haven't support Web RTC");
      return;
    }
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    updateData("isCalling", {
      status: true,
      groupId: groupCurrent?.id,
    });
    groupCurrent?.members?.forEach((item) => {
      if (item?.user?.id !== user?.id) {
        const payload = {
          type: "offer",
          offer,
          group: groupCurrent,
          accept: Object.fromEntries(
            groupCurrent?.members
              ?.filter((item) => item?.user?.id !== user?.id)
              .map((item) => {
                return [item?.user?.id, "pending"];
              })
          ),
          isVideo,
        };
        socket.emit(`call-to-${item?.user?.id}`, JSON.stringify(payload));
      }
    });
    navigation.navigate("RunningCall", {
      group: groupCurrent,
    });
  };
  //
  return (
    <View
      style={tailwind(
        `flex-row ${
          Platform.OS === "android" ? "pt-6 pb-2" : "py-2"
        } items-center border-b border-gray-200`
      )}
    >
      <View style={tailwind(`flex-row gap-4 items-center flex-1`)}>
        <TouchableOpacity onPress={() => navigation.navigate("MessageList")}>
          <AntDesign name="left" size={24} style={tailwind(`text-primary`)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailChat", {
              [groupCurrent?.multiple ? "group" : "friend"]: obj,
            })
          }
          style={tailwind(`flex-row gap-2 items-center`)}
        >
          {obj?.multiple ? bigGroup : <Avatar size={10} uri={obj?.avatar} />}
          <View style={tailwind(`pl-3 flex-1 flex-col gap-1`)}>
            <Text style={tailwind(`font-semibold pr-12`)} numberOfLines={1}>
              {obj?.multiple
                ? obj?.name ||
                  obj.members.map((item: any) => item?.user?.name).join(", ")
                : obj?.name}
            </Text>
            <View style={tailwind(`flex-row gap-2 items-center`)}>
              <View style={tailwind(`w-2 h-2 rounded-full bg-green-500`)} />
              <Text>Online</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tailwind(`flex-row gap-4 items-center pr-3`)}>
        <MaterialIcons
          onPress={() => startCall()}
          name="call"
          size={24}
          style={tailwind(`text-primary`)}
        />
        <Feather
          name="video"
          onPress={() => startCall(true)}
          size={24}
          style={tailwind(`text-primary`)}
        />
      </View>
    </View>
  );
};

export default Header;

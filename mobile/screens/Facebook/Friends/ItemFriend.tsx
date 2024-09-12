import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AppContext } from "@/contexts";
import { sendRelationship } from "@/apis/userAPIs";
import tailwind from "@/tailwind";
import Loading from "@/components/Loading";
import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import { User } from "@/interfaces/User";

type ItemFriendProps = {
  friend: { user: User };
  update?: any;
  isSuggest?: boolean;
};

const ItemFriend = ({ friend, update, isSuggest }: ItemFriendProps) => {
  const {
    state: { user, trigger },
    updateData,
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(false);
  const handle = async (status: any) => {
    setLoading(true);
    await sendRelationship({
      user1: user?.id,
      user2: friend?.user?.id,
      status,
    });
    update?.(friend?.user?.id);
    updateData("trigger", { ...trigger, suggestFriend: Math.random() });
    setLoading(false);
  };
  return (
    <View style={tailwind(`flex-row items-center gap-3 relative`)}>
      {loading && <Loading isFirst size="small" />}
      <Avatar size={20} uri={friend?.user?.avatar} />
      <View style={tailwind(`flex-1 flex-col gap-1.5 mt-1`)}>
        <View style={tailwind(`flex-row gap-3 justify-between items-center`)}>
          <Text style={tailwind(`font-bold`)}>{friend?.user?.name}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>Just now</Text>
        </View>
        <View style={tailwind(`flex-row flex-1 gap-3 mt-1`)}>
          <IconButton
            onPress={() => handle(isSuggest ? "send" : "accept")}
            iconName="adduser"
            IconContainer={AntDesign}
            text={isSuggest ? "Add friend" : "Confirm"}
            iconSize={24}
            styles={`p-3 h-10 flex-1 bg-primary justify-center`}
            haveBackground
            hiddenIcon={!isSuggest}
          />
          <TouchableOpacity
            onPress={() => handle("")}
            style={tailwind(
              `bg-gray-300 flex-row px-6 h-10 items-center justify-center rounded-lg`
            )}
          >
            <Text style={tailwind(`font-bold`)}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemFriend;

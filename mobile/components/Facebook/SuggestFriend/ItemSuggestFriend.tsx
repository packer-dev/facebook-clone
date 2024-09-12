import * as React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FriendProfileDTO, User } from "@/interfaces/User";
import { AppContext } from "@/contexts";
import { sendRelationship } from "@/apis/userAPIs";
import tailwind from "@/tailwind";
import IconButton from "@/components/IconButton";

const width = Dimensions.get("window").width - 120;

type ItemSuggestFriendProps = {
  friend: FriendProfileDTO;
  setFriends: Function;
  friends: FriendProfileDTO[];
};

type ScreenList = NavigationProp<{
  DetailProfile: {
    visit: User;
  };
}>;

const ItemSuggestFriend = ({
  friend,
  setFriends,
  friends,
}: ItemSuggestFriendProps) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const [status, setStatus] = React.useState(friend?.status);
  const handleRelationship = async () => {
    let payloadStatusAPI = status === 1 ? "" : "accept";
    await sendRelationship({
      user1: user?.id,
      user2: friend?.user?.id,
      status: status === 0 ? "send" : payloadStatusAPI,
    });
    if (status === 2) {
      setFriends(
        [...friends].filter((item) => item.user.id !== friend?.user?.id)
      );
    } else {
      let payloadStatusUI = status === 1 ? 0 : 3;
      setStatus(status === 0 ? 1 : (payloadStatusUI as any));
    }
  };
  const statusText = status === 2 ? "Accept request" : "Cancel request";
  const iconStatus = status === 2 ? "user-check" : "deleteuser";
  React.useEffect(() => {
    setStatus(friend?.status);
  }, [friend]);
  //
  return (
    <View
      style={{
        ...tailwind(`rounded-lg border border-gray-200 flex-col gap-2`),
        width,
      }}
    >
      <Image
        source={{
          uri: friend?.user?.avatar || `https://picsum.photos/536/354`,
        }}
        style={tailwind(`w-full h-72 rounded-lg`)}
      />
      <Text
        onPress={() =>
          navigation.navigate("DetailProfile", {
            visit: friend.user,
          })
        }
        style={tailwind(`font-bold px-3`)}
      >
        {friend?.user?.name}
      </Text>
      <Text style={tailwind(`text-gray-600 text-sm px-3`)}>
        {friend?.manual ? `${friend?.manual} mutual friend` : " "}
      </Text>
      <View style={tailwind(`flex-row gap-2 px-3 mb-3`)}>
        <IconButton
          onPress={handleRelationship}
          iconName={!status ? "adduser" : iconStatus}
          IconContainer={status === 2 ? Feather : AntDesign}
          text={!status ? "Add friend" : statusText}
          iconSize={24}
          styles={`p-3 flex-1 ${
            !status || status === 2 ? "bg-primary" : "bg-gray-500"
          } justify-center`}
          haveBackground
        />
        <TouchableOpacity
          style={tailwind(
            `flex-row justify-center items-center gap-2 font-bold px-4 py-3 bg-gray-300 rounded-lg`
          )}
        >
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemSuggestFriend;

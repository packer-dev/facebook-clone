import { AppContext } from "@/contexts";
import { MediaProfileDTO } from "@/interfaces/Media";
import { FriendProfileDTO } from "@/interfaces/User";
import tailwind from "@/tailwind";
import * as React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const width = Dimensions.get("window").width - 24;

type ItemMediaListProps = {
  media: MediaProfileDTO | FriendProfileDTO;
  status: any;
};

const ItemMediaList = ({ media, status }: ItemMediaListProps) => {
  const { updateData } = React.useContext(AppContext);
  const userObj = "user" in media ? media : null;
  const mediaObj = "media" in media ? media.media : null;
  return (
    <TouchableOpacity
      onPress={() => "user" in media && updateData("visit", userObj?.user)}
      style={{ ...tailwind(`my-1`), width: (width - 16) / 3 }}
    >
      <Image
        source={{
          uri: status
            ? mediaObj?.url
            : userObj?.user?.avatar ?? `https://picsum.photos/536/354`,
        }}
        style={{
          ...tailwind(`rounded-lg`),
          ...{ width: (width - 16) / 3, height: (width - 16) / 3 },
        }}
      />
      {!status && (
        <View style={tailwind(`p-1.5 pt-2 pb-1.5 flex-col gap-2`)}>
          <Text style={tailwind(`font-bold`)}>{userObj?.user.name}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>
            {userObj?.manual ? `${userObj?.manual} manual friend` : ` `}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ItemMediaList;

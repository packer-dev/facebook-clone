import React from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";

const ItemNotification = () => {
  return (
    <View style={tailwind(`bg-blue-100 flex-row gap-3 p-3`)}>
      <View>
        <Avatar size={16} online={false} />
      </View>
      <View style={tailwind(`flex-1`)}>
        <Text style={tailwind(`pt-3`)}>
          <Text style={tailwind(`font-bold`)}>Packer Tra </Text>
          comment your post.
        </Text>
        <Text style={tailwind(`text-sm text-gray-700`)}>an hour ago</Text>
      </View>
      <Entypo name="dots-three-horizontal" size={24} color="black" />
    </View>
  );
};

export default ItemNotification;

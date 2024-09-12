import * as React from "react";
import Container from "../Container";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import ItemNotification from "./ItemNotification";
import tailwind from "@/tailwind";

const Notifications = ({ route }: any) => {
  return (
    <Container scrollView route={route}>
      <View style={tailwind(`flex-row justify-between px-3`)}>
        <Text style={tailwind(`font-bold text-3xl`)}>Notifications</Text>
        <View style={tailwind(`flex-row gap-3`)}>
          <TouchableOpacity
            style={tailwind(
              `w-10 h-10 rounded-full bg-gray-200 flex-row justify-center items-center`
            )}
          >
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              `w-10 h-10 rounded-full bg-gray-200 flex-row justify-center items-center`
            )}
          >
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tailwind(`flex-col my-3 gap-1`)}>
        <ItemNotification />
        <ItemNotification />
        <ItemNotification />
        <ItemNotification />
      </View>
    </Container>
  );
};

export default Notifications;

import * as React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";
import useFriend from "@/hooks/useFriend";
import Container from "../Container";
import Header from "@/components/Commons/Header";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";

const ListFriend = () => {
  //
  const { listFriend } = useFriend(3);
  //
  return (
    <Container>
      <Header title="Friends" />
      <View style={tailwind(`p-3`)}>
        <View
          style={tailwind(
            `w-full bg-gray-300 my-2 rounded-full flex-row items-center gap-3 px-3`
          )}
        >
          <AntDesign
            name="search1"
            size={20}
            style={tailwind(`text-gray-600`)}
          />
          <TextInput
            placeholderTextColor="gray"
            placeholder="Search friend"
            style={tailwind(`p-3 rounded-lg`)}
          />
        </View>
        <View style={tailwind(`flex-row py-3 justify-between`)}>
          <Text style={tailwind(`font-bold`)}>1.842 friends</Text>
          <Text style={tailwind(`font-bold text-primary`)}>Sort</Text>
        </View>
      </View>
      <ScrollView>
        <View style={tailwind(`flex-1 flex-col gap-3 px-3`)}>
          {listFriend?.map((item) => (
            <View
              key={item?.user?.id}
              style={tailwind(`flex-row gap-3 items-center`)}
            >
              <View style={tailwind(`flex-1 flex-row gap-3 items-center`)}>
                <Avatar size={12} uri={item?.user?.avatar} />
                <View style={tailwind(`flex-1`)}>
                  <Text style={tailwind(`font-bold text-lg`)}>
                    {item?.user?.name}
                  </Text>
                  {item?.manual ? (
                    <Text style={tailwind(`text-gray-500`)}>
                      {`${item?.manual}  manual friend`}
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
              <View style={tailwind(`flex-row gap-3 items-center`)}>
                <Fontisto name="messenger" size={20} color="gray" />
                <Entypo name="dots-three-horizontal" size={20} color="gray" />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default ListFriend;

import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import Container from "../Container";
import useFriend from "@/hooks/useFriend";
import Header from "@/components/Commons/Header";
import tailwind from "@/tailwind";
import ItemFriend from "../Friends/ItemFriend";

const RequestFriend = () => {
  //
  const { listFriend, handleUpdate } = useFriend(1);
  //
  return (
    <Container>
      <Header title="Request" />
      <ScrollView>
        <View style={tailwind(`p-3`)}>
          <Text style={tailwind(`font-bold flex-1`)}>
            Friends which are know
          </Text>
          <View style={tailwind(`flex-col gap-3 py-3`)}>
            {listFriend.map((item) => (
              <ItemFriend
                key={item?.user?.id}
                friend={item}
                update={handleUpdate}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default RequestFriend;

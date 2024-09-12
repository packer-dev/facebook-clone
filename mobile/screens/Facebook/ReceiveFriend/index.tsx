import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import Container from "../Container";
import useFriend from "@/hooks/useFriend";
import Header from "@/components/Commons/Header";
import tailwind from "@/tailwind";
import ItemFriend from "../Friends/ItemFriend";

const ReceiveFriend = () => {
  //
  const { listFriend, handleUpdate } = useFriend(2);
  //
  return (
    <Container>
      <Header title="Receive" />
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
                isSuggest
                update={handleUpdate}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ReceiveFriend;

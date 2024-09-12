import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ItemFriend from "./ItemFriend";
import Container from "../Container";
import Header from "./Header";
import useFriend from "@/hooks/useFriend";
import tailwind from "@/tailwind";

const Friends = ({ route }: any) => {
  //
  const { listFriend, loading, handleUpdate } = useFriend(2);
  //
  return (
    <Container scrollView route={route}>
      <Header />
      <View style={tailwind(`flex-row justify-between items-center p-3`)}>
        <Text style={tailwind(`font-bold`)}>Request friends</Text>
        <Text style={tailwind(`text-primary`)}>View all</Text>
      </View>
      <View style={tailwind(`mt-2 gap-6 flex-col px-3`)}>
        {listFriend?.map((item) => (
          <ItemFriend
            key={item?.user?.id}
            friend={item}
            update={handleUpdate}
          />
        ))}
        {loading && (
          <View style={tailwind(`flex-row justify-center items-center py-4`)}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    </Container>
  );
};

export default Friends;

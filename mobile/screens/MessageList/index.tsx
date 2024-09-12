import * as React from "react";
import { View } from "react-native";
import Header from "./Header";
import Search from "./Search";
import Story from "./Story";
import ListGroup from "./ListGroup";
import Wrapper from "../Wrapper";
import Navbar from "@/components/Navbar";
import tailwind from "@/tailwind";

const MessageList = ({ route }: any) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1`)}>
        <View style={tailwind(`flex-1`)}>
          <Header />
          <Search />
          <Story />
          <ListGroup />
        </View>
        <Navbar current={route?.name} />
      </View>
    </Wrapper>
  );
};

export default MessageList;

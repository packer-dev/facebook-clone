import * as React from "react";
import { View } from "react-native";
import tailwind from "../tailwind";
import { AppContext } from "../contexts/index";
import CurrentUser from "./Messenger/CurrentUser";
import Sender from "./Messenger/Sender";

const Content = () => {
  const {
    state: { messages, user },
  } = React.useContext(AppContext);
  return (
    <View style={tailwind(`flex-col gap-3 pt-3 pb-12`)}>
      {messages?.map((message) =>
        message?.user?.id === user?.id ? (
          <CurrentUser message={message} key={message.id} />
        ) : (
          <Sender message={message} key={message.id} />
        )
      )}
    </View>
  );
};

export default Content;

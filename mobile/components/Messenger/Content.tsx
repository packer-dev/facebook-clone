import * as React from "react";
import { View } from "react-native";
import Sender from "./Sender";
import CurrentUser from "./CurrentUser";
import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";

const Content = () => {
  const {
    state: { messages, user, groupCurrent },
  } = React.useContext(AppContext);
  return (
    <View style={tailwind(`flex-col gap-3 py-3`)}>
      {messages?.map((message) =>
        message?.user?.id === user?.id ? (
          <CurrentUser
            message={message}
            key={message?.id}
            lastMessage={groupCurrent?.last_message}
          />
        ) : (
          <Sender
            message={message}
            key={message?.id}
            lastMessage={groupCurrent?.last_message}
          />
        )
      )}
    </View>
  );
};

export default Content;

import { Message } from "@/interfaces/Message";
import tailwind from "@/tailwind";
import { Image, Text, View } from "react-native";
import Animation from "../Commons/Animation";

const MessageContent = ({
  message,
  type,
}: {
  message?: Message;
  type: "sender" | "current";
}) => {
  switch (message?.content?.type) {
    case 1:
      return type === "sender" ? (
        <Text style={tailwind(`text-gray-900`)}>{message?.content?.text}</Text>
      ) : (
        <View style={tailwind(`ml-auto bg-primary p-3 rounded-lg`)}>
          <Text style={tailwind(`text-white`)}>{message.content?.text}</Text>
        </View>
      );
    case 2:
      return <Animation sticker={JSON.parse(message?.content?.text ?? "")} />;
    case 3:
      return type === "sender" ? (
        <Image
          source={{ uri: message.content.text }}
          alt=""
          style={tailwind(`w-80 h-56 rounded-lg object-cover`)}
        />
      ) : (
        <View style={tailwind(`ml-auto p-3 rounded-lg`)}>
          <Image
            source={{ uri: message.content.text }}
            alt=""
            style={tailwind(`w-80 h-56 rounded-lg object-cover`)}
          />
        </View>
      );
    default:
      return <Text>Developing this feature.</Text>;
  }
};

export default MessageContent;

import { View, Text, Image } from "react-native";
import moment from "moment";
import { Message } from "@/interfaces/Message";
import tailwind from "@/tailwind";
import Animation from "../Commons/Animation";

type SenderProps = {
  message?: Message;
  lastMessage?: Message;
};

const Sender = ({ message, lastMessage }: SenderProps) => {
  return (
    <>
      {message?.content?.type && lastMessage?.id === message?.id && (
        <Text style={tailwind(`text-gray-500 text-xs text-center`)}>
          {moment(message?.time_created).fromNow()}
        </Text>
      )}
      {message?.content?.type === 3 && (
        <Text style={tailwind(`text-gray-600 font-semibold text-center`)}>
          You add Packer Tra to group.
        </Text>
      )}
      {message?.content?.type !== 3 && (
        <View style={tailwind(`w-11/12 flex-row gap-4 items-end px-3`)}>
          <Image
            source={{
              uri: message?.user?.avatar ?? `https://picsum.photos/536/354`,
            }}
            style={tailwind(`w-8 h-8 rounded-full`)}
          />
          <View style={tailwind(`max-w-11/12 flex-col gap-1`)}>
            <View style={tailwind(`flex-row justify-end`)}>
              <View
                style={tailwind(
                  `ml-auto ${
                    message?.content?.type === 1 ? "bg-gray-300" : ""
                  } p-3 rounded-lg`
                )}
              >
                {message?.content?.type === 1 ? (
                  <Text style={tailwind(`text-gray-900`)}>
                    {message?.content?.text}
                  </Text>
                ) : (
                  <Animation
                    sticker={JSON.parse(message?.content?.text ?? "")}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Sender;

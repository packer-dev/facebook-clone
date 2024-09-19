import { Background } from "@/interfaces/Post";
import tailwind from "@/tailwind";
import { View } from "react-native";
import { Image } from "react-native-animatable";

const BackgroundContent = ({
  background,
  content,
}: {
  background?: Background;
  content: string;
}) => {
  return (
    <View
      style={[
        tailwind(`w-full relative h-80 bg-cover rounded-lg`),
        background?.key === "backgroundColor"
          ? { backgroundColor: background.value }
          : {},
      ]}
    >
      {background?.key === "backgroundImage" && (
        <Image
          style={tailwind(`absolute w-full h-full top-0 left-0`)}
          source={{ uri: background.value }}
        />
      )}
      <View
        style={tailwind(`text-2xl w-full px-4 flex justify-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2
        -translate-y-1/2 break-all text-center z-20`)}
      >
        {content}
      </View>
    </View>
  );
};

export default BackgroundContent;

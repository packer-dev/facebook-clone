import tailwind from "@/tailwind";
import { Image, View } from "react-native";

const AvatarContent = ({ uri }: { uri: string }) => {
  return (
    <View style={tailwind(`w-full relative`)}>
      <Image
        source={{
          uri: uri || `https://picsum.photos/536/354`,
        }}
        style={tailwind(`w-full h-60`)}
      />
    </View>
  );
};

export default AvatarContent;

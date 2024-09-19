import tailwind from "@/tailwind";
import { Dimensions, Image, View } from "react-native";

const width = Dimensions.get("window").width;

const CoverContent = ({ uri }: { uri: string }) => {
  return (
    <View style={tailwind(`w-full relative`)}>
      <Image
        source={{
          uri: uri || `https://picsum.photos/536/354`,
        }}
        style={tailwind(`w-full h-60 absolute top-0 left-0 z-0`)}
      />
      <View
        style={[
          tailwind(
            `rounded-full bg-white p-1 mt-12 border-gray-300 border mx-auto relative z-20`
          ),
          {
            width: (width * 75) / 100,
            height: (width * 75) / 100,
          },
        ]}
      >
        <Image
          source={{ uri: uri || `https://picsum.photos/536/354` }}
          style={tailwind(`w-full h-full rounded-full`)}
        />
      </View>
    </View>
  );
};

export default CoverContent;

import tailwind from "@/tailwind";
import { View } from "react-native-animatable";

const Loading = () => {
  return (
    <View
      style={tailwind(
        `relative h-48 bg-gray-300 border-2 border-gray-300 flex-row justify-center items-start pt-6`
      )}
    >
      <View
        style={tailwind(
          `absolute z-50 rounded-full border-4 border-white -bottom-20 mb-10 left-3`
        )}
      >
        <View style={tailwind(`bg-gray-300 w-40 h-40 rounded-full`)} />
      </View>
    </View>
  );
};

export default Loading;

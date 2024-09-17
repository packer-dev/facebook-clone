import tailwind from "@/tailwind";
import { View } from "react-native";

const LocalStream = () => {
  return (
    <View
      style={tailwind(
        `absolute top-4 right-4 w-30 h-48 rounded-lg border border-white`
      )}
    />
  );
};

export default LocalStream;

import { View, Image } from "react-native";
import tailwind from "../tailwind";
import { ReactNode } from "react";

type AvatarProps = {
  size?: number;
  uri?: string;
  online?: boolean;
  children?: ReactNode;
  loading?: boolean;
};

const Avatar = ({
  size = 16,
  uri,
  online = true,
  children,
  loading,
}: AvatarProps) => {
  return (
    <View style={tailwind(`relative`)}>
      {loading ? (
        <View
          style={tailwind(
            `w-${size} h-${size} rounded-full mx-auto bg-gray-300`
          )}
        />
      ) : (
        <Image
          source={{ uri: uri ?? `https://picsum.photos/536/354` }}
          style={tailwind(`w-${size} h-${size} rounded-full mx-auto`)}
        />
      )}
      {online && (
        <View
          style={tailwind(
            `w-4 h-4 rounded-full bg-green-500 absolute bottom-1 -mr-1 right-0 border-2 border-white`
          )}
        />
      )}
      {children}
    </View>
  );
};

export default Avatar;

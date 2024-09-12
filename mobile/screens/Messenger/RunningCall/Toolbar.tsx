import React from "react";
import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import tailwind from "@/tailwind";

const Toolbar = () => {
  const [isEnableAudio, setIsEnableAudio] = React.useState(false);
  const [isEnableVideo, setIsEnableVideo] = React.useState(false);
  return (
    <View style={tailwind(`flex-row justify-center items-center p-3 gap-5`)}>
      <View
        style={tailwind(
          `w-14 h-14 rounded-full flex-row justify-center items-center`
        )}
      >
        <Feather
          onPress={() => setIsEnableAudio(!isEnableAudio)}
          name={isEnableAudio ? "mic" : "mic-off"}
          size={24}
          color="white"
        />
      </View>
      <View
        style={tailwind(
          `w-14 h-14 rounded-full flex-row justify-center items-center`
        )}
      >
        <Feather
          onPress={() => setIsEnableVideo(!isEnableVideo)}
          name={isEnableVideo ? "video" : "video-off"}
          size={24}
          color="white"
        />
      </View>
      <View
        style={tailwind(
          `w-14 h-14 rounded-full flex-row justify-center items-center`
        )}
      >
        <AntDesign name="swap" size={24} color="white" />
      </View>
      <TouchableOpacity
        style={tailwind(
          `w-14 h-14 rounded-full flex-row justify-center items-center bg-red-500`
        )}
      >
        <SimpleLineIcons name="call-end" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;

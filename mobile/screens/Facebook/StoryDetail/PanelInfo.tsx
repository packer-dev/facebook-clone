import * as React from "react";
import { View, Text } from "react-native";
import Panel from "@/panels/index";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tailwind from "@/tailwind";

const PanelInfo = () => {
  return (
    <Panel backgroundColor="#F2F2F2">
      <View
        style={tailwind(
          `bg-white px-3 py-5 mt-3 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <AntDesign name="infocirlce" size={24} color="black" />
        <Text style={tailwind(`font-bold`)}>Report story</Text>
      </View>
      <View
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <Ionicons name="copy" size={24} color="black" />
        <View style={tailwind(`flex-1 flex-col gap-1.5`)}>
          <Text style={tailwind(`font-bold`)}>
            Copy link to share this story
          </Text>
          <Text style={tailwind(`text-gray-500`)}>
            This story will display with friend of Packer Tra in 24 hours.
          </Text>
        </View>
      </View>
      <View
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <MaterialCommunityIcons name="close-box" size={24} color="black" />
        <Text style={tailwind(`font-bold`)}>Turn off story of Packer</Text>
      </View>
      <View
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <MaterialCommunityIcons name="ladybug" size={24} color="black" />
        <Text style={tailwind(`font-bold`)}>Happen error</Text>
      </View>
    </Panel>
  );
};

export default PanelInfo;

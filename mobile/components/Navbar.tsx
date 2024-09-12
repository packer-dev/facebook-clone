import * as React from "react";
import tailwind from "../tailwind";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type ScreenList = NavigationProp<{
  MessageList: undefined;
  Story: undefined;
}>;

const Navbar = ({ current }: any) => {
  const navigation = useNavigation<ScreenList>();
  return (
    <View style={tailwind(`py-3 border-t border-gray-300 flex-row`)}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MessageList")}
        style={tailwind(`w-1/2`)}
      >
        <View
          style={tailwind(
            `relative flex-col gap-2 justify-center items-center self-center`
          )}
        >
          <Ionicons
            name="chatbubble"
            size={24}
            style={tailwind(
              current === "MessageList" ? `text-primary` : "text-gray-500"
            )}
          />
          <Text
            style={tailwind(
              current === "MessageList" ? `text-primary` : "text-gray-500"
            )}
          >
            Chats
          </Text>
          <Octicons
            style={tailwind(
              `rounded-full text-primary absolute -top-2 mt-0.5 -right-2 z-10`
            )}
            name="dot-fill"
            size={20}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Story")}
        style={tailwind(`w-1/2`)}
      >
        <View
          style={tailwind(
            `relative flex-col justify-center items-center self-center`
          )}
        >
          <Ionicons
            name="book-sharp"
            size={24}
            style={tailwind(
              current === "Story" ? `text-primary` : "text-gray-500"
            )}
          />
          <Text
            style={tailwind(
              current === "Story" ? `text-primary` : "text-gray-500"
            )}
          >
            Story
          </Text>
          <Octicons
            style={tailwind(
              `rounded-full text-primary absolute -top-2 mt-0.5 -right-2 z-10`
            )}
            name="dot-fill"
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

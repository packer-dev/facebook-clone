import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import tailwind from "@/tailwind";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";

type ItemNavbarProps = {
  current: any;
  navbar: any;
  isMessenger?: boolean;
  width?: number;
};

type ScreenList = NavigationProp<any>;

const ItemNavbar = ({
  current,
  navbar,
  isMessenger,
  width,
}: ItemNavbarProps) => {
  const { updateData } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const Icon = navbar.iconComponent;
  return (
    <TouchableOpacity
      onPress={() => {
        if (navbar.route === "Facebook") {
          updateData("list_post", []);
        }
        navigation.navigate(navbar.route, {
          reload: true,
        });
      }}
      style={{
        ...tailwind(isMessenger ? `w-1/2` : ``),
        ...(width ? { width } : {}),
      }}
    >
      <View
        style={tailwind(
          `relative flex-col ${
            isMessenger ? "" : "gap-2"
          } justify-center items-center self-center`
        )}
      >
        <Icon
          name={navbar.iconName}
          size={24}
          style={tailwind(
            `${current === navbar.route ? "text-primary" : "text-gray-700"} ${
              isMessenger ? "" : "h-7 self-center"
            }`
          )}
        />
        <Text
          style={tailwind(
            `${current === navbar.route ? "text-primary" : "text-gray-700"} ${
              isMessenger ? "" : "text-xs"
            }`
          )}
        >
          {navbar.name}
        </Text>
        {isMessenger && (
          <View
            style={tailwind(
              `w-2.5 h-2.5 rounded-full bg-red-500 absolute -top-1.5 mt-0.5 -right-1.5 z-10`
            )}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ItemNavbar;

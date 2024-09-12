import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";

const Header = ({ loading }: { loading?: boolean }) => {
  //
  const {
    state: { visit, user },
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  //
  return (
    <View
      style={tailwind(
        `flex-row justify-between items-center pt-5 pb-3 px-3 border-b border-gray-300`
      )}
    >
      <AntDesign
        name="left"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={tailwind(`flex-row gap-2 items-center`)}>
        {loading ? (
          <></>
        ) : (
          <>
            <Text style={tailwind(`font-semibold`)}>{visit?.name}</Text>
            {visit?.id === user?.id ? (
              <>
                <Text
                  style={tailwind(
                    `text-xs rounded-full text-white bg-red-500 p-1`
                  )}
                >
                  +99
                </Text>
                <AntDesign name="caretdown" size={10} color="black" />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </View>
      <View style={tailwind(`flex-row gap-5`)}>
        {visit?.id === user?.id && (
          <TouchableOpacity>
            <FontAwesome name="pencil" size={22} color="black" />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

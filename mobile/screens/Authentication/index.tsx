import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthenticationProps } from "./AuthenticationProps";
import tailwind from "@/tailwind";
import Button from "@/components/Commons/Button";

type ScreenList = NavigationProp<{
  Login: undefined;
  Register: undefined;
}>;

const Authentication = ({
  children,
  handleSubmit,
  buttonText,
  type,
}: AuthenticationProps) => {
  const navigation = useNavigation<ScreenList>();
  return (
    <View
      style={tailwind(
        `flex-1 bg-white px-5 flex-col items-center flex justify-center`
      )}
    >
      <View style={tailwind(`w-full`)}>
        <FontAwesome5
          name="facebook"
          size={72}
          style={tailwind(`text-primary mx-auto pb-16`)}
        />
        {children}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(type === "Login" ? "Register" : "Login")
          }
        >
          <Text
            style={tailwind(`text-right my-3 text-gray-700 font-bold text-sm`)}
          >
            {type === "Login" ? `Register` : "Login"}
          </Text>
        </TouchableOpacity>
        <Button text={buttonText} onClick={() => handleSubmit?.()} />
      </View>
    </View>
  );
};

export default Authentication;

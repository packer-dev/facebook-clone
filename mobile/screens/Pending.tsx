import * as React from "react";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import useWebRTC from "@/hooks/useWebRTC";
import { checkTokenExpired } from "@/apis/userAPIs";
import { userModel } from "@/models";
import tailwind from "@/tailwind";

type ScreenList = NavigationProp<{
  Facebook: undefined;
  Login: undefined;
}>;

const Pending = () => {
  const { updateData } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  useWebRTC();
  React.useEffect(() => {
    const fetchData = async () => {
      const token = await SecureStore.getItemAsync("token");
      const userResponse = await checkTokenExpired(token || "");
      if (userResponse) updateData("user", userResponse);
      navigation.navigate(userResponse ? "Facebook" : "Login");
    };
    fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={tailwind(`py-12 justify-center flex-row items-center flex-1`)}>
      <FontAwesome5
        name="facebook"
        size={80}
        style={tailwind(`text-primary`)}
      />
    </View>
  );
};

export default Pending;

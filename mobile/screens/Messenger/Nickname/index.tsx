import Avatar from "@/components/Avatar";
import Header from "@/components/Commons/Header";
import { AppContext } from "@/contexts";
import { Member } from "@/interfaces/Member";
import Wrapper from "@/screens/Wrapper";
import tailwind from "@/tailwind";
import React from "react";
import {
  Alert,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";

const Nickname = () => {
  //
  const {
    state: { groupCurrent },
  } = React.useContext(AppContext);
  const handleOK = () => {};
  const handleChange = (item: Member) => {
    if (Platform.OS === "ios") {
      Alert.prompt(
        "Edit nickname",
        "Everyone in group chat will see this nickname.",
        [{ text: "Cancel" }, { text: "OK", onPress: handleOK }],
        "default",
        item?.nickname
      );
    }
  };
  //
  return (
    <Wrapper overflowHidden>
      <Header title="Members" hiddenSearch />
      <View style={tailwind(`flex-1`)}>
        <ScrollView>
          <View style={tailwind(`flex-col gap-3 p-3`)}>
            {groupCurrent?.members?.map((item) => (
              <TouchableOpacity
                onPress={() => handleChange(item)}
                key={item?.id}
                style={tailwind(`flex-row gap-3 items-center`)}
              >
                <Avatar size={14} uri={item?.user?.avatar} />
                <View>
                  <Text style={tailwind(`font-bold`)}>
                    {item?.nickname ? item?.nickname : item?.user?.name}
                  </Text>
                  <Text style={tailwind(`text-gray-600 text-sm`)}>
                    {!item?.nickname ? "Nickname" : item?.user?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Nickname;

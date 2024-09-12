import * as React from "react";
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import ItemStory from "./ItemStory";
import { AppContext } from "@/contexts";
import { getFriendsByUserId } from "@/apis/userAPIs";
import tailwind from "@/tailwind";

const width = Dimensions.get("window").width;

const Story = () => {
  const {
    updateData,
    state: { friends, user },
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      setLoading(true);
      const result = await getFriendsByUserId(user?.id);
      updateData("friends", result);
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <View style={tailwind(`px-3 pb-3 border-b border-gray-200`)}>
      <ScrollView
        horizontal
        style={{ width }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={tailwind(`flex-row gap-6 pr-6`)}>
          <TouchableWithoutFeedback>
            <View style={tailwind(`flex-col gap-2 justify-center`)}>
              <View
                style={tailwind(
                  `w-14 h-14 rounded-full bg-gray-200 flex justify-center items-center`
                )}
              >
                <Entypo name="plus" size={28} color="gray" />
              </View>
              <Text
                style={tailwind(`text-xs font-semibold text-gray-600 mx-auto`)}
              >
                Your story
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {loading &&
            Array(4)
              .fill(1)
              .map((item, index) => (
                <ItemStory key={item + index} loading={true} />
              ))}
          {[...friends]?.map((friend) => (
            <ItemStory key={friend.id} friend={friend} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Story;

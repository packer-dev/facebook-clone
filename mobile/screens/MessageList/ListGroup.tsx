import * as React from "react";
import { View, ScrollView } from "react-native";
import ItemGroup from "./ItemGroup";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import { getMessageListByIdUser } from "@/apis/messageAPIs";
import tailwind from "@/tailwind";

type ScreenList = NavigationProp<{
  Main: undefined;
}>;

const ListGroup = () => {
  //
  const {
    updateData,
    state: { groups, user },
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation<ScreenList>();
  React.useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      setLoading(true);
      const result = await getMessageListByIdUser(user?.id);
      updateData("groups", result);
      setLoading(false);
    };

    user && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  const sorted = groups.sort((a: any, b: any) => {
    const dateA = new Date(a?.last_message?.time_created?.replace(" ", "T"));
    const dateB = new Date(b?.last_message?.time_created?.replace(" ", "T"));

    // Sort in descending order
    return (dateB as any) - (dateA as any);
  });
  //
  return (
    <ScrollView style={tailwind(`flex-1`)}>
      <View style={tailwind(`flex flex-col gap-4 p-3`)}>
        {loading &&
          Array(3)
            .fill(1)
            .map((item, index) => (
              <ItemGroup key={item + index} loading={loading} />
            ))}
        {!loading &&
          groups?.length > 0 &&
          sorted.map((group) => (
            <ItemGroup
              group={group}
              key={group?.id}
              handleClick={() => {
                navigation.navigate("Main");
                updateData("groupCurrent", group);
              }}
            />
          ))}
        {loading && <></>}
      </View>
    </ScrollView>
  );
};

export default ListGroup;

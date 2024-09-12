import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Entypo,
  AntDesign,
  Fontisto,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { User } from "@/interfaces/User";
import { AppContext } from "@/contexts";
import { checkRelationship, sendRelationship } from "@/apis/userAPIs";
import tailwind from "@/tailwind";
import IconButton from "@/components/IconButton";

type ScreenList = NavigationProp<{
  ToolbarProfile: undefined;
  Main?: {
    friend?: User | null;
  };
}>;

const DetailProfile = ({ relationship = { manual: 0, amount: 0 } }) => {
  const [status, setStatus] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation<ScreenList>();
  const {
    state: { visit, user, trigger },
    updateData,
  } = React.useContext(AppContext);
  const isCurrent = visit?.id === user?.id;
  const handleRelationship = async () => {
    if (status === 3) return;
    setLoading(true);
    const statusAPI = status === 1 ? "" : "accept";
    await sendRelationship({
      user1: user?.id,
      user2: visit?.id,
      status: !status ? "send" : statusAPI,
    });
    const statusUI = status === 1 ? null : 3;
    setStatus(!status ? 1 : statusUI);
    setLoading(false);
    updateData("trigger", { ...trigger, suggestFriend: Math.random() });
  };
  const iconNameStatus = (() => {
    switch (status) {
      case 1:
        return "deleteuser";
      case 2:
        return "user-check";
      case 3:
        return "user-friends";
      default:
        return "adduser";
    }
  })();
  const iconContainerStatus = (() => {
    if (status === 2) return Feather;
    if (status === 3) return FontAwesome5;
    return AntDesign;
  })();
  const textStatus = (() => {
    if (loading) return "";
    switch (status) {
      case 1:
        return "Cancel request";
      case 2:
        return "Accept request";
      case 3:
        return "Friend";
      default:
        return "Add friend";
    }
  })();
  const styleStatus = (() => {
    if (!status || status === 2) return "bg-primary";
    if (status === 3) return "bg-gray-400";
    return "bg-gray-500";
  })();
  React.useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      setLoading(true);
      setStatus("");
      const result = await checkRelationship(user?.id, visit?.id ?? "");
      setStatus(result);
      setLoading(false);
    };
    visit?.id !== user?.id && fetchData();
  }, [visit, user, trigger.profileRelationship]);
  return (
    <View style={tailwind(`px-3 mt-5`)}>
      <Text style={tailwind(`font-bold text-2xl mt-12 mb-1.5`)}>
        {visit?.name}
      </Text>
      {!isCurrent && (
        <View style={tailwind(`flex-row gap-1 mt-1`)}>
          <Text style={tailwind(`font-bold`)}>{relationship?.amount}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>friends</Text>
          <Text style={tailwind(`-mt-1 font-bold`)}>.</Text>
          <Text style={tailwind(`font-bold`)}>{relationship?.manual}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>manual friends</Text>
        </View>
      )}
      <Text style={tailwind(`py-1`)}>{visit?.bio}</Text>
      {isCurrent ? (
        <>
          <TouchableOpacity
            style={tailwind(
              `w-full h-11 rounded-lg mt-2 mb-1 flex-row justify-center items-center bg-primary`
            )}
          >
            <Entypo name="plus" size={24} style={tailwind(`text-white`)} />
            <Text style={tailwind(`text-white font-bold`)}>Add story</Text>
          </TouchableOpacity>
          <View style={tailwind(`flex-row gap-1`)}>
            <TouchableOpacity
              style={tailwind(
                `flex-1 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
              )}
            >
              <Entypo name="plus" size={24} style={tailwind(`text-gray-800`)} />
              <Text style={tailwind(`text-gray-800 font-bold`)}>
                Edit personal profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ToolbarProfile")}
              style={tailwind(
                `p-2 w-11 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
              )}
            >
              <Entypo name="dots-three-horizontal" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={tailwind(`flex-row gap-2 py-2`)}>
          <IconButton
            onPress={handleRelationship}
            iconName={iconNameStatus}
            IconContainer={iconContainerStatus}
            text={textStatus}
            iconSize={24}
            styles={`p-2 h-11 flex-1 ${styleStatus} justify-center`}
            haveBackground={status !== 3}
            loading={loading}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Main", {
                friend: visit,
              })
            }
            style={tailwind(
              `flex-1 h-11 rounded-lg mb-2 flex-row gap-1.5 justify-center items-center bg-gray-400`
            )}
          >
            <Fontisto
              name="messenger"
              size={20}
              style={tailwind(`text-gray-800`)}
            />
            <Text style={tailwind(`text-gray-800 font-bold`)}>
              Send message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate("ToolbarProfile")}
            style={tailwind(
              `p-2 w-11 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
            )}
          >
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DetailProfile;

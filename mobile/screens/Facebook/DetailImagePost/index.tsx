import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import tailwind from "@/tailwind";

const DetailImagePost = ({ route }: any) => {
  const [current, setCurrent] = React.useState(0);
  const medias = route?.params?.medias || [
    {
      url: `https://picsum.photos/536/354`,
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={tailwind(`flex-1 bg-black`)}>
      <SafeAreaView
        style={[
          tailwind(`flex-col flex-1`),
          {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: Platform.OS === "android" ? 16 : 0,
          },
        ]}
      >
        <View style={tailwind(`flex-row px-3 justify-between`)}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tailwind(
              `w-8 h-8 rounded-full bg-gray-300 flex-row items-center justify-center`
            )}
          >
            <AntDesign name="close" size={16} color="black" />
          </TouchableOpacity>
          <Text style={tailwind(`text-white`)}>1/9</Text>
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </View>
        <View style={tailwind(`flex-1 py-5`)}>
          <TouchableOpacity
            onPress={() =>
              setCurrent(current + 1 >= medias.length ? 0 : current + 1)
            }
            style={tailwind(`flex-1`)}
          >
            <Image
              style={tailwind(`flex-1`)}
              source={{ uri: medias[current].url }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DetailImagePost;

import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Container from "../Container";
import tailwind from "@/tailwind";
import SuggestFriend from "@/components/Facebook/SuggestFriend";

const SearchUser = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View style={tailwind(`flex-row px-3 gap-3 items-center bg-white py-3`)}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor="gray"
          placeholder="Search"
          style={tailwind(`p-3 bg-gray-200 flex-1 rounded-lg`)}
        />
      </View>
      <ScrollView>
        <View
          style={tailwind(
            `flex-row justify-between px-3 pb-3 pt-1.5 items-center`
          )}
        >
          <Text style={tailwind(`font-bold`)}>Newest</Text>
          <Text style={tailwind(`text-primary`)}>View all</Text>
        </View>
        <View style={tailwind(`flex-col px-3`)}>
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <View
                key={item + index}
                style={tailwind(`flex-row gap-3 py-3 items-center`)}
              >
                <Image
                  source={{ uri: `https://picsum.photos/536/354` }}
                  style={tailwind(`w-10 h-10 rounded-full`)}
                />
                <View>
                  <Text style={tailwind(`font-bold`)}>Packer Tra</Text>
                  <Text style={tailwind(`text-gray-700 text-sm mt-0.5`)}>
                    Friend
                  </Text>
                </View>
              </View>
            ))}
        </View>
        <SuggestFriend />
      </ScrollView>
    </Container>
  );
};

export default SearchUser;

import * as React from "react";
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PanelOption from "./PanelOption";
import { AppContext } from "@/contexts";
import Header from "@/components/Commons/Header";
import Wrapper from "@/screens/Wrapper";
import { generateUUID } from "@/utils";
import AddMember from "@/popups/AddMember";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";

const width = Dimensions.get("window").width;

const MemberList = () => {
  const {
    state: { groupCurrent, popup },
    updateData,
  } = React.useContext(AppContext);

  return (
    <Wrapper overflowHidden>
      <Header
        title="Members"
        customSearch={{
          icon: AntDesign,
          name: "plus",
        }}
        handle={() => {
          updateData("popup", [
            ...popup,
            {
              id: generateUUID(),
              ui: AddMember,
              payload: {},
            },
          ]);
        }}
      />
      <View style={tailwind(`flex-row px-3 gap-3 py-2 justify-between`)}>
        <TouchableOpacity
          style={[
            tailwind(`bg-gray-300 p-2 flex-row justify-center rounded-full`),
            { width: (width - 36) / 2 },
          ]}
        >
          <Text style={tailwind(`font-semibold`)}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tailwind(`p-2 flex-row justify-center rounded-full`),
            { width: (width - 36) / 2 },
          ]}
        >
          <Text style={tailwind(`font-semibold`)}>Administrator</Text>
        </TouchableOpacity>
      </View>
      <View style={tailwind(`flex-1`)}>
        <ScrollView>
          <View style={tailwind(`flex-col gap-3 px-3 py-3`)}>
            {groupCurrent?.members?.map((member) => (
              <TouchableOpacity
                onPress={() =>
                  updateData("panel", {
                    ui: <PanelOption member={member} />,
                    payload: {},
                  })
                }
                key={member?.id}
                style={tailwind(`flex-row gap-3 items-center`)}
              >
                <Avatar size={12} uri={member?.user?.avatar} />
                <View>
                  <Text style={tailwind(`font-bold text-base text-gray-800`)}>
                    {member?.user?.name}
                  </Text>
                  <Text style={tailwind(`text-gray-600 text-xs`)}>
                    {member?.is_owner ? "Group creator" : "By Packer Tra add"}
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

export default MemberList;

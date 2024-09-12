import { sendMessageAPI } from "@/api";
import { AppContext } from "@/contexts";
import { Member } from "@/interfaces/Member";
import { User } from "@/interfaces/User";
import Panel from "@/panels";
import tailwind from "@/tailwind";
import { dataFakeMessage } from "@/utils";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";

type PanelOptionProps = {
  member: Member;
};

type ScreenList = NavigationProp<{
  DetailProfile: {
    visit: User;
  };
  Main: {
    friend: User;
  };
}>;

const PanelOption = ({ member }: PanelOptionProps) => {
  const navigation = useNavigation<ScreenList>();
  const {
    state: { user, messages, groupCurrent, groups },
    updateData,
  } = React.useContext(AppContext);
  const handleSendMessage = () => {
    if (!user || !groupCurrent) return;

    updateData("loading", true);
    updateData("panel", { ui: null, payload: {} });
    sendMessageAPI({
      message: dataFakeMessage({
        user,
        type: 3,
        text: `remove ${member?.user.name} out the group.`,
      }),
      group: {
        ...groupCurrent,
        members: groupCurrent.members.filter((item) => item.id !== member.id),
      },
    })
      .then((result) => {
        updateData("groupCurrent", result?.group);
        updateData("messages", [...messages, result?.message]);
        updateData(
          "groups",
          [...groups].map((item) => {
            if (item?.id === groupCurrent?.id) {
              return result?.group;
            }
            return item;
          })
        );
        updateData("loading", false);
        updateData("panel", {
          ui: null,
          payload: {},
        });
      })
      .catch(() => {
        updateData("loading", false);
      });
  };
  const optionGenerate = () => {
    let options = [];
    if (member?.is_owner && user?.id === member?.user?.id) {
      options = [
        {
          text: "View profile on Facebook",
          handle: () => {
            navigation.navigate("DetailProfile", {
              visit: member?.user,
            });
            updateData("panel", { ui: null, payload: {} });
          },
        },
        {
          text: "Leave group",
          redStyle: true,
          handle: () =>
            Alert.alert("Do you want to leave this group?", "", [
              {
                text: "Cancel",
              },
              {
                text: "OK",
              },
            ]),
        },
        {
          text: "Cancel",
          handle: () => updateData("panel", { ui: null, payload: {} }),
        },
      ];
    } else {
      options = [
        {
          text: "Call video",
        },
        {
          text: "Call audio",
        },
        {
          text: "View profile on Facebook",
          handle: () => {
            navigation.navigate("DetailProfile", {
              visit: member?.user,
            });
            updateData("panel", { ui: null, payload: {} });
          },
        },
        {
          text: "Set this user to administrator",
          handle: () =>
            Alert.alert(
              `Do you want to remove ${member?.user?.name} this group?`,
              "",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "OK",
                },
              ]
            ),
        },
        {
          text: "Send message",
          handle: () => {
            navigation.navigate("Main", {
              friend: member?.user,
            });
            updateData("panel", { ui: null, payload: {} });
          },
        },
        {
          text: "Block",
          redStyle: true,
          handle: () =>
            Alert.alert(
              `Do you want to remove ${member?.user?.name} this group?`,
              "",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "OK",
                },
              ]
            ),
        },
        {
          text: "Remove group",
          redStyle: true,
          handle: () =>
            Alert.alert(
              `Do you want to remove ${member?.user?.name} this group?`,
              "",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "OK",
                  onPress: handleSendMessage,
                },
              ]
            ),
        },
        {
          text: "Cancel",
          handle: () => updateData("panel", { ui: null, payload: {} }),
        },
      ];
    }

    return options;
  };
  return (
    <Panel backgroundColor="#F2F2F2">
      {optionGenerate().map((item, index) => (
        <TouchableOpacity
          key={item.text}
          onPress={() => item?.handle?.()}
          style={tailwind(
            `bg-white px-3 py-5 ${
              index === 0 ? "mt-8" : ""
            } rounded-lg mb-3 flex-row gap-3 items-center`
          )}
        >
          <Text
            style={tailwind(
              `font-bold ${item?.redStyle ? "text-red-500" : ""}`
            )}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </Panel>
  );
};

export default PanelOption;

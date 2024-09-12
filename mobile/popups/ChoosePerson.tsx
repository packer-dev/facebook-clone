import * as React from "react";
import { View, Text } from "react-native";
import Popup from "./Popup";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AppContext } from "@/contexts";
import { User } from "@/interfaces/User";
import tailwind from "@/tailwind";
import Search from "@/screens/MessageList/Search";
import Avatar from "@/components/Avatar";
const ChoosePerson = ({
  index,
  payload,
  popupId,
  children,
  title,
  handleDone,
}: any) => {
  const {
    state: { friends },
  } = React.useContext(AppContext);
  const [selected, setSelected] = React.useState<User[]>([]);
  const [search, setSearch] = React.useState("");
  return (
    <Popup
      index={index}
      hidden={payload?.hidden}
      popupId={popupId}
      title={title}
      disabled={{
        done: !selected.length,
        cancel: false,
      }}
      handleDone={() => handleDone?.(selected)}
    >
      {children}
      <Search search={search} setSearch={setSearch} />
      <View style={tailwind(`p-3 flex-col gap-3`)}>
        <Text style={tailwind(`text-gray-600 font-semibold my-2`)}>
          Suggestion
        </Text>
        {friends
          ?.filter((friend) => {
            const check = [...(payload?.current || [])].find(
              (item) => item?.id === friend?.id
            );
            return !check;
          })
          ?.filter((friend) =>
            search
              ? friend?.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1
              : true
          )
          .map((friend) => (
            <View
              key={friend.id}
              style={tailwind(`flex-row gap-4 items-center`)}
            >
              <View style={tailwind(`flex-1 flex-row gap-4 items-center`)}>
                <Avatar size={14} uri={friend?.avatar} />
                <Text style={tailwind(`font-semibold`)}>{friend.name}</Text>
              </View>
              <BouncyCheckbox
                isChecked={!!selected.find((item) => item.id === friend.id)}
                onPress={(isChecked) => {
                  if (isChecked) {
                    setSelected([...selected, friend]);
                  } else {
                    setSelected(
                      [...selected].filter((item) => item.id !== friend.id)
                    );
                  }
                }}
                style={tailwind(`w-7 h-7 rounded-sm`)}
              />
            </View>
          ))}
      </View>
    </Popup>
  );
};

export default ChoosePerson;

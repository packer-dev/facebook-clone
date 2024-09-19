import Avatar from "@/components/Avatar";
import { User } from "@/interfaces/User";
import tailwind from "@/tailwind";
import { Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ItemChoosePerson = ({
  friend,
  selected,
  setSelected,
}: {
  friend: User;
  selected: User[];
  setSelected: Function;
}) => {
  return (
    <View style={tailwind(`flex-row gap-4 items-center`)}>
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
            setSelected([...selected].filter((item) => item.id !== friend.id));
          }
        }}
        style={tailwind(`w-7 h-7 rounded-sm`)}
      />
    </View>
  );
};

export default ItemChoosePerson;

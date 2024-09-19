import { PopupProps } from "@/popups/PopupProps";
import SubPost from "./SubPost";
import { Text, View } from "react-native";
import tailwind from "@/tailwind";
import { useContext, useState } from "react";
import { AppContext } from "@/contexts";
import ItemChoosePerson from "@/popups/ItemChoosePerson";
import { User } from "@/interfaces/User";

const TagPost = ({ popupId }: PopupProps) => {
  const {
    state: { friends },
  } = useContext(AppContext);
  const [selected, setSelected] = useState<User[]>([]);
  return (
    <SubPost title="Tag other people" popupId={popupId}>
      <Text style={tailwind(`font-bold py-2`)}>Suggest</Text>
      <View style={tailwind(`flex-col gap-3`)}>
        {friends.map((item) => (
          <ItemChoosePerson
            key={item.id}
            friend={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </View>
    </SubPost>
  );
};

export default TagPost;

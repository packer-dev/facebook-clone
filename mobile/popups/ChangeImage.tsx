import * as React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { PopupProps } from "./PopupProps";
import { AppContext } from "@/contexts";
import { dataFakeGroup, dataFakeMessage, emojiList } from "@/utils";
import { sendMessageAPI } from "@/api";
import { updateInforGroupByGroup } from "@/apis/groupAPIs";
import Popup from "./Popup";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";
import GroupAvatar from "@/components/GroupAvatar";

const width = Dimensions.get("window").width - 64;

const ChangeImage = ({ index, popupId }: PopupProps) => {
  const {
    state: { user, groupCurrent, groups },
    updateData,
  } = React.useContext(AppContext);
  const [image, setImage] = React.useState<any>(groupCurrent?.image);
  const [name, setName] = React.useState(groupCurrent?.name);
  const [emoji, setEmoji] = React.useState(groupCurrent?.data?.emoji);
  const handleDone = async () => {
    if (!user || !groupCurrent) return;

    updateData("loading", true);
    const formData = new FormData();
    updateData("panel", {
      ui: null,
      payload: {},
    });
    if (typeof image === "object") {
      formData.append("file", {
        uri: image.uri,
        name: image.uri.substring(
          image.uri.lastIndexOf("/") + 1,
          image.uri.length
        ),
        type: image.mimeType || "image/jpeg",
      });
    }
    formData.append("folder", "Groups");
    formData.append("emoji", emoji ?? "🧡");
    formData.append("name", name ?? "");
    formData.append("group_id", groupCurrent?.id);
    if (name !== groupCurrent?.name) {
      const message = dataFakeMessage({
        user,
        type: 3,
        text: `renamed group into ${name}.`,
      });
      const groupNew = dataFakeGroup({ groupCurrent, message, user });
      if (groupNew)
        await sendMessageAPI({
          group: groupNew,
          message,
        });
    }
    const response = await updateInforGroupByGroup(formData);
    updateData("loading", false);
    updateData("popup", []);
    updateData("groupCurrent", response);
    updateData(
      "groups",
      [...groups].map((item) => {
        if (item?.id === groupCurrent?.id) {
          return response;
        }
        return item;
      })
    );
    Keyboard.dismiss();
  };
  const pickImage = async () => {
    // Ask for permission to access the library
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
        return;
      }
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateData("loading", true);
      const imageURI = result.assets[0];
      if (!imageURI) {
        updateData("loading", false);
        return;
      }
      setImage(imageURI);

      updateData("loading", false);
    }
  };
  return (
    <Popup
      title="Change image"
      index={index}
      popupId={popupId}
      handleDone={handleDone}
    >
      <View style={tailwind(`my-5`)}>
        {image ? (
          <Avatar
            uri={typeof image === "object" ? image?.uri : image}
            size={24}
          />
        ) : (
          <GroupAvatar group={groupCurrent} size={24} child={10} />
        )}
      </View>
      <View style={tailwind(`px-8`)}>
        <TextInput
          style={tailwind(`bg-gray-200 h-12 px-3 rounded-lg`)}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          placeholderTextColor="gray"
        />
      </View>

      <View style={tailwind(`flex-row justify-center py-5 gap-12`)}>
        <TouchableOpacity
          onPress={pickImage}
          style={tailwind(`flex-col gap-2 justify-center`)}
        >
          <View
            style={tailwind(
              `w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center`
            )}
          >
            <Ionicons name="image-outline" size={24} color="black" />
          </View>
          <Text style={tailwind(`text-sm font-semibold`)}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind(`flex-col gap-2 justify-center`)}>
          <View
            style={tailwind(
              `w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center`
            )}
          >
            <FontAwesome6 name="smile-beam" size={24} color="black" />
          </View>
          <Text style={tailwind(`text-sm font-semibold`)}>Change emoji</Text>
        </TouchableOpacity>
      </View>

      <View style={tailwind(`flex flex-row flex-wrap gap-6 px-8 pt-10`)}>
        {emojiList.map((item) => (
          <TouchableOpacity
            onPress={() => setEmoji(item)}
            key={item}
            style={{
              ...tailwind(
                `flex justify-center items-center rounded-full border ${
                  item === emoji ? "border-primary" : "border-gray-300"
                }`
              ),
              width: width / 4 - 18,
              height: width / 4 - 18,
            }}
          >
            <Text style={tailwind(`text-2xl`)}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Popup>
  );
};

export default ChangeImage;

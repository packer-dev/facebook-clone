import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import PanelProfile from "./PanelProfile";
import { AppContext } from "@/contexts";
import { updateProfileUser } from "@/apis/userAPIs";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";

const UploadProfile = ({ route }: any) => {
  const {
    state: { user, visit, panel },
    updateData,
  } = React.useContext(AppContext);
  const [imageCover, setImageCover] = React.useState(visit?.cover);
  const [imageAvatar, setImageAvatar] = React.useState(visit?.avatar);
  const [loadingCover, setLoadingCover] = React.useState(false);
  const [loadingAvatar, setLoadingAvatar] = React.useState(false);
  const pickImage = async (
    setState: Function,
    setLoading: Function,
    folder: string
  ) => {
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
      setLoading(true);
      const formData = new FormData();
      const image = result.assets[0];
      if (!image) {
        setLoading(false);
        return;
      }
      updateData("panel", {
        ui: null,
        payload: {},
      });
      formData.append("file", {
        uri: image.uri,
        name: image.uri.substring(
          image.uri.lastIndexOf("/") + 1,
          image.uri.length
        ),
        type: image.mimeType ?? "image/jpeg",
      });
      formData.append("folder", folder);
      formData.append("user_id", user?.id);
      formData.append("is_cover", folder === "Covers" ? "True" : "False");
      const res = await updateProfileUser(formData);
      let newUser = {
        ...user,
        [folder === "Covers" ? "cover" : "avatar"]: res.url,
      };
      setState(image.uri);
      updateData("user", newUser);
      updateData("visit", newUser);
      setLoading(false);
    }
  };
  React.useEffect(() => {
    setImageAvatar(visit?.avatar);
    setImageCover(visit?.cover);
  }, [visit, route]);
  return (
    <View
      style={tailwind(
        `relative h-48 bg-gray-300 border-2 border-gray-300 flex-row justify-center items-start pt-6`
      )}
    >
      {imageCover && (
        <Image source={{ uri: imageCover }} style={tailwind(`absoluteFull`)} />
      )}
      {loadingCover && (
        <View
          style={{
            ...tailwind(
              `absoluteFull rounded-full z-50 flex-col items-center justify-center`
            ),
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
      {visit?.id === user?.id && (
        <FontAwesome
          onPress={() =>
            updateData("panel", {
              ...panel,
              ui: (
                <PanelProfile
                  pickImage={() =>
                    pickImage(setImageCover, setLoadingCover, "Covers")
                  }
                />
              ),
            })
          }
          name="camera"
          size={20}
          style={tailwind(
            `absolute bottom-3 right-3 z-20 ${
              imageCover ? "text-white" : "text-gray-500"
            }`
          )}
        />
      )}
      {!imageCover && !loadingCover && visit?.id === user?.id && (
        <View style={tailwind(`flex-row gap-2 items-center`)}>
          <Feather name="image" size={20} color="black" />
          <Text style={tailwind(`font-bold`)}>Add cover image</Text>
        </View>
      )}
      <View
        style={tailwind(
          `absolute z-50 rounded-full border-4 border-white -bottom-20 mb-10 left-3`
        )}
      >
        <Avatar size={40} uri={imageAvatar} online={false}>
          {loadingAvatar && visit?.id === user?.id && (
            <View
              style={{
                ...tailwind(
                  `absoluteFull rounded-full z-50 flex-col items-center justify-center`
                ),
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          )}
          {!loadingAvatar && visit?.id === user?.id && (
            <TouchableOpacity
              onPress={() =>
                updateData("panel", {
                  ...panel,
                  ui: (
                    <PanelProfile
                      pickImage={() =>
                        pickImage(setImageAvatar, setLoadingAvatar, "Avatars")
                      }
                    />
                  ),
                })
              }
              style={tailwind(
                `w-10 h-10 rounded-full bg-gray-200 items-center justify-center 
                    absolute bottom-0 right-0 z-20`
              )}
            >
              <FontAwesome name="camera" size={20} />
            </TouchableOpacity>
          )}
        </Avatar>
      </View>
    </View>
  );
};

export default UploadProfile;

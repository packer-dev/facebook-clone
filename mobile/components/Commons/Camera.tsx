import * as React from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tailwind from "@/tailwind";

const CameraCommon = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const [facing, setFacing] = useState<any>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = React.useState<any>("off");
  const [image, setImage] = React.useState<any>();
  const cameraRef = React.useRef<any>(null);
  const __takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    setImage(photo);
  };
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={tailwind(`flex-1 flex-col items-center justify-center`)}>
        <Text>We need your permission to show the camera</Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
          // style={tailwind(`mt-3`)}
        />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current: any) => (current === "back" ? "front" : "back"));
  };

  return (
    <CameraView
      ref={cameraRef}
      style={tailwind(`flex-1 relative`)}
      facing={facing}
      flash={flash}
      active={!image}
    >
      {image?.uri && (
        <Image
          source={{
            uri: image?.uri,
          }}
          style={tailwind(`flex-1 absolute top-0 left-0 bottom-0 right-0 z-30`)}
        />
      )}
      <SafeAreaView style={tailwind(`flex-1 relative z-50`)}>
        <View style={tailwind(`flex-1 relative`)}>
          <View
            style={[
              tailwind(`flex-row justify-between p-3 w-full`),
              {
                backgroundColor: "rgba(0, 0, 0, 0.5",
              },
            ]}
          >
            <AntDesign
              onPress={() => {
                if (image) setImage(null);
                else if (!route?.params?.handleBack) navigation.goBack();
                else route?.params?.handleBack?.();
              }}
              name={image ? "close" : "left"}
              size={24}
              color="white"
            />
            <View style={tailwind(`flex-row gap-3`)}>
              <AntDesign
                onPress={toggleCameraFacing}
                name="swap"
                size={24}
                color="white"
              />
              <MaterialIcons
                onPress={() => {
                  const status = ["off", "on", "auto"];
                  const index = status.findIndex((item) => item === flash);
                  const pos = index === status.length - 1 ? 0 : index + 1;
                  setFlash(status[pos]);
                }}
                name={flash ? "flash-on" : "flash-off"}
                size={24}
                color="white"
              />
            </View>
          </View>
          {!image && (
            <View
              style={tailwind(
                `flex-row absolute bottom-0 z-50 left-0 justify-center py-6 w-full`
              )}
            >
              <TouchableOpacity
                onPress={__takePicture}
                style={tailwind(
                  `w-16 h-16 mx-auto rounded-full border-4 border-white bg-primary`
                )}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
      {image && (
        <View
          style={[
            tailwind(`w-full px-6 pt-6 pb-10 absolute bottom-0 left-0 z-50`),
            {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          ]}
        >
          <View style={tailwind(`flex-row gap-3 items-center`)}>
            <AntDesign name="download" size={24} color="white" />
            <Text style={tailwind(`text-white font-bold`)}>Download</Text>
          </View>
          <TouchableOpacity
            onPress={async () => {
              navigation.navigate("CreatePost", {
                asset: image,
              });
            }}
            style={tailwind(`absolute -top-7 border-gray-300 border w-14 h-14 right-6 rounded-full 
            bg-white flex-row justify-center items-center z-50`)}
          >
            <Ionicons
              name="send"
              size={28}
              style={tailwind(`text-primary pl-1`)}
            />
          </TouchableOpacity>
        </View>
      )}
    </CameraView>
  );
};

export default CameraCommon;

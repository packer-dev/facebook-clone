import { Image, Text, View, TouchableWithoutFeedback } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import tailwind from "@/tailwind";

type MediaDisplayProps = {
  medias: {
    uri: string;
  }[];
  width: number;
  real?: boolean;
};

type ScreenList = NavigationProp<{
  DetailImagePost: {
    medias: {
      uri: string;
    }[];
    index: number;
  };
}>;

const MediaDisplay = ({ medias = [], width, real }: MediaDisplayProps) => {
  const widthTopOne = (width - (real ? 4 : 28)) / 2;
  const widthTopTwo = width - (real ? 0 : 24);
  const heightTopOne = (width - (real ? 12 : 36)) / 2;

  const widthBottomOne = width - (real ? 0 : 24);
  const widthBottomTwo = (width - (real ? 24 : 28)) / 2;
  const widthBottomThree = (width - (real ? 8 : 24 + 8)) / 3;
  const widthBottom = medias.length === 4 ? widthBottomTwo : widthBottomThree;

  const heightBottomOne = width - (real ? 36 : 48);
  const heightBottomTwo = (width - (real ? 24 : 36)) / 2;
  const heightBottomThree = (width - (real ? 36 : 48)) / 3;
  const heightBottom =
    medias.length === 4 ? heightBottomTwo : heightBottomThree;
  const navigation = useNavigation<ScreenList>();
  return (
    <View
      style={{
        width: width,
        margin: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <View style={tailwind(`flex-row gap-1`)}>
        {medias?.slice(0, 2).map((media, index) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("DetailImagePost", { medias, index })
            }
            key={media.uri}
          >
            <Image
              style={[
                {
                  width: medias.length >= 2 ? widthTopOne : widthTopTwo,
                  height: medias.length >= 2 ? heightTopOne : 500,
                },
              ]}
              source={{ uri: media.uri }}
            />
          </TouchableWithoutFeedback>
        ))}
      </View>
      <View style={tailwind(`flex-row gap-1`)}>
        {medias?.slice(2, 5).map((media, index) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("DetailImagePost", {
                medias,
                index: index + 2,
              })
            }
            key={media.uri}
          >
            <View
              style={[
                tailwind(`relative`),
                {
                  width: medias.length === 3 ? widthBottomOne : widthBottom,
                  height: medias.length === 3 ? heightBottomOne : heightBottom,
                },
              ]}
            >
              <Image
                source={{ uri: media.uri }}
                style={tailwind(`w-full h-full`)}
              />
              {index === 2 && medias?.length > 5 && (
                <View
                  style={[
                    tailwind(
                      `absolute top-0 left-0 right-0 bottom-0 z-50 flex-row items-center justify-center`
                    ),
                    {
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                  ]}
                >
                  <Text style={tailwind(`font-bold text-3xl text-white`)}>
                    +{medias.length - 5}
                  </Text>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default MediaDisplay;

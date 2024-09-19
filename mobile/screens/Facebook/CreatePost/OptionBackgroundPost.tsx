import backgrounds from "@/config/backgrounds";
import { AppContext } from "@/contexts";
import Panel from "@/panels";
import tailwind from "@/tailwind";
import { useContext } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";

const width = Dimensions.get("window").width;

const OptionBackgroundPost = () => {
  const {
    state: { post },
    updateData,
  } = useContext(AppContext);
  return (
    <Panel hideOverlay name="Choose background">
      <View style={tailwind(`px-3 flex-row gap-2 flex-wrap`)}>
        <TouchableOpacity
          onPress={() => updateData("post", { ...post, background: null })}
          style={[
            tailwind(`rounded-lg bg-white border border-gray-100`),
            {
              width: (width - 8 - 8 * 4) / 5,
              height: (width - 8 - 8 * 4) / 5,
            },
          ]}
        />
        {backgrounds.map((background) => (
          <TouchableOpacity
            onPress={() => updateData("post", { ...post, background })}
            key={background.id}
            style={[
              tailwind(`rounded-lg bg-white border border-gray-100 relative`),
              {
                width: (width - 8 - 8 * 4) / 5,
                height: (width - 8 - 8 * 4) / 5,
                ...(background.key === "backgroundColor"
                  ? { backgroundColor: background.value }
                  : {}),
              },
            ]}
          >
            {background.key === "backgroundImage" && (
              <Image
                source={{ uri: background.value }}
                style={tailwind(
                  `absolute top-0 left-0 right-0 bottom-0 rounded-lg`
                )}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </Panel>
  );
};

export default OptionBackgroundPost;

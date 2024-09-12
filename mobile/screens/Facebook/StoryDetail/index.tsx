import * as React from "react";
import { View, SafeAreaView, Image, ScrollView } from "react-native";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Wrapper from "@/screens/Wrapper";
import tailwind from "@/tailwind";
import Sound from "@/components/Commons/Sound";
import Loading from "@/components/Loading";

const StoryDetail = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeOut);
    }, 2000);
  }, []);
  return (
    <Wrapper overflowHidden isStory>
      <SafeAreaView style={tailwind(`flex-1`)}>
        <ScrollView style={tailwind(`flex-1 flex-row`)} horizontal>
          <View style={tailwind(`flex-1 flex-row`)}>
            {[1, 2, 3, 4].map((item) => (
              <View
                key={item}
                style={[
                  tailwind(`relative flex-1`),
                  {
                    transform: [],
                  },
                ]}
              >
                {!loading && <Sound isPlay />}
                <Header loading={loading} />
                {!loading ? (
                  <View style={tailwind(`flex-1 relative bg-black`)}>
                    <Image
                      source={{
                        uri: `https://picsum.photos/536/354`,
                      }}
                      style={tailwind(`flex-1`)}
                    />
                  </View>
                ) : (
                  <View
                    style={tailwind(
                      `flex-1 bg-black flex-col items-center justify-center`
                    )}
                  >
                    <Loading color="white" fetching />
                  </View>
                )}
                {!loading && <Toolbar />}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Wrapper>
  );
};

export default StoryDetail;

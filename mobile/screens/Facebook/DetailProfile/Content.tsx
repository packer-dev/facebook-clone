import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import InfoProfile from "./InfoProfile";
import UploadProfile from "./UploadProfile";
import { AppContext } from "@/contexts";
import { getMediaByUserId } from "@/apis/postAPIs";
import tailwind from "@/tailwind";
import MediaList from "@/components/Facebook/MediaList";
import Post from "@/components/Facebook/Post";

const Content = () => {
  const {
    state: { list_post, visit, trigger },
  } = React.useContext(AppContext);
  const category = ["Posts", "Pictures", "Videos"];
  const [list, setList] = React.useState<any[]>([]);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const [relationship, setRelationship] = React.useState({
    amount: 0,
    manual: 0,
  });
  React.useEffect(() => {
    const fetchData = async () => {
      if (!visit) return;

      setLoading(true);
      setList([]);
      const result = await getMediaByUserId(visit?.id, current);
      setList(result?.list);
      setTotal(result?.total);
      if (!current && setRelationship) {
        setRelationship({
          amount: result?.total || 0,
          manual: result?.manual || 0,
        });
      }
      setLoading(false);
    };
    visit && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, visit]);
  React.useEffect(() => {
    if (!current) {
      const { id } = trigger.cancelRelationship || {};
      if (!id) return;
      setList([...list].filter((item) => item?.user?.id !== id));
      setTotal(+total - 1);
      setRelationship({ ...relationship, amount: relationship.amount - 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger.cancelRelationship]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UploadProfile />
      <InfoProfile relationship={relationship} />
      <View style={tailwind(`flex-row gap-6 py-5 px-3`)}>
        {category.map((item, index) => (
          <TouchableOpacity
            key={item}
            onPress={() => setCurrent(index)}
            style={tailwind(
              `px-3 py-2 ${index === current ? "bg-blue-300" : ""} rounded-full`
            )}
          >
            <Text
              style={tailwind(
                `font-bold ${index === current ? "text-blue-700" : ""}`
              )}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {loading ? (
        <View style={tailwind(`p-3 justify-center items-center`)}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <MediaList
          list={list}
          status={current}
          name={category[current] === "Posts" ? "Friends" : category[current]}
          total={total}
        />
      )}
      {!current && (
        <>
          <Text style={tailwind(`px-3 py-4 font-bold`)}>Details</Text>
          <View style={tailwind(`flex-col`)}>
            {list_post?.map((item) => (
              <Post
                key={item?.post?.id}
                post={item?.post}
                medias={item?.medias}
                feel={item?.feel}
              />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Content;

import * as React from "react";
import { View } from "react-native";
import Header from "./Header";
import Content from "./Content";
import Container from "../Container";
import Loading from "./Loading";
import { AppContext } from "@/contexts";
import { getPostByIdUser } from "@/apis/postAPIs";
import { postResponseModel } from "@/models";
import tailwind from "@/tailwind";

const DetailProfile = ({ route }: any) => {
  const {
    state: { visit, user },
    updateData,
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    if (!visit) return;

    setLoading(true);
    const posts = await getPostByIdUser(visit?.id, "true");
    updateData(
      "list_post",
      (posts?.list || []).map((item: any) => postResponseModel(item))
    );
    setLoading(false);
  };
  React.useEffect(() => {
    if (!user || !visit) return;
    user?.id !== visit?.id && fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [user, visit]);
  React.useEffect(() => {
    user && fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [user]);
  React.useEffect(() => {
    updateData("visit", route?.params?.visit);
    updateData("list_post", []);
  }, [route]);
  return (
    <Container route={route}>
      <Header loading={loading} />
      <View style={tailwind(`flex-1`)}>
        {loading ? <Loading /> : <Content />}
      </View>
    </Container>
  );
};

export default DetailProfile;

import * as React from "react";
import { getFriendUser, getSuggestFriendByUserId } from "../apis/userAPIs";
import { AppContext } from "../contexts/index";
import { User } from "../interfaces/User";

const useFriend = (status: number) => {
  const {
    state: { user },
  } = React.useContext(AppContext);
  const [listFriend, setListFriend] = React.useState<
    {
      user: User;
      manual: number;
    }[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const handleUpdate = (id: string) => {
    setListFriend([...listFriend].filter((item) => item?.user?.id !== id));
  };
  React.useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      setLoading(true);
      setListFriend([]);
      let result;
      if (status === 4) {
        result = await getSuggestFriendByUserId(user?.id);
      } else {
        result = await getFriendUser(user?.id, status);
      }
      setListFriend(result);
      setLoading(false);
    };
    user && fetchData();
  }, [user, status]);

  return { listFriend, loading, handleUpdate };
};
export default useFriend;

import React, {
  ReactNode,
  RefObject,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import FriendCanKnow from "@/components/FriendCanKnow";
import CategoryProfile from "@/modules/Profile/CategoryProfile";
import HeaderProfile from "@/modules/Profile/HeaderProfile";
import InviteProfile from "@/modules/Profile/InviteProfile";
import LoadingProfile from "@/modules/Profile/LoadingProfile";
import { PAGE_PROFILE } from "@/constants/Config";
import routes from "@/routes/profileRoutes";
import NotFound from "./NotFound";
import WrapperLogged from "./Wrapper/WrapperLogged";
import { checkRelationship, getUserById } from "@/apis/userAPIs";
import useSetPageCurrent from "@/hooks/useSetPageCurrent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUser, getUserProfile, RootState } from "@/reducers";
import {
  updateDataUserProfile,
  UserProfileReduxProps,
} from "@/reducers/userProfile";
import { User } from "@/interfaces/User";

type WrapperProfileProps = {
  id?: string;
  children?: ReactNode;
};

const WrapperProfile = forwardRef(
  ({ id, children }: WrapperProfileProps, ref?: RefObject<HTMLDivElement>) => {
    //
    const { location } = useSetPageCurrent();
    const { userProfile, loading } = useSelector<
      RootState,
      UserProfileReduxProps
    >(getUserProfile);
    const user = useSelector<RootState, User>(getUser);
    const dispatch = useDispatch<AppDispatch>();
    const refPath = useRef("");
    useEffect(() => {
      //
      const fetchData = async () => {
        dispatch(updateDataUserProfile({ key: "loading", value: true }));
        const result = await getUserById(id);
        if (result) {
          const relationship = await checkRelationship(
            user?.id,
            result?.id ?? ""
          );
          if (result === 3) {
            dispatch(updateDataUserProfile({ key: "isFriend", value: true }));
          }
          dispatch(
            updateDataUserProfile({ key: "status", value: relationship })
          );
        }
        dispatch(
          updateDataUserProfile({
            key: "userProfile",
            value: result,
          })
        );
        dispatch(updateDataUserProfile({ key: "loading", value: false }));
      };
      if (refPath.current.indexOf("profile")) fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, userProfile?.id]);
    useEffect(() => {
      ref.current?.scrollTo(0, 0);
    }, [loading, ref]);
    //
    if (loading) return <LoadingProfile />;
    if (userProfile) return children;
    if (!userProfile && !loading) return <NotFound />;
  }
);

const Profile = () => {
  //
  const { id } = useParams();
  const location = useLocation();
  const refContainer = useRef<HTMLDivElement>();
  const { loading } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  //
  return (
    <WrapperLogged>
      <WrapperProfile ref={refContainer} id={id}>
        <div
          ref={refContainer}
          className={`w-full h-screen pl-0.5 md:pl-0 overflow-y-auto overflow-x-hidden ${
            loading ? "none" : ""
          }`}
        >
          <div className="w-full bg-white dark:bg-dark-second">
            <HeaderProfile />
            <div className="dark:bg-dark-second w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
              <CategoryProfile id={id} />
              <InviteProfile />
            </div>
          </div>
          {location.pathname === PAGE_PROFILE + "/" + id && (
            <div className="w-full bg-white dark:bg-dark-main">
              <div className="dark:bg-dark-main bg-gray-100 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                <div className="w-full py-2">
                  <FriendCanKnow />
                </div>
              </div>
            </div>
          )}
          <div className="w-full relative bg-gray-100 dark:bg-dark-main pt-3">
            <div className="mx-auto relative w-full lg:flex xl:w-63% md:w-4/5 lg:w-3/4 md:mx-auto lg:flex-wrap rounded-lg">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route?.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </WrapperProfile>
    </WrapperLogged>
  );
};

export default Profile;

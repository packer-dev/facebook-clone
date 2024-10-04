import React, {
  ReactNode,
  RefObject,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import FriendCanKnow from "@/components/FriendCanKnow";
import CategoryProfile from "@/modules/Profile/CategoryProfile";
import HeaderProfile from "@/modules/Profile/HeaderProfile";
import InviteProfile from "@/modules/Profile/InviteProfile";
import LoadingProfile from "@/modules/Profile/LoadingProfile";
import { PAGE_PROFILE } from "@/constants/Config";
import {
  UserProfileContext,
  UserProfileProvider,
} from "@/contexts/UserProfileContext";
import routes from "@/routes/profileRoutes";
import NotFound from "./NotFound";
import WrapperLogged from "./Wrapper/WrapperLogged";
import { getUserById } from "@/apis/userAPIs";
import useSetPageCurrent from "@/hooks/useSetPageCurrent";

type WrapperProfileProps = {
  id?: string;
  loading?: boolean;
  setLoading?: Function;
  children?: ReactNode;
};

const WrapperProfile = forwardRef(
  (
    { id, loading, setLoading, children }: WrapperProfileProps,
    ref?: RefObject<HTMLDivElement>
  ) => {
    //
    const { location } = useSetPageCurrent();
    const {
      state: { userProfile },
      updateData,
    } = useContext(UserProfileContext);
    const refPath = useRef("");
    useEffect(() => {
      //
      let timeOut: ReturnType<typeof setTimeout>;
      const fetchData = async () => {
        setLoading(true);
        const result = await getUserById(id);
        const timeOut = setTimeout(() => {
          updateData("userProfile", result);
          setLoading(false);
          clearTimeout(timeOut);
        }, 500);
        refPath.current = id;
      };
      fetchData();
      return () => {
        clearTimeout(timeOut);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);
    useEffect(() => {
      ref.current?.scrollTo(0, 0);
    }, [loading, ref]);
    //
    return !userProfile && !loading ? (
      <NotFound />
    ) : (
      <>
        {userProfile && children}
        {loading && <LoadingProfile />}
      </>
    );
  }
);

const Profile = () => {
  //
  const { id } = useParams();
  const location = useLocation();
  const refContainer = useRef<HTMLDivElement>();
  const [loading, setLoading] = useState(true);
  //
  return (
    <WrapperLogged>
      <UserProfileProvider>
        <WrapperProfile
          ref={refContainer}
          id={id}
          setLoading={setLoading}
          loading={loading}
        >
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
      </UserProfileProvider>
    </WrapperLogged>
  );
};

export default Profile;

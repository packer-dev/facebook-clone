import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PAGE_CREATE_STORY } from "@/constants/Config";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import ButtonRelationshipUser from "./ButtonRelationshipUser";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

export default function RelationshipUserStatus() {
  //
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  const {
    state: { userProfile },
    updateData,
  } = useContext(UserProfileContext);
  const [userRelationship, setUserRelationship] = useState(null);
  const process = async (status) => {};
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = { data: { status: 3 } };
      if (unmounted) return;
      if (result.data.status === 3) {
        updateData("isFriend", true);
      }
      setUserRelationship(result.data);
    };
    if (user.id !== userProfile.id) fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);
  //
  return (
    <div className="flex md:justify-end justify-start items-center w-full md:w-auto">
      {!userRelationship && userProfile.id !== user.id && (
        <ButtonRelationshipUser
          onClick={(status) => process(status)}
          status={1}
          blue={false}
          icon="bx bxs-user-plus"
          label={"Add friend"}
          show
        />
      )}
      {userRelationship?.status === 2 && (
        <>
          <ButtonRelationshipUser
            onClick={(status) => process(status)}
            status={3}
            blue
            icon="bx bx-user-check"
            label={"Accept"}
            show={false}
          />
          <ButtonRelationshipUser
            onClick={(status) => process(status)}
            status={-1}
            blue={false}
            icon="bx bx-user-delete"
            label={"Remove"}
            show={false}
          />
        </>
      )}
      {(userRelationship?.status === 1 || userRelationship?.status === 3) &&
        user.id !== userProfile.id && (
          <ButtonRelationshipUser
            onClick={(status) => process(status)}
            status={-1}
            show
            icon={
              userRelationship.status === 3
                ? "bx bx-user-check"
                : "bx bxs-user-x"
            }
            label={userRelationship.status === 3 ? "Friend" : "Cancel request"}
          />
        )}
      {user.id === userProfile.id && (
        <>
          <Button
            onClick={() => navigation(PAGE_CREATE_STORY)}
            className="mr-2 font-semibold text-sm"
          >
            <div className="w-5 h-5 mr-1.5 rounded-full bg-white flex justify-center items-center">
              <i className="bx bx-plus text-black" />
            </div>
            Add story
          </Button>
          <Button variant="secondary">
            <i className="bx bxs-pencil text-xl mr-2" /> Edit profile
          </Button>
        </>
      )}
    </div>
  );
}

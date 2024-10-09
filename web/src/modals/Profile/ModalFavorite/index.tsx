import React, { useContext, useState, useRef } from "react";
import favorites from "@/config/favorites";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import Input from "@/components/Input";
import { User } from "@/interfaces/User";
import { updateUser } from "@/apis/userAPIs";
import { Button } from "@/components/ui/button";
import ItemFavorite from "./ItemFavorite";
import ModalWrapper from "@/modals/ModalWrapper";

type ModalFavoriteProps = {
  updateUserProfile: (user: User) => void;
  userProfile: User;
};

const ModalFavorite = ({
  updateUserProfile,
  userProfile,
}: ModalFavoriteProps) => {
  //
  const [content, setContent] = useState({
    choose: JSON.parse(userProfile?.favorites || "[]"),
    list: favorites,
    search: "",
  });
  const ref = useRef();
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <ModalWrapper title="Favorites">
      <div className="w-full h-[510px] py-2">
        <div className="my-2 w-full">
          <Input
            type="text"
            search
            ref={ref}
            placeholder="What do you do for fun?"
            handleChange={(data) => {
              const get = favorites.filter(
                (dt) => dt.name.toLowerCase().indexOf(data.toLowerCase()) !== -1
              );
              setContent({ ...content, list: get, search: data });
            }}
          />
        </div>
        <hr />
        {content.choose.length > 0 && (
          <>
            <p className="text-gray-500 dark:text-gray-300 py-2 font-semibold">
              SELECTED FAVORITES
            </p>
            <div
              className="p-2.5 h-24 max-h-24 overflow-y-auto w-full border-2 border-solid 
              border-gray-200 rounded-lg"
            >
              <div className="w-full flex flex-wrap gap-1.5">
                {content.choose.map((item) => (
                  <ItemFavorite
                    content={content}
                    setContent={setContent}
                    key={item.id}
                    item={item}
                    choose
                    ref={ref}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        <div className="w-full h-[300px]">
          {content.list.length > 0 && (
            <>
              <p className="text-gray-500 dark:text-gray-300 pl-2.5 my-1 font-bold">
                RESULTS FOR {`"${content.search}"`}
              </p>
              <div
                className="p-2.5 overflow-y-auto w-full border-2 border-solid border-gray-200 rounded-lg 
              h-[267px] max-h-[267px]"
              >
                <div className="w-full gap-1.5 flex flex-wrap">
                  {[...favorites]
                    .filter((dt) => {
                      let index = [...content.choose].findIndex(
                        (data) => data.id === dt.id
                      );
                      return index === -1;
                    })
                    .map((item) => (
                      <ItemFavorite
                        content={content}
                        setContent={setContent}
                        key={item.id}
                        item={item}
                        choose={false}
                        ref={ref}
                      />
                    ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="text-right flex-row flex gap-2 justify-end mt-2">
        <Button
          onClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          variant="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));
            const newUser = {
              ...userProfile,
              favorites: JSON.stringify(content.choose),
            };
            await updateUser(newUser);
            updateUserProfile(newUser);
            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
        >
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalFavorite;

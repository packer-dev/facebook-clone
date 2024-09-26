import React, { useContext, useState, useRef } from "react";
import favorites from "@/config/favorites";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import InputComponent from "@/components/InputComponent";
import { User } from "@/interfaces/User";
import { updateUser } from "@/apis/userAPIs";
import { Button } from "@/components/ui/button";
import ItemFavorite from "./ItemFavorite";
import ModalWrapper from "@/modals/ModalWrapper";

const ModalFavorite = ({
  updateUserProfile,
  userProfile,
}: {
  updateUserProfile: (user: User) => void;
  userProfile: User;
}) => {
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
    <ModalWrapper
      title="Favorites"
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
        shadow-lv1 dark:border-dark-third dark:bg-dark-third px-3"
    >
      <div className="w-full h-[510px] p-2">
        <div className="my-2 w-full">
          <InputComponent
            type="text"
            search
            className="p-2 w-full border-2 border-solid border-gray-200 rounded-full"
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
      <div className="text-right flex-row flex gap-2 justify-end p-2 mt-2">
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

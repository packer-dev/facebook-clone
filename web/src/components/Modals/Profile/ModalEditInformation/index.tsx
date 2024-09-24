import React, { useState, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ModalWrapper from "../../ModalWrapper";
import ItemEditInformation from "./ItemEditInformation";
import ButtonComponent from "@/components/ButtonComponent";
import { User } from "@/interfaces/User";
import { updateUser } from "@/apis/userAPIs";

const ModalEditInformation = ({
  updateUserProfile,
  userProfile,
}: {
  updateUserProfile: (user: User) => void;
  userProfile: User;
}) => {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [description, setDescription] = useState(
    JSON.parse(userProfile.description || "{}")
  );
  //
  return (
    <ModalWrapper
      title={"Edit details"}
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
        shadow-lv1 dark:border-dark-third dark:bg-dark-third px-3"
    >
      <hr />
      <p className="mt-1 font-semibold">Edit introduction</p>
      <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 mb-4">
        The details you choose will be displayed publicly.
      </p>
      <ItemEditInformation
        title="Work"
        name="work"
        placeholder={`Enter your work`}
        description={description}
        setDescription={setDescription}
        value={description?.work || ""}
      />
      <ItemEditInformation
        title="Education"
        name="study"
        placeholder={`Enter your education`}
        description={description}
        setDescription={setDescription}
        value={description?.study || ""}
      />
      <ItemEditInformation
        title="Living at"
        name="live"
        placeholder={`Enter your place of residence`}
        description={description}
        setDescription={setDescription}
        value={description?.live || ""}
      />
      <ItemEditInformation
        title="From"
        name="from"
        placeholder={`Enter your hometown`}
        description={description}
        setDescription={setDescription}
        value={description?.from || ""}
      />
      <ItemEditInformation
        title="Status"
        name="status"
        placeholder={`Enter your status`}
        description={description}
        setDescription={setDescription}
        value={description?.status || ""}
      />
      <hr />
      <div className="text-right pt-3">
        <ButtonComponent
          handleClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer border-none font-semibold text-white rounded-lg p-2 mx-2 bg-gray-500"
        >
          Cancel
        </ButtonComponent>
        <ButtonComponent
          handleClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));
            const newUser = {
              ...userProfile,
              description: JSON.stringify(description),
            };
            await updateUser(newUser);
            updateUserProfile(newUser);
            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className={`cursor-pointer w-1/4 border-none font-semibold bg-main text-white rounded-lg p-2 mx-2 `}
        >
          Save
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
};

export default ModalEditInformation;

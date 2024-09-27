import React, { useState, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { User } from "@/interfaces/User";
import { updateUser } from "@/apis/userAPIs";
import { Button } from "@/components/ui/button";
import ItemEditInformation from "./ItemEditInformation";
import ModalWrapper from "@/modals/ModalWrapper";

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
    <ModalWrapper title="Edit details">
      <div className="py-2">
        <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 mb-4">
          The details you choose will be displayed publicly.
        </p>
        <ItemEditInformation
          title="Work"
          name="work"
          placeholder="Enter your work"
          description={description}
          setDescription={setDescription}
          value={description?.work || ""}
        />
        <ItemEditInformation
          title="Education"
          name="study"
          placeholder="Enter your education"
          description={description}
          setDescription={setDescription}
          value={description?.study || ""}
        />
        <ItemEditInformation
          title="Living at"
          name="live"
          placeholder="Enter your place of residence"
          description={description}
          setDescription={setDescription}
          value={description?.live || ""}
        />
        <ItemEditInformation
          title="From"
          name="from"
          placeholder="Enter your hometown"
          description={description}
          setDescription={setDescription}
          value={description?.from || ""}
        />
        <ItemEditInformation
          title="Status"
          name="status"
          placeholder="Enter your status"
          description={description}
          setDescription={setDescription}
          value={description?.status || ""}
        />
      </div>
      <hr />
      <div className="text-right p-2">
        <Button
          onClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer border-none font-semibold text-white rounded-lg p-2 mx-2 bg-gray-500"
        >
          Cancel
        </Button>
        <Button
          onClick={async () => {
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
          className="cursor-pointer w-1/4 border-none font-semibold bg-main text-white rounded-lg p-2 mx-2"
        >
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalEditInformation;

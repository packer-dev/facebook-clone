import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ButtonComponent from "../../../ButtonComponent";
import ModalWrapper from "../../ModalWrapper";
import ItemColor from "./ItemColor";
import { RootState } from "@/reducers";

export default function ModalChangeColor(props) {
  //
  const { headers } = useSelector<RootState, RootState>((state) => state);
  const { groupMessage, setGroupMessage } = props;
  const [color, setColor] = useState();
  const colors = [
    "#006AD4",
    "#02B28D",
    "#4C9CF2",
    "#5B5B5B",
    "#68D400",
    "#692CF2",
    "#77A2F2",
    "#AB41D4",
    "#B51299",
    "#B76618",
    "#EDA600",
    "#EE046B",
    "#FF311E",
  ];
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <ModalWrapper
      title="Màu"
      className="shadow-sm border border-solid border-gray-500 py-3 bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
            sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full py-4 flex justify-center">
        <ul className="pl-2 flex flex-wrap">
          {colors.map((item, index) => (
            <ItemColor
              item={item}
              key={index}
              color={color}
              setColor={setColor}
            />
          ))}
        </ul>
      </div>
      <div className="text-right pt-3">
        <ButtonComponent
          handleClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none font-semibold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </ButtonComponent>
        <ButtonComponent
          handleClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));
            const result = { data: null };
            setGroupMessage(result.data);
            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className={`cursor-pointer w-1/4 border-none font-semibold 
                     text-white rounded-lg p-2 mx-2 ${
                       !color ? "bg-gray-500" : " bg-main"
                     }`}
          disabled={color}
        >
          Lưu
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
}

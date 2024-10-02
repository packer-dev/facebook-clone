import React from "react";
import ModalWrapper from "../ModalWrapper";
import { Button } from "@/components/ui/button";

const ModalExpiredToken = () => {
  return (
    <ModalWrapper>
      <p>Token expired.</p>
      <div className="flex justify-center py-5">
        <Button>Reload</Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalExpiredToken;

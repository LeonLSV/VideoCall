import React from "react";
import { GlobalUserLeft, Foto, TextUserLeft } from "./styles";
import foto from "../../../images/perfil.jpg";

export const UserLeft = () => {
  return (
    <>
      <GlobalUserLeft>
        <Foto src={foto} alt="" />
        <div>
          <TextUserLeft fontsize="15px" weight="bold">
            Publisher
          </TextUserLeft>
          <TextUserLeft fontsize="20px" weight="normal">
            Kate Smith
          </TextUserLeft>
        </div>
      </GlobalUserLeft>
    </>
  );
};

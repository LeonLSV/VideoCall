import React from "react";
import videoFoto from "../../images/user.jpg";
import { GlobalContainer, ImageVideo } from "./styles";

export const Video = () => {
  return (
    <>
      <GlobalContainer>
        <ImageVideo src={videoFoto} alt="Foto" />
        {/* <UserLeft /> */}
      </GlobalContainer>
    </>
  );
};

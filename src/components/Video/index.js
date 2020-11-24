import React from "react";
import videoFoto from "../../images/user.jpg";
import { GlobalContainer, ImageVideo } from "./styles";
import { UserLeft } from "../VideoComponent/UserLeft";
import { RecordMid } from "../VideoComponent/RecordMid";
import { ImageRight } from "../VideoComponent/ImageRight";
import { ToolBar } from "../VideoComponent/ToolBar";
import { Volumen } from "../VideoComponent/Volumen";

export const Video = () => {
  return (
    <>
      <GlobalContainer>
        <ImageVideo src={videoFoto} alt="Foto" />
        <UserLeft />
        <RecordMid />
        <ImageRight />
        <ToolBar />
        <Volumen />
      </GlobalContainer>
    </>
  );
};

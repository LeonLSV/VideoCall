import React from "react";
import perfil from "../../../images/perfil.jpg";
import mate from "../../../images/mate.jpg";
import iguana from "../../../images/iguana.jpg";
import col from "../../../images/col.jpg";
import { ContainerImageRight, ImgRight } from "./styles";

export const ImageRight = () => {
  return (
    <>
      <ContainerImageRight>
        <ImgRight src={iguana} alt="foto" />
        <ImgRight src={col} alt="foto" />
        <ImgRight src={mate} alt="foto" />
        <ImgRight src={perfil} alt="foto" />
      </ContainerImageRight>
    </>
  );
};

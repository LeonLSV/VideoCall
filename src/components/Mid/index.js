import React from "react";
import { GlobalMid } from "./styles";
import { Overview } from "../Overview";
import { HeaderTwo } from "../HeaderTwo";
import { Video } from "../Video";
import { Footer } from "../Footer";

export const Mid = () => {
  return (
    <GlobalMid>
      <Overview />
      <HeaderTwo />
      <Video />
      <Footer />
    </GlobalMid>
  );
};

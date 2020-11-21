import React from "react";
import { NavLeft } from "../components/NavBarLeft";
import { Mid } from "../components/Mid";
import { GlobalHome } from "./styles";
import { Chat } from "../components/Chat";

export const Home = () => {
  return (
    <>
      <GlobalHome>
        <NavLeft />
        <Mid />
        <Chat />
      </GlobalHome>
    </>
  );
};

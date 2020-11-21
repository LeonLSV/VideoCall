import React from "react";
import { GlobalHeader,TitleChat,ButtonChat } from "./styles";

export const ChatHeader = () => {
  return (
    <GlobalHeader>
      <TitleChat>Group Chat</TitleChat>
      <ButtonChat background='#b1f3e9' color="#00a389">Messages</ButtonChat>
      <ButtonChat background='transparent' color="#777d8e">Participants</ButtonChat>
    </GlobalHeader>
  );
};

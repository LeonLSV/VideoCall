import React from "react";
import {
  GlobalChatMid,
  ContainerMessage,
  NameChat,
  ImageChatMid,
  MessageChat,
} from "./styles";

export const ChatMid = ({ image, name, message }) => {
  return (
    <>
      <GlobalChatMid>
        <ImageChatMid src={image} alt="" />
        <ContainerMessage>
          <NameChat>{name}</NameChat>
          <MessageChat>{message}</MessageChat>
        </ContainerMessage>
      </GlobalChatMid>
    </>
  );
};

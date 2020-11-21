import React from "react";
import { ChatHeader } from "../ChatHeader";
import { ChatMid } from "../ChatMid";
import { ChatSend } from "../ChatSend";
import { GlobalChat, ContainerMessage } from "./styles";
import user1 from "../../images/mate.jpg";
import user2 from "../../images/col.jpg";
import user3 from "../../images/iguana.jpg";

export const Chat = () => {
  return (
    <>
      <GlobalChat>
        <ChatHeader />
        <ContainerMessage>
          <ChatMid
            image={user1}
            name="Ramiro Contreras"
            message="Hola, qué tal todo???"
          />
          <ChatMid
            image={user2}
            name="Catalina Ospina"
            message="Hello, I am Catalina"
          />
          <ChatMid image={user3} name="Rafael Lagunas" message="Berraco ome" />
          <ChatMid image={user3} name="Rafael Lagunas" message="Berraco ome" />
          <ChatMid image={user3} name="Rafael Lagunas" message="Berraco ome" />
          <ChatMid image={user3} name="Rafael Lagunas" message="Berraco ome" />
          <ChatMid image={user3} name="Rafael Lagunas" message="Berraco ome" />
          <ChatMid image={user3} name="Rafael Lagunas" message="Berraco ome" />
        </ContainerMessage>
        <ChatSend />
      </GlobalChat>
    </>
  );
};

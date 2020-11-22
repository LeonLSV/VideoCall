import React from "react";
import { GlobalSend, InputSend, TextSend, ButtonSend } from "./styles";
import { SendOutlined } from "@ant-design/icons";

export const ChatSend = () => {
  return (
    <GlobalSend>
      <TextSend>
        <InputSend type="text" placeholder="Write your message"></InputSend>
      </TextSend>
      <ButtonSend>
        <SendOutlined rotate="-45" />
      </ButtonSend>
    </GlobalSend>
  );
};

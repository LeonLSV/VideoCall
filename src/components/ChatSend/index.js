import React from "react";
import { GlobalSend,TextSend,ButtonSend } from "./styles";
import {SendOutlined} from '@ant-design/icons';

export const ChatSend = () => {
  return (
    <GlobalSend>
      <TextSend>Write your message</TextSend>
      <ButtonSend><SendOutlined rotate="-45"/></ButtonSend>
    </GlobalSend>
  );
};

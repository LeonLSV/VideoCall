import React from "react";
import { NotificationOutlined } from "@ant-design/icons";
import { GlobalVolumen } from "./styles";

export const Volumen = () => {
  return (
    <>
      <GlobalVolumen>
        <NotificationOutlined
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "gray",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            margin: "0 10px",
          }}
        />
      </GlobalVolumen>
    </>
  );
};

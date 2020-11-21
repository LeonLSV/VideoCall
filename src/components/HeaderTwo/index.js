import React from "react";
import { TeamOutlined, BookOutlined, PlusOutlined } from "@ant-design/icons";
import { GlobalHeader, TextHeader, ButtonHeader, DivRight } from "./styles";

export const HeaderTwo = () => {
  return (
    <>
      <GlobalHeader>
        <TeamOutlined
          style={{ fontSize: "20px", color: "gray", margin: "0 5px 0 24px" }}
        />
        <TextHeader>Invited to the call:</TextHeader>
        <ButtonHeader background="#b1f3e9" color="#00a389">
          6
        </ButtonHeader>
        <BookOutlined
          style={{ fontSize: "20px", color: "gray", margin: "0 5px 0 24px" }}
        />
        <TextHeader>Absent people:</TextHeader>
        <ButtonHeader background="#fbbebe" color="#fc5d5b">
          2
        </ButtonHeader>
        <DivRight>
          <PlusOutlined
            style={{
              fontSize: "20px",
              background: "#00a389",
              color: "#fff",
              borderRadius: "10px",
              padding: "9px",
              fontWeight: "bold",
              marginRight: "10px",
              cursor: "pointer",
            }}
          />
          <TextHeader>Add user to the call</TextHeader>
        </DivRight>
      </GlobalHeader>
    </>
  );
};

import React from "react";
import { LeftSquareOutlined, TeamOutlined } from "@ant-design/icons";
import { GlobalOverview, ButtonOverview, Team, TitleOverview } from "./styles";

export const Overview = () => {
  return (
    <>
      <GlobalOverview>
        <LeftSquareOutlined
          style={{
            fontSize: "20px",
            color: "#435091",
            margin: "0px 20px",
            cursor: "pointer",
          }}
        />
        <TitleOverview>Overview of new real estate proposals</TitleOverview>
        <ButtonOverview>
          <TeamOutlined style={{ color: "#435091" }} />
          <Team>Team</Team>
        </ButtonOverview>
      </GlobalOverview>
    </>
  );
};

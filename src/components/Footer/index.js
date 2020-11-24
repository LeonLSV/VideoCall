import React from "react";
import { BoxPlotFilled } from "@ant-design/icons";
import { GlobalFooter, TextFooter } from "./styles";

export const Footer = () => {
  return (
    <>
      <GlobalFooter>
        <BoxPlotFilled
          style={{
            color: "#00a389",
            fontSize: "50px",
            padding: "20px 40px",
          }}
        />
        <div>
          <TextFooter fontsize={"12px"} weight={"normal"} padding={"5px 0"}>
            Now
          </TextFooter>
          <TextFooter fontsize={"15px"} weight={"bold"} padding={"2px 0"}>
            Thanks for sending all those completed transcripts throug - we've
            been really happy...
          </TextFooter>
        </div>
      </GlobalFooter>
    </>
  );
};

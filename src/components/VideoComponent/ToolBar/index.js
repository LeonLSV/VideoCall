import React from "react";
import {
  PhoneOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  FullscreenOutlined,
  AudioMutedOutlined,
} from "@ant-design/icons";
import { GlobalToolBar } from "./styles";

export const ToolBar = () => {
  return (
    <>
      <GlobalToolBar>
        <FullscreenOutlined
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
        <AudioMutedOutlined
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
        <PhoneOutlined
          style={{
            color: "white",
            background: "#fc5d5b",
            padding: "25px",
            borderRadius: "20px",
            margin: "0 10px",
          }}
        />
        <VideoCameraOutlined
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
        <SettingOutlined
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
      </GlobalToolBar>
    </>
  );
};

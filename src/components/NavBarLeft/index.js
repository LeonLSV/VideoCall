import React from "react";
import {
  ClockCircleOutlined,
  GitlabFilled,
  CheckSquareOutlined,
  EyeOutlined,
  UsergroupAddOutlined,
  LineChartOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavGlobal, Nav, Item, Image } from "./styles";
import perfil from "../../images/perfil.jpg";

export const NavLeft = () => {
  return (
    <>
      <NavGlobal>
        <GitlabFilled style={{ fontSize: "40px" }} spin={true} />
        <Nav>
          <Item>
            <ClockCircleOutlined style={{ fontSize: "20px", color: "gray" }} />
          </Item>
          <Item>
            <CheckSquareOutlined style={{ fontSize: "20px", color: "gray" }} />
          </Item>
          <Item>
            <EyeOutlined style={{ fontSize: "20px", color: "gray" }} />
          </Item>
          <Item>
            <UsergroupAddOutlined style={{ fontSize: "20px", color: "gray" }} />
          </Item>
          <Item>
            <LineChartOutlined style={{ fontSize: "20px", color: "gray" }} />
          </Item>
          <Item>
            <VideoCameraOutlined style={{ fontSize: "20px", color: "gray" }} />
          </Item>

          <Image src={perfil} />
        </Nav>
      </NavGlobal>
    </>
  );
};

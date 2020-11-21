import styled from "styled-components";

export const GlobalOverview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid gray;
  height: 60px;
  position: relative;
`;
export const TitleOverview = styled.h1`
  font-family: "Montserrat";
  font-weight: normal;
  font-size: 25px;
`;

export const ButtonOverview = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  background: #d0d3e3;
  border-radius: 20px;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Team = styled.h2`
  margin: 0;
  font-size: 17px;
  padding-left: 5px;
  font-family: "Montserrat";
  font-weight: medium;
  color: #435091;
`;

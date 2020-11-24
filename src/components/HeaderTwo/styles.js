import styled from "styled-components";

export const GlobalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin: 10px 0;
  width: 100%;
  position: relative;
`;

export const TextHeader = styled.p`
  font-family: "Montserrat";
  font-size: 13px;
`;
export const ButtonHeader = styled.button`
  background: ${(props) => props.background};
  border: none;
  font-family: "Montserrat";
  font-weight: bold;
  border-radius: 10px;
  padding: 7px 10px;
  color: ${(props) => props.color};
  margin: 0 10px;
  cursor: pointer;
`;
export const DivRight = styled.div`
  display: flex;
  align-items: center;
  color: #00a389;
`;

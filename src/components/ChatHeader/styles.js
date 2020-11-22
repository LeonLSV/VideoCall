import styled from "styled-components";

export const GlobalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleChat = styled.h2`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 15px;
  margin-left: 20px;
`;

export const ButtonChat = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 10px 20px;
  font-family: "Montserrat";
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

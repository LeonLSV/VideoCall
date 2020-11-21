import styled from "styled-components";

export const GlobalSend = styled.div`
  background: #ff4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-radius: 20px;
  background: white;
`;

export const TextSend = styled.p`
  color: #777d8e;
  font-family: "Montserrat";
  font-size: 15px;
  margin-left: 20px;
`;

export const ButtonSend = styled.button`
  background: #00a389;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

import styled from "styled-components";

export const GlobalSend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-radius: 20px;
  background: white;
  height: 80%;
  margin: 0 15px;
`;

export const TextSend = styled.p`
  color: #777d8e;
  font-family: "Montserrat";
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
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
export const InputSend = styled.input`
  border: none;
  font-family: "Montserrat";
  width: 100%;
  &:focus {
    outline: none;
  }
`;

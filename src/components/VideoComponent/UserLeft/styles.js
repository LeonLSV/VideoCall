import styled from "styled-components";

export const GlobalUserLeft = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
`;

export const Foto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const TextUserLeft = styled.p`
  color: white;
  font-size: ${(props) => props.fontsize};
  margin: 0;
  font-family: "Montserrat";
  font-weight: ${(props) => props.weight};
`;

import styled from "styled-components";

export const GlobalFooter = styled.footer`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  margin: 10px 0;
`;

export const TextFooter = styled.p`
  font-family: "Montserrat";
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.weight};
  margin: 0;
  padding: ${(props) => props.padding};
`;

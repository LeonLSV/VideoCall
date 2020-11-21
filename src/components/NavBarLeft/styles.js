import styled from "styled-components";

export const NavGlobal = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;

export const Item = styled.button`
  margin-top: 50px;
  cursor: pointer;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Image = styled.img`
  width: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-top: 70px;
`;

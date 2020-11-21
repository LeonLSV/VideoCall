import styled from "styled-components";

export const GlobalChat = styled.div`
  display: grid;
  grid-template-rows: 7% 100px 200px;
  background: #edf0f5;
  border-radius: 20px;
  margin-left: 20px;
`;

export const ContainerMessage = styled.div`
  margin: 0;
  height: 80vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #777d8e;
  }
`;

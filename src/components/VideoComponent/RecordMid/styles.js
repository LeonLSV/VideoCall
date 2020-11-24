import styled from "styled-components";

export const GlobalRecord = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  align-items: center;
`;
export const ContainerRecord = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  padding: 2px 30px;
  border-radius: 15px;
  opacity: 0.8;
`;
export const Circle = styled.div`
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const CircleRed = styled.div`
  background: red;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const TimeRecord = styled.p`
  font-family: "Montserrat";
  font-size: 15px;
  color: white;
  font-weight: bold;
`;

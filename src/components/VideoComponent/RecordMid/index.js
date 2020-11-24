import React from "react";
import {
  GlobalRecord,
  ContainerRecord,
  Circle,
  CircleRed,
  TimeRecord,
} from "./styles";

export const RecordMid = () => {
  return (
    <>
      <GlobalRecord>
        <ContainerRecord>
          <Circle>
            <CircleRed />
          </Circle>
          <TimeRecord>03:15</TimeRecord>
        </ContainerRecord>
      </GlobalRecord>
    </>
  );
};

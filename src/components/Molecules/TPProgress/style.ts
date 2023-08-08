import styled from "styled-components/native";

export const StepWrapper = styled.View`
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    top: 2px;
    left: 5px;
    z-index: 100;
  }
`;

export const StepIconWrapper = styled.View`
  border-radius: 50%;
`;

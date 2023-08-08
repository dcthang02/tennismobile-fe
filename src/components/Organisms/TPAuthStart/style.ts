import styled from "styled-components/native";
import { COLORS } from "@/constant/colors";

export const AuthWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const AuthBackground = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

export const AuthBallImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const AuthBottomWrapper = styled.View`
  padding: 30px 20px 50px 20px;
  gap: 20px;
  background-color: ${COLORS.charcoal.white};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

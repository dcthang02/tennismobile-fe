import React, { ReactNode } from "react";
import {
  AuthWrapper,
  AuthBackground,
  AuthBottomWrapper,
  AuthBallImage,
} from "./style";
import TPText from "@/components/Atom/TPText";

type TPAuthStart = {
  children: ReactNode;
};

export const TPAuthStart = ({ children }: TPAuthStart) => {
  return (
    <AuthWrapper>
      <AuthBackground source={require("assets/tennis-bg.png")} />
      <AuthBottomWrapper>
        <AuthBallImage source={require("assets/tennis-ball.png")} />
        <TPText variant="heading4">
          Chào mừng đến với ứng dụng Tennis App
        </TPText>
        {children}
      </AuthBottomWrapper>
    </AuthWrapper>
  );
};

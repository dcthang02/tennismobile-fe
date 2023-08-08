import React, { useCallback, useEffect, useRef, useState } from "react";

import { View } from "react-native";
import TPText from "@/components/Atom/TPText";

export const TPOtpCountdown = () => {
  const [count, setCount] = useState(60);

  let timerInterval: any = useRef();

  useEffect(() => {
    if (count <= 0) {
      return () => clearInterval(timerInterval.current);
    }
    timerInterval.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(timerInterval.current);
  }, [count]);

  const _renderTimer = useCallback(() => {
    return <TPText variant="body16-semibold">{count} giây</TPText>;
  }, [count]);

  return (
    <View style={{ alignItems: "center" }}>
      <TPText variant="body16">Mã OTP sẽ hết hạn trong</TPText>
      {_renderTimer()}
    </View>
  );
};

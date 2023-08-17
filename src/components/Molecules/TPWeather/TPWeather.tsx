import React from "react";

import TPRow from "@/components/Atom/TPRow";
import TPIcon from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";

export const TPWeather = () => {
  return (
    <TPRow style={{ alignItems: "center", gap: 10 }}>
      <TPIcon name="cloud-sun" />
      <TPText variant="body16-semibold">24°c</TPText>
    </TPRow>
  );
};

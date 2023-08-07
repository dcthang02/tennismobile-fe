import React, { useCallback, useState } from "react";
import { TextInput, View, Text } from "react-native";
import TPText from "@/components/Atom/TPText";

import { COLORS } from "@/constant/colors";

type TPTextInputProps = {
  label: string;
};

export const TPTextInput = ({ label }: TPTextInputProps) => {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = useCallback((focus: boolean) => {
    setFocus(true);
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 56,
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 12,
          borderColor: COLORS.green[600],
          borderWidth: 1,
          justifyContent: "center",
        }}
      >
        {focus && (
          <TPText variant="tiny" color={COLORS.green[600]}>
            {label}
          </TPText>
        )}
        <TextInput
          style={{ fontSize: 16 }}
          placeholder={label}
          onFocus={() => {
            setFocus(true);
          }}
        />
      </View>
    </View>
  );
};

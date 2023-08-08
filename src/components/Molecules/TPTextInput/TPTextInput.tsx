import React, { useCallback, useMemo, useState } from "react";
import { TextInput, View, Text } from "react-native";
import TPText from "@/components/Atom/TPText";

import { COLORS } from "@/constant/colors";

type TPTextInputProps = {
  label: string;
  inputType: "text" | "numeric";
};

export const TPTextInput = ({ label, inputType }: TPTextInputProps) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [isDefault, setIsDefault] = useState(true);
  const [error, setError] = useState("");

  const handleFocus = useCallback((focus: boolean) => {
    if (isDefault) setIsDefault(false);
    setFocus(focus);
  }, []);

  const color = useMemo(() => {
    if (error) return COLORS.error[600];
    if (focus) return COLORS.green[600];
    return COLORS.charcoal[900];
  }, [focus, error]);

  return (
    <View style={{ position: "relative" }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 56,
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 12,
          borderColor: color,
          borderWidth: focus ? 1 : 0,
          justifyContent: "center",
        }}
      >
        {(isDefault === false || value !== "") && (
          <TPText variant="tiny" color={color}>
            {label}
          </TPText>
        )}
        <TextInput
          inputMode={inputType}
          style={{ fontSize: 16 }}
          placeholder={label}
          value={value}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          onChangeText={setValue}
        />
      </View>

      {error && (
        <View style={{ paddingLeft: 12 }}>
          <TPText variant="body16-semibold" color={COLORS.error[600]}>
            {error}
          </TPText>
        </View>
      )}
    </View>
  );
};

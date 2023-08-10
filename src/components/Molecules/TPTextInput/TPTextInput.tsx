import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TextInput, View } from "react-native";
import TPText from "@/components/Atom/TPText";

import { COLORS } from "@/constant/colors";
import { checkInput } from "./checkError";

export type TPTextInputRule = "phone" | "abc";

type TPTextInputProps = {
  label: string;
  inputType: "text" | "numeric";
  disable?: boolean;
  maxLength?: number;
  rules?: TPTextInputRule[];
};

export const TPTextInput = React.forwardRef(
  (
    {
      label,
      inputType,
      disable = false,
      maxLength = 1000,
      rules = [],
    }: TPTextInputProps,
    ref: any
  ) => {
    const [value, setValue] = useState("");
    const [focus, setFocus] = useState(false);
    const [isDefault, setIsDefault] = useState(true);
    const [errorMes, setErrorMes] = useState("");

    const color = useMemo(() => {
      if (errorMes) return COLORS.error[600];
      if (focus) return COLORS.green[600];
      return COLORS.charcoal[900];
    }, [focus, errorMes]);

    const handleCheckError = useCallback(
      (text: string) => {
        if (rules.length > 0) {
          rules.forEach((rule) => {
            setErrorMes(checkInput(text, rule) || "");
          });
        }
      },
      [rules]
    );

    useEffect(() => {
      if (errorMes) ref.current.isError = true;
      else ref.current.isError = false;
    }, [errorMes]);

    const handleFocus = useCallback((focus: boolean) => {
      if (isDefault) setIsDefault(false);
      setFocus(focus);
    }, []);

    const handleChangeText = useCallback(
      (text: string) => {
        ref.current.value = text;
        handleCheckError(text);
        setValue(text);
      },
      [handleCheckError]
    );

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
            onChangeText={handleChangeText}
            value={value}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
            editable={!disable}
            maxLength={maxLength}
            ref={ref}
          />
        </View>

        {errorMes && (
          <View style={{ paddingLeft: 12 }}>
            <TPText variant="small" color={COLORS.error[600]}>
              {errorMes}
            </TPText>
          </View>
        )}
      </View>
    );
  }
);

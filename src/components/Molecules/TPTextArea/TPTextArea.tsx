import { COLORS } from "@/constant/colors";
import React, { useRef } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type TPTextAreaProps = {
  placeholder: string;
  focus?: () => void;
  borderColor?: string;
  greenOnfocus?: boolean;
};

export const TPTextArea = React.forwardRef<TextInput, TPTextAreaProps>(
  (
    {
      placeholder,
      focus,
      borderColor = COLORS.charcoal.white,
      greenOnfocus = false,
    }: TPTextAreaProps,
    ref
  ) => {
    return (
      <Pressable style={{ ...styles.inputBox, borderColor }} onPress={focus}>
        <TextInput ref={ref} placeholder={placeholder} multiline />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  inputBox: {
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.charcoal.white,
    borderRadius: 16,
    minHeight: 132,
    borderWidth: 1,
  },
});

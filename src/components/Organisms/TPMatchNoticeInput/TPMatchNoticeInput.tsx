import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPTextArea from "@/components/Molecules/TPTextArea";
import React, { createRef } from "react";
import { TextInput } from "react-native";

export const TPMatchNoticeInput = () => {
  const noticeRef = createRef<TextInput>();
  return (
    <TPWrapper gap={4}>
      <TPText variant="heading6">Ghi chú</TPText>
      <TPTextArea
        placeholder="Nhập lời ghi chú..."
        ref={noticeRef}
        focus={() => noticeRef.current?.focus()}
      />
    </TPWrapper>
  );
};

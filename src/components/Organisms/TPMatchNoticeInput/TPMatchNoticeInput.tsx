import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPTextArea from "@/components/Molecules/TPTextArea";
import React, { Ref, RefObject, createRef, useRef } from "react";
import { TextInput, TextInputComponent } from "react-native";

type TPMatchNoticeInput = {
  value: string;
  onChange: (x: string) => void;
};

export const TPMatchNoticeInput = ({ value, onChange }: TPMatchNoticeInput) => {
  const noticeRef = useRef<TextInput>(null);

  return (
    <TPWrapper gap={4}>
      <TPText variant="heading6">Ghi chú</TPText>
      <TPTextArea
        value={value}
        onChange={onChange}
        placeholder="Nhập lời ghi chú..."
        ref={noticeRef}
        focus={() => noticeRef.current?.focus()}
      />
    </TPWrapper>
  );
};

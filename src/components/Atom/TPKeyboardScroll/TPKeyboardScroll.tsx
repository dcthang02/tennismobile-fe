import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ViewStyle,
  FlatList,
} from "react-native";

type TPKeyboardScrollProps = {
  children?: ReactNode;
  containerStyle?: ViewStyle;
  scrollStyle?: ViewStyle;
};

export const TPKeyboardScroll = ({
  children,
  containerStyle,
  scrollStyle,
}: TPKeyboardScrollProps) => {
  return (
    <KeyboardAvoidingView
      style={containerStyle || {}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <ScrollView
        contentContainerStyle={scrollStyle || {}}
        keyboardShouldPersistTaps={"always"}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

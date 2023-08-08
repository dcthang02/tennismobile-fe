import React, { ReactNode } from "react";

import { View, Pressable } from "react-native";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPIcon from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";

import { useNavigation } from "@react-navigation/native";

type TPHeaderProps = {
  headerTitle?: string;
  right?: ReactNode;
};

export const TPHeader = ({ headerTitle, right }: TPHeaderProps) => {
  const navigation = useNavigation();
  return (
    <TPWrapper paddingHorizontal={16} paddingTop={15}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <TPIcon name="left-arrow" />
        </Pressable>
        <TPText variant="heading5">{headerTitle}</TPText>
        <View>{right}</View>
      </View>
    </TPWrapper>
  );
};

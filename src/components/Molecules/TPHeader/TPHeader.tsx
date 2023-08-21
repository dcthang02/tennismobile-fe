import React, { ReactNode } from "react";

import { View, Pressable, StyleSheet } from "react-native";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPIcon from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";

import { useNavigation } from "@react-navigation/native";
import TPRow from "@/components/Atom/TPRow";

type TPHeaderProps = {
  headerTitle?: string;
  right?: ReactNode;
};

export const TPHeader = ({ headerTitle, right }: TPHeaderProps) => {
  const navigation = useNavigation();
  return (
    <TPWrapper paddingHorizontal={16} paddingTop={15}>
      <TPRow style={styles.header}>
        <TPRow style={styles.itemStart}>
          <Pressable onPress={() => navigation.goBack()}>
            <TPIcon name="left-arrow" />
          </Pressable>
        </TPRow>
        <TPRow style={styles.itemCenter}>
          <TPText variant="heading6">{headerTitle}</TPText>
        </TPRow>
        <TPRow style={styles.itemRight}>{right}</TPRow>
      </TPRow>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
    alignItems: "center",
  },
  itemStart: {
    flex: 1,
  },
  itemCenter: {
    flex: 2,
    justifyContent: "center",
  },
  itemRight: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

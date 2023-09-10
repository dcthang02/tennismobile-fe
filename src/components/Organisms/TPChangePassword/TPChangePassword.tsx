import TPCard from "@/components/Atom/TPCard";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const TPChangePassword = () => {
  return (
    <TPWrapper marginBottom={30} gap={10}>
      <TPText variant="heading5">Cài đặt</TPText>
      <TPCard>
        <Pressable>
          <TPRow style={styles.row}>
            <TPIcon name="padlock" size="small" />
            <TPText variant="body14-semibold">Đổi mật khẩu</TPText>
            <View style={{ marginLeft: "auto" }}>
              <TPIcon name="right-arrow" size="small" />
            </View>
          </TPRow>
        </Pressable>
      </TPCard>
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    paddingVertical: 8,
    gap: 8,
  },
});

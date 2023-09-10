import React, { ReactNode, useEffect, useState } from "react";

import {
  View,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import TPRow from "@/components/Atom/TPRow";
import TPButton from "../TPButton";
import TPIcon from "@/components/Atom/TPIcon";
import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";

type TPModalProp = {
  headerTitle?: string;
  headerRight?: ReactNode;
  children: ReactNode;
  modalPosition?: "middle" | "bottom";
  overlay?: Boolean;
  isShow?: boolean;
  onCloseModal?: () => void;
  backgroundColor?: string;
};

export const TPModal = ({
  children,
  headerTitle,
  modalPosition = "bottom",
  headerRight,
  overlay = true,
  isShow = false,
  onCloseModal,
  backgroundColor = COLORS.charcoal.white,
}: TPModalProp) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isShow}>
      <View
        style={{
          flex: 1,
          justifyContent: modalPosition === "bottom" ? "flex-end" : "center",
          backgroundColor: overlay ? "#79797990" : "transparent",
        }}
      >
        <View
          style={{
            backgroundColor,
            padding: 10,
            borderRadius: 25,
            borderBottomRightRadius: modalPosition === "bottom" ? 0 : 25,
            borderBottomLeftRadius: modalPosition === "bottom" ? 0 : 25,
          }}
        >
          <TPRow style={style.headerRow}>
            <TPRow style={style.headerItem}>
              <TPButton
                endIcon={<TPIcon name="e-remove" />}
                title=""
                buttonType="text"
                size="small"
                onPress={onCloseModal}
              />
            </TPRow>
            <TPRow
              style={{ ...style.headerTitleItem, justifyContent: "center" }}
            >
              <TPText variant="heading6">{headerTitle || null}</TPText>
            </TPRow>
            <TPRow style={{ ...style.headerItem, justifyContent: "flex-end" }}>
              {headerRight || null}
            </TPRow>
          </TPRow>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  headerRow: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerItem: {
    flex: 1,
  },
  headerTitleItem: {
    flex: 3,
  },
});

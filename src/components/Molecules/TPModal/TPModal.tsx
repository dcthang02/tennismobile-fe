import React, { ReactNode, useEffect, useState } from "react";

import { View, Modal } from "react-native";
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
};

export const TPModal = ({
  children,
  headerTitle,
  modalPosition = "bottom",
  headerRight,
  overlay = true,
  isShow = false,
  onCloseModal,
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
            backgroundColor: COLORS.charcoal.white,
            padding: 10,
            borderRadius: 25,
            borderBottomRightRadius: modalPosition === "bottom" ? 0 : 25,
            borderBottomLeftRadius: modalPosition === "bottom" ? 0 : 25,
          }}
        >
          <TPRow
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <TPButton
              endIcon={<TPIcon name="e-remove" />}
              title=""
              buttonType="text"
              size="small"
              onPress={onCloseModal}
            />
            <TPText variant="heading5">{headerTitle || null}</TPText>
            <View>{headerRight || null}</View>
          </TPRow>
          {children}
        </View>
      </View>
    </Modal>
  );
};

import TPAvatar from "@/components/Atom/TPAvatar";
import TPDivide from "@/components/Atom/TPDivide";
import TPRow from "@/components/Atom/TPRow";
import TPText from "@/components/Atom/TPText";
import TPWrapper from "@/components/Atom/TPWrapper";
import { COLORS } from "@/constant/colors";
import React from "react";
import TPButton from "../TPButton";
import { Pressable } from "react-native";

type ItemProps = {
  player: {
    id: string;
    name: string;
    avatar: string;
  };
  isFirst?: boolean;
  isLast?: boolean;
  onPress?: () => void;
  onPressButton?: () => void;
};

export const TPMemberItem = ({
  player,
  isFirst = false,
  isLast = false,
  onPress,
  onPressButton,
}: ItemProps) => {
  return (
    <Pressable style={{ paddingHorizontal: 16 }} onPress={onPress}>
      <TPRow
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: COLORS.charcoal.white,
          borderTopLeftRadius: isFirst ? 15 : 0,
          borderTopRightRadius: isFirst ? 15 : 0,
          borderBottomLeftRadius: isLast ? 15 : 0,
          borderBottomRightRadius: isLast ? 15 : 0,
        }}
      >
        <TPRow style={{ gap: 10, alignItems: "center" }}>
          <TPAvatar uri={player.avatar} />
          <TPText variant="body16-semibold">{player.name}</TPText>
        </TPRow>
        <TPButton
          title="Thách đấu"
          buttonType="outline"
          size="large"
          color={COLORS.green[400]}
          backgroundColor="transparent"
          onPress={onPressButton}
        />
      </TPRow>
      {!isLast && <TPDivide />}
    </Pressable>
  );
};

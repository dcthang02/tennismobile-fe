import React from "react";
import { View } from "react-native";

import TPText from "@/components/Atom/TPText";
import TPAvatar from "@/components/Atom/TPAvatar";
import TPIcon from "@/components/Atom/TPIcon";
import TPRow from "@/components/Atom/TPRow";
import TPWeather from "@/components/Molecules/TPWeather";
import { COLORS } from "@/constant/colors";

type TPHomeHeaderProps = {
  user: {
    name: string;
    avatar: string;
  };
};

export const TPHomeHeader = ({ user }: TPHomeHeaderProps) => {
  return (
    <TPRow
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <TPRow style={{ gap: 10 }}>
        <View>
          <TPText variant="body16" color={COLORS.charcoal[500]}>
            Chào buổi sáng,
          </TPText>
          <TPText variant="body16-semibold">{user.name}</TPText>
        </View>
        <TPWeather />
      </TPRow>
      <TPRow style={{ gap: 10, alignItems: "center" }}>
        <TPIcon name="alarm" />
        <TPAvatar uri={user.avatar} />
      </TPRow>
    </TPRow>
  );
};

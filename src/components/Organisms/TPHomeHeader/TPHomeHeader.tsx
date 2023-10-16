import React from "react";
import { Pressable, View } from "react-native";

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
  navigateNotice?: () => void;
};

export const TPHomeHeader = ({ user, navigateNotice }: TPHomeHeaderProps) => {
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
        <Pressable onPress={navigateNotice}>
          <TPIcon name="alarm" />
        </Pressable>
        <TPAvatar uri={user.avatar} />
      </TPRow>
    </TPRow>
  );
};

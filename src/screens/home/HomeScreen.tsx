import React from "react";
import { View, Text } from "react-native";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPHomeHeader from "@/components/Organisms/TPHomeHeader";
import TPHomeStatistic from "@/components/Organisms/TPHomeStatistic";
import TPNextMatches from "@/components/Organisms/TPNextMatches";
import TPNearbyPlayers from "@/components/Organisms/TPNearbyPlayers";

import useNavigation from "../../hooks/useNavigation";
import { HomeProps } from "@/utils/createProps";

const user = {
  name: "Khánh",
  avatar:
    "https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png",
};

const HomeScreen = ({ navigation }: HomeProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16} gap={20}>
        <TPHomeHeader user={user} />
        <TPHomeStatistic />
        <TPNextMatches />
        <TPNearbyPlayers />
      </TPWrapper>
    </TPBackground>
  );
};

export default HomeScreen;

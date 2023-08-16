import React from "react";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";

import TPNearbyPlayers from "@/components/Organisms/TPNearbyPlayers";

import useNavigation from "../../hooks/useNavigation";
import { HomeProps } from "@/utils/createProps";

const HomeScreen = ({ navigation }: HomeProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16} gap={20}>
        <TPNearbyPlayers />
      </TPWrapper>
    </TPBackground>
  );
};

export default HomeScreen;

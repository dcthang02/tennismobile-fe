import React from "react";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPHomeHeader from "@/components/Organisms/TPHomeHeader";
import TPHomeStatistic from "@/components/Organisms/TPHomeStatistic";
import TPNextMatches from "@/components/Organisms/TPNextMatches";
import TPNearbyPlayers from "@/components/Organisms/TPNearbyPlayers";
import TPCompetitorNotice from "@/components/Organisms/TPCompetitorNotice";

import useNavigation from "../../hooks/useNavigation";
import { HomeProps } from "@/utils/createProps";
import { getFirstName } from "@/utils/name";
import useMe from "@/hooks/useMe";

const HomeScreen = ({ navigation }: HomeProps) => {
  const { handleNavigate } = useNavigation(navigation);

  const { myData, loadingMyData, called } = useMe();

  if (!myData) return null;

  return (
    <TPBackground
      top={
        <TPWrapper paddingHorizontal={16} gap={20}>
          <TPHomeHeader
            user={{
              name: getFirstName(myData.me.name) as string,
              avatar:
                myData.me.image ||
                "https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png",
            }}
            navigateNotice={() => handleNavigate("Notification")}
          />
        </TPWrapper>
      }
    >
      <TPNearbyPlayers
        headerComponents={
          <>
            <TPCompetitorNotice />
            <TPWrapper paddingHorizontal={16} gap={20}>
              <TPHomeStatistic
                rank={myData.me.rank}
                matches={myData.me.statistic.matches.all}
                score={myData.me.statistic.score.sum}
              />
              <TPNextMatches navigation={navigation} />
            </TPWrapper>
          </>
        }
      />
    </TPBackground>
  );
};

export default HomeScreen;

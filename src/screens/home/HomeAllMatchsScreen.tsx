import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import { HomeAllMatchProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPHeader from "@/components/Molecules/TPHeader";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPMatchItem from "@/components/Organisms/TPMatchItem";
import { fetchAllMatches } from "@/api/matches";
import useGetNextMatches from "@/hooks/useGetNextMatches";
import TPText from "@/components/Atom/TPText";
import useMe from "@/hooks/useMe";

const HomeAllMatchsScreen = ({ navigation }: HomeAllMatchProps) => {
  const { myData } = useMe();
  const { nextMatchesData } = useGetNextMatches();
  const { handleNavigate } = useNavigation(navigation);

  const handleNavigateMatch = useCallback(
    (id: string) => {
      handleNavigate("HomeMatch", {
        matchId: id,
      });
    },
    [handleNavigate]
  );

  const renderMatches = useCallback(() => {
    return (
      <TPWrapper paddingHorizontal={16} paddingTop={20} marginBottom={70}>
        <FlatList
          contentContainerStyle={{ gap: 8 }}
          data={nextMatchesData.nextMatches}
          renderItem={({ item, index }) => (
            <TPMatchItem
              match={item}
              onPress={() => handleNavigateMatch(item.id)}
              status={
                item.players.find((p: any) => p.id === myData.me.id)
                  ? "successful"
                  : "warning"
              }
            />
          )}
          keyExtractor={(item, index) => `matches-${index}-${item.id}`}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <TPText variant="heading6" alignCenter>
              Chưa có trận đấu
            </TPText>
          )}
        />
      </TPWrapper>
    );
  }, [nextMatchesData, myData]);

  return (
    <TPBackground>
      <TPHeader headerTitle="Trận đấu sắp tới" />
      {nextMatchesData && myData ? renderMatches() : null}
    </TPBackground>
  );
};

export default HomeAllMatchsScreen;

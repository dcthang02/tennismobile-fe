import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import { HomeAllMatchProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPHeader from "@/components/Molecules/TPHeader";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPMatchItem from "@/components/Organisms/TPMatchItem";
import { fetchAllMatches } from "@/api/matches";

const HomeAllMatchsScreen = ({ navigation }: HomeAllMatchProps) => {
  const [matches, setMatches] = useState<MatchType[]>([]);
  const { handleNavigate } = useNavigation(navigation);

  useEffect(() => {
    const getAllMatches = async function () {
      const resMatches = await fetchAllMatches();
      setMatches(resMatches);
    };

    getAllMatches();
  }, []);

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
          style={{ gap: 8 }}
          data={matches}
          renderItem={({ item, index }) => (
            <TPMatchItem
              match={item}
              onPress={() => handleNavigateMatch(item.id)}
            />
          )}
          keyExtractor={(item, index) => `matches-${index}-${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </TPWrapper>
    );
  }, [matches]);

  return (
    <TPBackground>
      <TPHeader headerTitle="Trận đấu sắp tới" />
      {matches.length !== 0 && renderMatches()}
    </TPBackground>
  );
};

export default HomeAllMatchsScreen;

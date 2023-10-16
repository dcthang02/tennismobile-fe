import React, { useCallback, useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";
import { MatchProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPTabHeader from "@/components/Molecules/TPTabHeader";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import TPIcon from "@/components/Atom/TPIcon";
import { TPPlayer } from "@/components/Organisms/TPPlayerProfile/TPPlayer";
import TPText from "@/components/Atom/TPText";
import { FlatList } from "react-native";
import TPMatchItem from "@/components/Organisms/TPMatchItem";
import useGetMatches from "@/hooks/useGetMatches";
import useMe from "@/hooks/useMe";
import { getAge } from "@/utils/dateTime";

const player = {
  name: "Tư Mã Ý",
  avatar:
    "https://nhadepso.com/wp-content/uploads/2023/01/199-hinh-anh-pikachu-cute-de-thuong-dang-yeu-nhat-hien-nay_2.jpg",
  rank: 15,
  level: 2,
  age: 28,
};

const MatchScreen = ({ navigation }: MatchProps) => {
  const { handleNavigate } = useNavigation(navigation);

  const { loadingMyData, myData } = useMe();
  const { getMatches, matchesData, loadingMatches } = useGetMatches();

  useEffect(() => {
    const onFocus = navigation.addListener("focus", () => getMatches());

    return onFocus;
  }, [navigation]);

  const handleNavigateMatch = useCallback(
    (id: string) => {
      handleNavigate("HomeMatch", {
        matchId: id,
      });
    },
    [handleNavigate]
  );

  const renderHeader = useCallback(() => {
    if (!myData) return null;
    const { name, image: avatar, rank, birthday, level } = myData && myData.me;
    return (
      <TPWrapper gap={15} marginBottom={10}>
        <TPTabHeader
          title="Đấu trường"
          right={
            <TPButton
              title="Tạo trận"
              buttonType="text"
              color={COLORS.green[600]}
              size="small"
              startIcon={<TPIcon name="add" color={COLORS.green[600]} />}
              onPress={() => handleNavigate("CreateMatch")}
            />
          }
        />
        <TPPlayer
          name={name}
          avatar={avatar}
          rank={rank}
          level={level}
          age={getAge(new Date(birthday))}
          renderType={2}
        />

        <TPText variant="heading5">Danh sách trận đấu</TPText>
      </TPWrapper>
    );
  }, [myData, handleNavigate]);

  const renderMatches = useCallback(() => {
    return (
      <TPWrapper marginBottom={10}>
        <FlatList
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{ gap: 8 }}
          ListEmptyComponent={() =>
            loadingMatches ? null : (
              <TPText variant="heading6" alignCenter>
                Chưa có trận đấu
              </TPText>
            )
          }
          data={matchesData?.matches || []}
          renderItem={({ item, index }) => (
            <TPMatchItem
              status="pending"
              match={item}
              onPress={() => handleNavigateMatch(item.id)}
            />
          )}
          keyExtractor={(item, index) => `matches-${index}-${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </TPWrapper>
    );
  }, [matchesData?.matches, loadingMatches, renderHeader]);
  return (
    <TPBackground scroll>
      <TPWrapper paddingHorizontal={16}>{renderMatches()}</TPWrapper>
    </TPBackground>
  );
};

export default MatchScreen;

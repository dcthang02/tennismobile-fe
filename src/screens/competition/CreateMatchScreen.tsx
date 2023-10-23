import TPBackground from "@/components/Atom/TPBackgroud";
import TPIcon from "@/components/Atom/TPIcon";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import TPMatchDateTime from "@/components/Organisms/TPMatchDateTime";
import TPMatchLocationPicker from "@/components/Organisms/TPMatchLocationPicker";
import TPMatchNoticeInput from "@/components/Organisms/TPMatchNoticeInput";
import TPPlayersInvitator from "@/components/Organisms/TPPlayersInvitator";
import { COLORS } from "@/constant/colors";
import useCreateMatch from "@/hooks/useCreateMatch";
import useNavigation from "@/hooks/useNavigation";
import { CreateMatchProps } from "@/utils/createProps";
import React, { createRef, useCallback, useEffect, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

const CreateMatchScreen = ({ navigation }: CreateMatchProps) => {
  const [isTimePending, setIsTimePending] = useState(false);
  const [isLocationPending, setIsLocationPending] = useState(false);
  const [invitedPlayerIds, setInvitedPlayerIds] = useState<string[]>([]);
  const [date, setDate] = useState(new Date());
  const [fromDatePending, setFromDatePending] = useState(new Date());
  const [toDatePending, setToDatePending] = useState(new Date());
  const [stadiumId, setStadiumId] = useState("");
  const [notice, setNotice] = useState("");

  const { createMatch } = useCreateMatch();

  const handleSubmitCreate = useCallback(async () => {
    console.log("players", invitedPlayerIds);
    console.log("date", date);
    console.log("stadium", stadiumId);
    console.log("notice", notice);

    try {
      await createMatch({
        variables: {
          createMatchInput: {
            date: isTimePending ? null : date.toISOString(),
            maxPlayers: 4,
            note: notice || "",
            invitedPlayerIds: invitedPlayerIds,
            stadiumId: isLocationPending ? null : stadiumId,
          },
        },
      });
      navigation.navigate("CreateMatchSuccess");
    } catch (error) {
      Alert.alert("Lỗi tạo trận đấu", "Có một vài lỗi xảy ra");
    }
  }, [invitedPlayerIds, date, stadiumId, notice]);

  return (
    <TPBackground scroll>
      <TPHeader
        headerTitle="Tạo trận đấu"
        right={
          <TPButton
            title=""
            endIcon={<TPIcon name="chat" />}
            size="tiny"
            buttonType="text"
          />
        }
      />
      <TPWrapper paddingHorizontal={16} gap={16}>
        <TPPlayersInvitator onChangePlayers={setInvitedPlayerIds} />
        <TPMatchDateTime
          date={date}
          fromDatePending={fromDatePending}
          toDatePending={toDatePending}
          setFromDatePending={setFromDatePending}
          setToDatePending={setToDatePending}
          onChange={setDate}
          isPending={isTimePending}
          onChangePendingStatus={setIsTimePending}
        />
        <TPMatchLocationPicker
          isPending={isLocationPending}
          onChangePendingStatus={setIsLocationPending}
          onChangeStadium={setStadiumId}
        />
        <TPMatchNoticeInput value={notice} onChange={setNotice} />
      </TPWrapper>
      <View style={styles.view}>
        <TPButton
          title="Gửi lời mời"
          textSize="small"
          onPress={handleSubmitCreate}
        />
      </View>
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.charcoal.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 100,
  },
});

export default CreateMatchScreen;

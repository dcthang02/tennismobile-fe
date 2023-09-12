import TPBackground from "@/components/Atom/TPBackgroud";
import TPIcon from "@/components/Atom/TPIcon";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import TPMatchDateTime from "@/components/Organisms/TPMatchDateTime";
import TPMatchLocationPicker from "@/components/Organisms/TPMatchLocationPicker";
import TPMatchNoticeInput from "@/components/Organisms/TPMatchNoticeInput";
import TPPlayersInvitator from "@/components/Organisms/TPPlayersInvitator";
import React, { useState } from "react";

const CreateMatchScreen = () => {
  const [isTimePending, setIsTimePending] = useState(false);
  const [isLocationPending, setIsLocationPending] = useState(false);

  return (
    <TPBackground>
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
        <TPPlayersInvitator />
        <TPMatchDateTime
          isPending={isTimePending}
          onChangePendingStatus={setIsTimePending}
        />
        <TPMatchLocationPicker
          isPending={isLocationPending}
          onChangePendingStatus={setIsLocationPending}
        />
        <TPMatchNoticeInput />
      </TPWrapper>
    </TPBackground>
  );
};

export default CreateMatchScreen;

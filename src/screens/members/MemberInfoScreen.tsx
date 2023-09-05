import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPHeader from "@/components/Molecules/TPHeader";
import TPPlayerProfile from "@/components/Organisms/TPPlayerProfile";
import { COLORS } from "@/constant/colors";
import { MemberInfoProps } from "@/utils/createProps";
import React from "react";

const MemberInfoScreen = ({ navigation, route }: MemberInfoProps) => {
  return (
    <TPBackground>
      <TPHeader
        headerTitle={route.params.name}
        right={
          <TPButton
            title="Thách đấu"
            buttonType="text"
            color={COLORS.green[600]}
            size="tiny"
          />
        }
      />
      <TPWrapper marginTop={15} marginBottom={70} paddingHorizontal={16}>
        <TPPlayerProfile id={route.params.memberId} name={route.params.name} />
      </TPWrapper>
    </TPBackground>
  );
};

export default MemberInfoScreen;

import React from "react";
import useNavigation from "../../hooks/useNavigation";
import { MemberProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPTabHeader from "@/components/Molecules/TPTabHeader";
import TPListMember from "@/components/Organisms/TPListMember";

const MemberScreen = ({ navigation }: MemberProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16} marginBottom={16}>
        <TPTabHeader title="Danh sách thành viên" />
      </TPWrapper>
      <TPListMember navigation={navigation} />
    </TPBackground>
  );
};

export default MemberScreen;

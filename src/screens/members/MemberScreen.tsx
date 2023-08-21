import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import FilterIcon from "assets/icon/filter.svg";

import useNavigation from "../../hooks/useNavigation";
import { MemberProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPTabHeader from "@/components/Molecules/TPTabHeader";
import TPRow from "@/components/Atom/TPRow";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import TPButton from "@/components/Molecules/TPButton";
import TPListMember from "@/components/Organisms/TPListMember";

const MemberScreen = ({ navigation }: MemberProps) => {
  const { handleNavigate } = useNavigation(navigation);
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16} marginBottom={16}>
        <TPTabHeader title="Danh sách thành viên" />
        <TPRow style={styles.searchBarRow}>
          <View style={{ flex: 1 }}>
            <TPSearchBar
              placeholder="Tìm kiếm thành viên"
              backgroundColor="transparent"
            />
          </View>
          <TPButton
            title="f"
            // startIcon={<FilterIcon />}
            size="tiny"
            buttonType="text"
            backgroundColor="transparent"
          />
        </TPRow>
      </TPWrapper>
      <TPListMember navigation={navigation} />
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  searchBarRow: {
    gap: 15,
    alignItems: "center",
  },
});

export default MemberScreen;

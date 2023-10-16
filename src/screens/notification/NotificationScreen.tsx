import React, { useCallback, useEffect } from "react";
import { View, FlatList, Pressable, StyleSheet } from "react-native";

import useNavigation from "../../hooks/useNavigation";
import { NotificationProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPHeader from "@/components/Molecules/TPHeader";
import TPRow from "@/components/Atom/TPRow";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";
import { gapTwoDate } from "@/utils/dateTime";
import TPIcon from "@/components/Atom/TPIcon";

import { notices } from "@/api/notices";

const NotificationScreen = ({ navigation }: NotificationProps) => {
  const { handleNavigate } = useNavigation(navigation);

  const _renderNotice = useCallback(
    (notice: NotificationType) => {
      return (
        <Pressable
          style={styles.pressable}
          onPress={() =>
            handleNavigate("NotificationDetail", {
              id: notice.id,
            })
          }
        >
          {notice.status === "not-seen" && (
            <View style={styles.greenDot}></View>
          )}
          <TPRow style={styles.pressableRow}>
            <View style={styles.iconView}>
              <TPIcon name={notice.iconName} color={COLORS.blue[600]} />
            </View>
            <TPWrapper gap={4} flex={1}>
              <TPText variant="body14">
                {notice.strongTitle && (
                  <TPText variant="body14-semibold">
                    {notice.strongTitle}{" "}
                  </TPText>
                )}
                {notice.title && (
                  <TPText variant="body14">{notice.title}</TPText>
                )}
              </TPText>
              <TPText variant="small" color={COLORS.charcoal[600]}>
                {gapTwoDate(notice.date)}
              </TPText>
            </TPWrapper>
          </TPRow>
        </Pressable>
      );
    },
    [handleNavigate]
  );
  return (
    <TPBackground top={<TPHeader headerTitle="Thông báo" />}>
      <FlatList
        contentContainerStyle={{ gap: 1 }}
        data={notices}
        renderItem={({ item, index }) => _renderNotice(item)}
        keyExtractor={(item) => `notice-${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </TPBackground>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: COLORS.charcoal.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pressableRow: {
    gap: 8,
    alignItems: "center",
  },
  iconView: {
    backgroundColor: COLORS.blue[50],
    padding: 4,
    borderRadius: 16,
  },
  greenDot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    left: 4,
    top: 24,
    backgroundColor: COLORS.green[600],
  },
});

export default NotificationScreen;

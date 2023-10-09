import TPBackground from "@/components/Atom/TPBackgroud";
import TPHeader from "@/components/Molecules/TPHeader";
import { NotificationDetailProps } from "@/utils/createProps";
import React from "react";

import { notices } from "@/api/notices";

const NotificationDetailScreen = ({
  route,
  navigation,
}: NotificationDetailProps) => {
  return (
    <TPBackground
      top={<TPHeader headerTitle="Chi tiết thông báo" />}
    ></TPBackground>
  );
};

export default NotificationDetailScreen;

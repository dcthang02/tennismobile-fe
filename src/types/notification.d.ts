type NotificationType = {
  id: number | string;
  strongTitle?: string;
  title?: string;
  noticeTitle: string;
  detail: string[];
  date: Date;
  iconName: TypeTPIconName;
  status: "seen" | "not-seen";
};

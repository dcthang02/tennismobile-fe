export const convertTime = (time: number) => {
  if (time < 10) return `0${time}`;
  return time;
};

export const convertDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} • ${convertTime(
    date.getHours()
  )}:${convertTime(date.getMinutes())}`;
};

const miliSecond = 60000;
const oneHourMinutes = 60;
const oneDateMinutes = 1440;
const oneWeekMinutes = 10080;
const oneMonthMinutes = 43200;
const oneYearMinutes = 525600;

export const gapTwoDate = (date: Date) => {
  const gapMili = new Date().getTime() - date.getTime();
  const gapMinutes = gapMili / 60000;
  if (gapMinutes < 60) return Math.ceil(gapMinutes) + " phút trước";
  else if (gapMinutes < oneDateMinutes)
    return Math.floor(gapMinutes / oneHourMinutes) + " giờ trước";
  else if (gapMinutes < oneWeekMinutes)
    return Math.floor(gapMinutes / oneDateMinutes) + " ngày trước";
  else if (gapMinutes < oneMonthMinutes)
    return Math.floor(gapMinutes / oneWeekMinutes) + " tuần trước";
  else if (gapMinutes < oneYearMinutes)
    return Math.ceil(gapMinutes / oneMonthMinutes) + " tháng trước";
  else return Math.round(gapMinutes / oneYearMinutes) + " năm trước";
};

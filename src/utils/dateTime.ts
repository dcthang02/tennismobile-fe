export const convertTime = (time: number) => {
  if (time < 10) return `0${time}`;
  return time;
};

export const convertDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} • ${convertTime(
    date.getHours()
  )}:${convertTime(date.getMinutes())}`;
};

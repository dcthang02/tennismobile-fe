export const convertName = (name: string) => {
  if (name.length >= 15) return name.substring(0, 14) + "...";
  return name;
};

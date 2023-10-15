export const convertPhoneNumber = (phoneNumber: string) => {
  return "+84" + phoneNumber.substring(1, phoneNumber.length);
};

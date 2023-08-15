import { TPTextInputRule } from "./TPTextInput";

const checkPhoneNumber = (text: string) => {
  if (text.length < 10 || text?.at(0) !== "0") return false;
  return true;
};

export const checkInput = (text: string, rule: TPTextInputRule) => {
  switch (rule) {
    case "phone":
      if (!checkPhoneNumber(text)) return "Số điện thoại không hợp lệ";
      return "";
    case "abc":
      return "";
    default:
      break;
  }
};

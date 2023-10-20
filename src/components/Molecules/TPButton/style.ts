import styled from "styled-components/native";

export const ButtonStyled = styled.Pressable<{
  backgroundColor?: string;
  size?: string;
  outline?: boolean;
}>`
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: 50px;
  height: ${(props: any) => {
    switch (props.size) {
      case "large":
        return "48px";
      case "default":
        return "40px";
      case "small":
        return "24px";
      case "tiny":
        return "20px";
      default:
        break;
    }
  }};
  padding: ${(props: any) => {
    switch (props.size) {
      case "large":
        return "0 16px";
      case "default":
        return "0 12px";
      case "small":
        return "0 8px";
      case "tiny":
        return "0";
      default:
        break;
    }
  }};
  border: ${(props: any) =>
    props.outline ? `1px solid ${props.color}` : "none"};
`;

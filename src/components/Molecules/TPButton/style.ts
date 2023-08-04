import styled from "styled-components/native";

export const ButtonStyled = styled.Pressable<{
  backgroundColor?: string;
  size?: string;
  fullWidth?: boolean;
}>`
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: 50px;
  align-self: ${(props: any) => (props.fullWidth ? "stretch" : "flex-start")};
  padding: ${(props: any) => {
    switch (props.size) {
      case "large":
        return "12px 16px";
      case "default":
        return "8px 16px";
      case "small":
        return "2px 8px";
      default:
        break;
    }
  }};
`;

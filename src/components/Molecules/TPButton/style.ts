import styled from "styled-components/native";

export const ButtonStyled = styled.Pressable<{
  backgroundColor?: string;
  size?: string;
  outline?: boolean;
}>`
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: 50px;
  padding: ${(props: any) => {
    switch (props.size) {
      case "large":
        return "8px 16px";
      case "default":
        return "8px 12px";
      case "small":
        return "2px 8px";
      case "tiny":
        return "0px";
      default:
        break;
    }
  }};
  border: ${(props: any) =>
    props.outline ? `1px solid ${props.color}` : "none"};
`;

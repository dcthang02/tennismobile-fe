import styled from "styled-components/native";

export const TextWrapper = styled.Text<{
  color: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  alignCenter: boolean;
}>`
  font-size: ${(props: any) => `${props.fontSize}px`};
  color: ${(props: any) => props.color};
  font-weight: ${(props: any) =>
    props.fontWeight === "Regular" ? "normal" : "bold"};
  line-height: ${(props: any) => `${props.lineHeight}px`};
  text-align: ${(props: any) => (props.alignCenter ? "center" : "left")};
`;

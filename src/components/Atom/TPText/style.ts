import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const TextWrapper = styled.Text<{
  color: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
}>`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
  font-weight: ${(props: any) =>
    props.fontWeight === "Regular" ? "normal" : "bold"};
  line-height: ${(props: any) => props.lineHeight};
`;

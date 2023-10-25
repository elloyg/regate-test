import styled from "styled-components/native";
import { Theme } from "../theme";
import { Text } from "react-native-paper";
import { FC, PropsWithChildren } from "react";

const Container = styled.SafeAreaView`
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.secondary};
`;

const Title = styled(Text).attrs({ variant: "displaySmall" })`
  color: white;
`;

export type HeaderProps = PropsWithChildren & {
  readonly title?: string;
};

export const Header: FC<HeaderProps> = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

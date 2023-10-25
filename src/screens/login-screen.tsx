import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native-paper";
import styled from "styled-components/native";
import { Theme } from "../theme";
import { ScreenContainer } from "../components/layout";

const Header = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.secondary};
`;

const HeaderTitle = styled(Text)`
  color: white;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function LoginScreen() {
  return (
    <ScreenContainer>
      <StatusBar style="light" />
      <Header>
        <HeaderTitle variant="displaySmall">{"Regate Test"}</HeaderTitle>
      </Header>
      <ButtonContainer>
        <Button mode="contained">{"Login"}</Button>
      </ButtonContainer>
    </ScreenContainer>
  );
}

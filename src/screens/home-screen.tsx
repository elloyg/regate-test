import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "../components/layout";
import { Button, Text } from "react-native-paper";
import { useUser } from "../providers/user-provider";
import { Header } from "../components/header";
import { CatList } from "../components/cat-list";
import { StackScreenProps } from "../navigation/types";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { CatsAPI } from "../apis/cats-api";

const ErrorText = styled(Text).attrs({ variant: "labelMedium" })`
  margin-top: 12px;
`;

const ButtonContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export function HomeScreen({ navigation }: StackScreenProps<"Home">) {
  const { user, clearUser } = useUser();
  const { cats, error, loading, fetch } = CatsAPI.useRandomCats();
  return (
    <ScreenContainer>
      <StatusBar style="light" />
      <Header title={user?.email}>
        <Button onPress={clearUser}>{"Logout"}</Button>
      </Header>
      <CatList
        cats={cats}
        onPressCat={(cat) => navigation.navigate("Cat", { cat })}
      />
      <SafeAreaView>
        <ButtonContainer>
          <Button loading={loading} onPress={fetch} mode="contained">
            {"Get new cats !"}
          </Button>
          {error && <ErrorText>{error}</ErrorText>}
        </ButtonContainer>
      </SafeAreaView>
    </ScreenContainer>
  );
}

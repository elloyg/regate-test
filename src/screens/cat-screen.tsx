import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "../components/layout";
import { Appbar, Card } from "react-native-paper";
import { StackScreenProps } from "../navigation/types";
import styled from "styled-components/native";
import { Image } from "react-native";
import { BreedList } from "../components/breed-list/breed-list";

const Content = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 16 },
})`
  flex: 1;
`;

export function CatScreen({ navigation, route }: StackScreenProps<"Cat">) {
  const { cat } = route.params;
  return (
    <ScreenContainer>
      <StatusBar style="dark" />
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={`Your cat ID: ${cat.id}`} />
      </Appbar.Header>
      <BreedList cat={cat} />
    </ScreenContainer>
  );
}

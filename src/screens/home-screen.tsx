import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "../components/layout";
import { Button } from "react-native-paper";
import { useUser } from "../providers/user-provider";
import { Header } from "../components/header";

export function HomeScreen() {
  const { user, clearUser } = useUser();
  return (
    <ScreenContainer>
      <StatusBar style="light" />
      <Header title={user?.email}>
        <Button mode="outlined" onPress={clearUser}>
          {"Logout"}
        </Button>
      </Header>
    </ScreenContainer>
  );
}

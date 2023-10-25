import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "../components/layout";
import { Button } from "react-native-paper";
import { useUser } from "../providers/user-provider";

export function HomeScreen() {
  const { clearUser } = useUser();
  return (
    <ScreenContainer>
      <StatusBar style="light" />
      <Button mode="contained" onPress={clearUser}>
        {"Logout"}
      </Button>
    </ScreenContainer>
  );
}

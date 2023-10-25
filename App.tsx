import { PaperProvider } from "react-native-paper";
import LoginScreen from "./src/screens/login-screen";
import { Theme } from "./src/theme";
import { UserProvider } from "./src/providers/user-provider";

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <UserProvider>
        <LoginScreen />
      </UserProvider>
    </PaperProvider>
  );
}

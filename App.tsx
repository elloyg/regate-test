import { PaperProvider } from "react-native-paper";
import LoginScreen from "./src/screens/login-screen";
import { Theme } from "./src/theme";

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <LoginScreen />
    </PaperProvider>
  );
}

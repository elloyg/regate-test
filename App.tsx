import { PaperProvider } from "react-native-paper";
import { Theme } from "./src/theme";
import { UserProvider } from "./src/providers/user-provider";
import { Navigator } from "./src/navigation/navigator";

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <UserProvider>
        <Navigator />
      </UserProvider>
    </PaperProvider>
  );
}

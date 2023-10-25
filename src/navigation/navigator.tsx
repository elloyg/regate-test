import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUser } from "../providers/user-provider";
import { LoginScreen } from "../screens/login-screen";
import { HomeScreen } from "../screens/home-screen";
import { StackNavigatorParams } from "./types";
import { CatScreen } from "../screens/cat-screen";

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export function Navigator() {
  const { user } = useUser();
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cat" component={CatScreen} />
        </Stack.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}

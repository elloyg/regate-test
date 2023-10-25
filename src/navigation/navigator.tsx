import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUser } from "../providers/user-provider";
import { LoginScreen } from "../screens/login-screen";
import { HomeScreen } from "../screens/home-screen";

const Stack = createNativeStackNavigator();

export function Navigator() {
  const { user } = useUser();
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}

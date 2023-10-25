import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Theme } from "../theme";
import { ScreenContainer } from "../components/layout";
import { useRef, useState } from "react";
import { LoginAPI } from "../apis/login-api";
import { TextInput as TI } from "react-native";
import { useUser } from "../providers/user-provider";

const Header = styled.SafeAreaView`
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.secondary};
`;

const HeaderTitle = styled(Text)`
  color: white;
`;

const CenteredScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
})`
  flex: 1;
`;

const Field = styled(TextInput).attrs({ mode: "outlined" })`
  align-self: stretch;
  margin-bottom: 12px;
`;

const ErrorText = styled(Text).attrs({ variant: "labelMedium" })`
  margin-bottom: 12px;
`;

export default function LoginScreen() {
  const { setUser } = useUser();
  const passwordRef = useRef<TI | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function login() {
    setError(false);
    setLoading(true);
    LoginAPI.login(email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }

  const loginButtonDisabled = email === "" || password === "";

  return (
    <ScreenContainer>
      <StatusBar style="light" />
      <Header>
        <HeaderTitle variant="displaySmall">{"Regate Test"}</HeaderTitle>
      </Header>
      <CenteredScrollView>
        <Field
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email.toLowerCase())}
          keyboardType="email-address"
          returnKeyType="next"
          onBlur={() => passwordRef.current && passwordRef.current?.focus()}
        />
        <Field
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={setPassword}
          returnKeyType="done"
          secureTextEntry
        />
        {error && (
          <ErrorText>{"Login error: check email or password"}</ErrorText>
        )}
        <Button
          mode="contained"
          disabled={loginButtonDisabled}
          onPress={login}
          loading={loading}
        >
          {"Login"}
        </Button>
      </CenteredScrollView>
    </ScreenContainer>
  );
}

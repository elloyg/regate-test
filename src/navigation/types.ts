import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Cat } from "../apis/cats-api";

export type StackNavigatorParams = {
  Home: undefined;
  Cat: { cat: Cat };
};

export type StackScreenProps<N extends keyof StackNavigatorParams> =
  NativeStackScreenProps<StackNavigatorParams, N>;

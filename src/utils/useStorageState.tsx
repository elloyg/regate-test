import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

async function store(key: string, data: unknown) {
  if (data === undefined || data === null) {
    return AsyncStorage.removeItem(key);
  }
  const item = JSON.stringify(data);
  return AsyncStorage.setItem(key, item).catch((error) =>
    console.log("[useStorageState] store Error", error)
  );
}

async function restore<T>(key: string) {
  try {
    const item = await AsyncStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item) as T;
    }
  } catch (error) {
    console.log("[useStorageState] restore Error", error);
  }
}

export function useStorageState<T>(key: string, defaultValue: T) {
  const state = useState<T>(defaultValue);

  useEffect(() => {
    restore<T>(key).then((v) => !!v && state[1](v));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    store(key, state[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state[0]]);

  return state;
}

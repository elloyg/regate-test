import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from "react";
import { User } from "../apis/login-api";
import { useStorageState } from "../utils/useStorageState";

type UserContext = {
  user?: User;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const userContext = createContext<UserContext | undefined>(undefined);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, _setUser] = useStorageState<User | undefined>("user", undefined);

  function setUser(user: User) {
    _setUser(user);
  }

  function clearUser() {
    _setUser(undefined);
  }

  const context = useMemo(
    () => ({ user, setUser, clearUser }),
    [user, _setUser]
  );

  return (
    <userContext.Provider value={context}>{children}</userContext.Provider>
  );
};

export function useUser() {
  const context = useContext(userContext);
  if (context === undefined) {
    throw Error("useUser should be used in a UserProvider");
  }
  return context;
}

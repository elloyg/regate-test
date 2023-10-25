const LOGIN_URL = "https://hvceigxsvecfcsmoentn.supabase.co/functions/v1/login";

export type User = {
  email: string;
};

async function login(email: string, password: string) {
  const body = JSON.stringify({ email, password });
  return (await fetch(LOGIN_URL, { method: "POST", body }))
    .json()
    .then((data) => {
      if (data.error) throw new Error(data.error);
      return data as User;
    });
}

export const LoginAPI = { login };

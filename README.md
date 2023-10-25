# Regate Test: A Regate test application

## Supabase Edge Function

- To create a Supabase "login" function:

  ```sh
  npx supabase functions new login
  ```

- To deploy the "login" function WITHOUT default authorization:

  ```sh
  npx supabase functions deploy login --project-ref hvceigxsvecfcsmoentn --no-verify-jwt
  ```

  The `--no-verify-jwt` option is used to disable the default authorization system (unsecured).

  This command will ask for an access token that could be generated here:
  <https://supabase.com/dashboard/account/tokens>

- To test a successfull login:

  ```sh
  curl -L -X POST 'https://hvceigxsvecfcsmoentn.supabase.co/functions/v1/login' --data '{"email": "test@regate.io", "password": "password"}'
  ```

- To test a failling login:

  ```sh
  curl -L -X POST 'https://hvceigxsvecfcsmoentn.supabase.co/functions/v1/login' --data '{}'
  ```

## APIs detail

This application use 2 dinstinc APIs:

1. A login API running on Supabase to authenticate the use
2. A open API serving cat images and his associated breeds: <https://developers.thecatapi.com/>

# Regate Test: A Regate test application

## Quick Start

### Installation

This application is available on Expo Go, throught these 2 links:

- Android: <exp://u.expo.dev/update/56ab9d5a-9a4c-4130-9f6b-1f99b28d8236>
- iOS: <exp://u.expo.dev/update/00cbc2a5-8bf7-4a8e-9bdf-df0cb40991d8>

### How To

You can test several features:

- Login, with the following credentials `test@regate.io` and `password`
- Loading of a list of items from a remote API: click the button at the bottom of the home screen
- Navigating to the detail of an item: click on an item on the home screen
- State and Persistency: if you are logged, kill the application and relaunch it, you're still logged in

## APIs detail

This application use 2 dinstinc APIs:

1. A login API running on Supabase to authenticate the use
2. A open API serving cat images and his associated breeds: <https://developers.thecatapi.com/>

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

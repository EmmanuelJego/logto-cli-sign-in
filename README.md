# logto-cli-sign-in

Logto login with CLI error reproduction.

NodeJS Express server. Opens the Logto log in interface which will redirect to this server once logged in.

The Logto application must have a `http://localhost:<this_server_port>` redirect URI registered.

## Update auth parameters

In index.js, update `ENDPOINT` `CLIENT_ID` and `REDIRECT_URI` according to your Logto application settings.

This script uses the default API resource of my tenant, so no `resource` parameter is sent.

## Launch

```
npm install
node index.js
```
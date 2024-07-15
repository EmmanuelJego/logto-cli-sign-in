# logto-cli-sign-in

Logto login with CLI error reproduction.

NodeJS Express server.

## Update auth parameters

In index.js, update `ENDPOINT` `CLIENT_ID` and `REDIRECT_URI` according to your Logto application settings.

This script uses the default API resource of my tenant, so no `resource` parameter is sent.

## Launch

```
npm install
node index.js
```
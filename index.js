import open from 'open';
import express from 'express';
import http from 'http';

const app = express();

const PORT = 3333;

app.get('/', async (req, res) => {
  console.log('req', req)
  
  const { code, error } = req.query;

  if (!code) {
    res.status(400).send(`Authentication failed: ${error}`);
  } else {
    res.send(`Received auth code: ${code}`);
    
    // Need to fetch auth token from code here
    // ...
  }

  // Shut down the server after receiving the token
  server.close();
  process.exit(0);
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const ENDPOINT = 'https://n2bqen.logto.app/oidc/auth';
const CLIENT_ID = '0690kcdpzuxmh2krsg39a';
const REDIRECT_URI = `http://localhost:${PORT}`;

const authUrl = `${ENDPOINT}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`

// Launching the auth process
await open(authUrl);

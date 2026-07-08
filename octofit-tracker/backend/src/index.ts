import 'dotenv/config';

import app from './app';
import { apiPort, getApiBaseUrl } from './server';
import './config/database';

const port = apiPort;

app.listen(port, () => {
  console.log(`OctoFit Tracker backend listening on port ${port}`);
  console.log(`API base URL: ${getApiBaseUrl()}`);
});

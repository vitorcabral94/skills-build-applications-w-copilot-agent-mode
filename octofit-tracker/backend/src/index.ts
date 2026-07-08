import 'dotenv/config';

import app from './app';
import './config/database';

const port = Number(process.env.PORT ?? 8000);

app.listen(port, () => {
  console.log(`OctoFit Tracker backend listening on port ${port}`);
});

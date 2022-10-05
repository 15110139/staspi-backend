import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import {pingRouter} from "./api/ping"

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ limit: '50mb' }));


app.use('/api', pingRouter);


const port = process.env.PORT || 5001;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

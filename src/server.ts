import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import { queryParser } from 'express-query-parser';
import bodyParser from 'body-parser';
import config from './config';

const app: Application = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.use(
    queryParser({
      parseNull: true,
      parseUndefined: true,
      parseBoolean: true,
      parseNumber: true
    })
  )

  app.listen(config.port, () => console.log(`Farms server is listening on port ${config.port}!`));

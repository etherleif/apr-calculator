import express, { type Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import { queryParser } from 'express-query-parser';
import bodyParser from 'body-parser';
import config from './config';
import { startRedis } from './redis/client';

const startExpress = (): void => {
  const app: Application = express();

  app.use(compression());
  app.use(cors());
  app.use(bodyParser.json());

  app.use(
    queryParser({
      parseNull: true,
      parseUndefined: true,
      parseBoolean: true,
      parseNumber: true,
    })
  );

  app.listen(config.port, () => console.error(`Farms server is listening on port ${config.port}!`));
};

const start = async (): Promise<void> => {
  await startRedis();
  startExpress();
};

void (async () => {
  await start().catch((err) => console.error(err));
})();

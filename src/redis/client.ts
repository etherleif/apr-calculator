import config from '../config';
import { createClient } from 'redis';

export const client = createClient({
  url: config.redisUrl,
});
client.on('error', (err) => console.log('Redis Client Error', err));

export const startRedis = async () : Promise<void> => {
  return await client.connect();
};

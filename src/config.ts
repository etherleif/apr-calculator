export default {
    port: process.env.PORT || 3000,
    redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379/',
}
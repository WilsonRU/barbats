import { Redis } from 'ioredis';
import { CacheInterface } from '@interfaces/CacheInterface';

export class RedisUtil implements CacheInterface {
    private readonly redis: Redis;

    constructor() {
        this.redis = new Redis({
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
        });
    }

    public async exist(key: string): Promise<boolean> {
        const value = await this.redis.get(key);
        return value !== null;
    }

    public async pull(key: string): Promise<string | null> {
        return await this.redis.get(key);
    }

    public async push(key: string, value: any): Promise<void> {
        await this.redis.set(key, value);
    }

    public async purge(key: string): Promise<void> {
        await this.redis.del(key);
    }
}

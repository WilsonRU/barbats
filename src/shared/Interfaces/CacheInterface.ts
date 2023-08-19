export interface CacheInterface {
    exist: (key: string) => Promise<boolean>;
    pull: (key: string) => Promise<string | null>;
    push: (key: string, value: any) => Promise<void>;
    purge: (key: string) => Promise<void>;
}

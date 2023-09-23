import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    verbose: true,
    testRegex: '.*\\.test\\.ts$',
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    coverageDirectory: 'coverage',
    collectCoverage: false,
    collectCoverageFrom: ['src/app/**/*.ts'],
}
export default config;


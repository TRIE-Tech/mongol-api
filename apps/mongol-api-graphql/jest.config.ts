/* eslint-disable */
export default {
  displayName: 'mongol-api-graphql',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/mongol-api-graphql',
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/*.graphql',
    '!**/*.config.ts',
    '!**/*.graphql.ts',
    '!**/graphql.ts',
    '!**/types/*',
    '!src/resolvers/index.ts',
  ],
};

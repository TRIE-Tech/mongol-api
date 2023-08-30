/* eslint-disable */
export default {
  displayName: 'mongol-api-rest',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/main.ts'],
  coverageDirectory: '../../coverage/apps/mongol-api-rest',
  setupFiles: ['<rootDir>/jest-env.ts'],
};

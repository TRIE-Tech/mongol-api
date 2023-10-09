/* eslint-disable */
export default {
  displayName: 'mongol-api-web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!src/pages/*.{ts,tsx}',
    '!src/cypress/**/*.{ts,tsx}',
    '!src/cypress/e2e/*.{ts,tsx}',
    '!src/theme/*.{ts,tsx}',
    '!src/styles/*.{ts,tsx}',
    '!src/icons/*.{ts,tsx}',
    '!src/features/**/*.{ts,tsx}',
  ],
  coverageDirectory: '../../coverage/apps/mongol-api-web',
};

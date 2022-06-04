// Sync object
const config = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.ts'],
};
export default config;
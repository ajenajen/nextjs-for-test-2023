const nextJest = require("next/jest");

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@type/(.*)$": "<rootDir>/src/type/$1",
    "^@public/(.*)$": "<rootDir>/public/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

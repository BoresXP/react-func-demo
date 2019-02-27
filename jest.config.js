module.exports = {
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/*.{d.ts}"
  ],
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupTestFrameworkScriptFile: require.resolve('./test/jest.setup.ts'),
};

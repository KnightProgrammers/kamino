module.exports = {
  testTimeout: 50000,
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transformIgnorePatterns: [
    '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.js$'
  ],
  transform: {},
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  testMatch: [
    '**/test/**/*.unit.test.js'
  ],
  reporters: ["default", "jest-junit"],
  collectCoverageFrom: [
    '**/src/controllers/*.js',
    // '**/src/middlewares/*.js',
    // '**/src/validators/*.js'
  ]
};

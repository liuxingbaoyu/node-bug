module.exports = {
  runner: "jest-light-runner",

  snapshotFormat: { escapeString: true, printBasicPrototype: true },

  testRegex: `./tests/.*.js$`,
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  transformIgnorePatterns: ["/node_modules/"],
};

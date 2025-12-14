const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts", "!src/**/server.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "dist/"],
  transform: {
    ...tsJestTransformCfg,
  },
};

/* eslint-disable */

module.exports = function (config) {
  config.set({
    basePath: "",

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      { pattern: "./test/*.ts" },
      { pattern: "./src/*.ts" },
      { pattern: "./ies-lights/*.ts" },
    ],

    preprocessors: {
      "**/*.ts": "karma-typescript",
    },

    reporters: ["progress"],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ["ChromeHeadlessNoSandbox"],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },

    singleRun: true,
    concurrency: Infinity,

    karmaTypescriptConfig: {
      extends: "tsconfig.json",

      bundlerOptions: {
        transforms: [require("karma-typescript-es6-transform")()],
      },
    },
  });
};

const { BeforeAll, AfterAll, Before, After } = require("@cucumber/cucumber");
const container = require("../di-container");
const Logger = require("../utils/logger");
const ScreenshotRecorder = require("../utils/screenshot-recorder");
const VideoRecorder = require("../utils/video-recorder");

BeforeAll(async () => {
  await container.initialize();
  Logger.info(`Test execution started at: ${new Date().toString().replace(/\s*\([^)]*\)/g, '')}`);
});

AfterAll(async () => {
  await container.cleanup();
  Logger.info(`Test execution finished at: ${new Date().toString().replace(/\s*\([^)]*\)/g, '')}`);
});

Before(async function (scenario) {
  this.testName = scenario.pickle.name.replace(/ /g, "_");
  this.screenshotRecorder = new ScreenshotRecorder(container.get("driver"));
  this.videoRecorder = new VideoRecorder();

  Logger.info(`Starting scenario: ${this.testName}`);
  this.videoRecorder.startRecording(this.testName);
});

After(async function (scenario) {
  Logger.info(`Finished scenario: ${this.testName}`);
  this.videoRecorder.stopRecording();

  if (scenario.result.status === "FAILED") {
    await this.screenshotRecorder.takeScreenshot(this.testName);
    Logger.error(`Scenario failed: ${this.testName}`);
  }

  await container.get("driver").manage().deleteAllCookies();

  Logger.info(`Scenario status: ${scenario.result.status}`);
});

module.exports = {
  container,
  driver: container.get("driver"),
  config: container.get("config"),
};

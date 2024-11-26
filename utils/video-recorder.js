const fs = require("fs");
const path = require("path");
const Logger = require("./logger");

class VideoRecorder {
  constructor() {
    this.videoDir = path.join(__dirname, "..", "videos");
    if (!fs.existsSync(this.videoDir)) {
      fs.mkdirSync(this.videoDir, { recursive: true });
    }
  }

  startRecording(testName) {
    Logger.info("Start video recording");
    const videoPath = path.join(this.videoDir, `${testName}.mp4`);
    fs.writeFileSync(videoPath, "");
  }

  stopRecording() {
    Logger.info("Stop video recording");
  }
}

module.exports = VideoRecorder;

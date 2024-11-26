const fs = require('fs');
const path = require('path');

class ScreenshotRecorder {
    constructor(driver) {
        this.driver = driver;
        this.screenshotDir = path.join(path.join(__dirname, '..'), 'screenshots');
        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }
    }

    async takeScreenshot(testName) {
        const screenshot = await this.driver.takeScreenshot();
        const screenshotPath = path.join(this.screenshotDir, `${testName}.png`);
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
    }
}

module.exports = ScreenshotRecorder;


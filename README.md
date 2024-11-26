
# Automation Project

This is an automation solution using Selenium WebDriver 4, Node.js, JavaScript, and Cucumber. </br>
The project uses the Page Object Model (POM) design pattern.

## How to Use

### Prerequisites

- Node.js and npm installed on your machine.
- Chrome and Firefox browsers installed.
- Chromedriver and Geckodriver binaries installed.

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/Ivo-Sap/NexoUIAutomationFramework.git
    cd NexoUIAutomationFramework
    ```

2. Install the dependencies:
    ```
    npm install
    ```

### Running Tests

To execute the tests, select environment using NODE_ENV and run one of the following commands: </br>
Using Windows:</br>
```
set "NODE_ENV=local" && npm test
set "NODE_ENV=staging" && npm test
```
Using Linux/MacOS:</br>
```
NODE_ENV=local npm test
NODE_ENV=staging npm test
```

To generate HTML report after tests execution use:
```
npm run generate-report
```

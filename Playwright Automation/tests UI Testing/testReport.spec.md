// html
// json
// list
// dot

// allure report

Allure Report with Playwright[Screenshots, Videos & Traces]
Step1: Install Allure Report command - line tool

npm install - g--save - dev allure - commandline
Step2: Install the Allure Playwright adapter.

npm install--save - dev allure - playwright
Step3: Add below config in playwright.config.js file.

    reporter: [
        ['html'],
        ['allure-playwright']
    ],
        Step4: Run Playwright tests.

npx playwright test
Step5: Generate Allure Report

npx allure serve allure - results
or

allure generate allure - results--clean
allure open
image

image

image

image


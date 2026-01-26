npm init playwright@latest


Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

npx playwright show-report

npx playwright test --failed-test


# folder structure:

The output tells us that a new npm project was created with a package.json file, and that Playwright Test was installed. It also tells us the files that were created:

playwright.config.ts: The Playwright Test Configuration file.
.github/workflows/playwright.yml: GitHub Action for automating tests
tests/: Top-level folder that Playwright searches recursively for tests with an example test script.
tests-examples/: Staging folder with a demo todo app test script to try out.
package.json: The npm project file.
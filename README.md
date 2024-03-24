==========================================================
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

And check out the following files:

- .\tests\example.spec.ts - Example end-to-end test
- .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
- .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information.

==================================================================================
https://github.com/krishnakachare/AT_TS-Playwright.git
…or create a new repository on the command line
echo "# AT_TS-Playwright" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/krishnakachare/AT_TS-Playwright.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/krishnakachare/AT_TS-Playwright.git
git branch -M main
git push -u origin main

========================================================================================

# Introduction to Playwright

Hi 👋🏽!

Welcome to the course "Introduction to Playwright" by [Renata Andrade](https://testingwithrenata.com/) for the [Test Automation University](https://testautomationu.applitools.com/).

## Dependencies

- Playwright v1.33.0
- Node v19.8.1
- npm v9.6.5
- VSCode 1.77.3 (Universal)
- Applitools v1.17.0

> Pre requirements:

- [Node setup](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [VS Code setup](https://code.visualstudio.com/learn/get-started/basics)
- [iTerm setup](https://iterm2.com/documentation-one-page.html)

## Fork and clone the project

1. Copy the project URL `https://github.com/raptatinha/tau-introduction-to-playwright.git`;
1. Fork the project following the [GitHub instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo) - (use the parameter --clone=true);
1. Access the forked project `cd tau-introduction-to-playwright`

## Instal the project

On your terminal, type:

1. `npm i`

IMPORTANT: to run the tests from `main`, you'll need to setup your [.env](.env) following the [.env.example](.env.example), otherwise many tests will fail - this setup is explained in the Chapter 4 video. The recommendation is to access each branch (`git checkout [branchname]`) and run the tests from the branch.

---

💡 Share on LinkedIn something interesting you've learned! Don't forget to tag me [Renata Andrade](https://www.linkedin.com/in/raptatinha/).

💜 If you have questions, feel free to post them on [github](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭


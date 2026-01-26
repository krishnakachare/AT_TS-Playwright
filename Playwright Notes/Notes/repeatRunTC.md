
same TC will repeat multipal times

npx playwrite test testFilePath --repeat-each=3


retrire TC if it fail:
playwright.config.js

retries: process.env.CI ? CLI : UI

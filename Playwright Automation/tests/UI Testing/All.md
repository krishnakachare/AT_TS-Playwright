# ✅ **Playwright Full Course with Code Examples (Zero → Advanced)**

---

## 🟢 PHASE 1 — Foundations

---

## 1️⃣ Introduction to Playwright (Basic Test)

```ts
import { test, expect } from "@playwright/test";

test("basic test example", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);
});
```

---

## 2️⃣ Environment Setup

```bash
npm init playwright@latest
npx playwright test
npx playwright show-report
```

---

## 3️⃣ Project Structure

```
tests/
  login.spec.ts
playwright.config.ts
package.json
```

---

## 4️⃣ Writing Your First Test

```ts
test("login flow", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  await page.fill(".new-todo", "Learn Playwright");
  await page.press(".new-todo", "Enter");
  await expect(page.locator(".todo-list li")).toHaveText("Learn Playwright");
});
```

---

## 5️⃣ Locators (Most Important)

```ts
const email = page.getByLabel("Email");
const submit = page.getByRole("button", { name: "Login" });
const title = page.getByText("Dashboard");
const input = page.getByPlaceholder("Enter username");
const testId = page.getByTestId("login-btn");

await email.fill("admin@test.com");
await submit.click();
await expect(title).toBeVisible();
```

---

## 6️⃣ Browser, Context & Page

```ts
test("multiple contexts", async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page1.goto("https://example.com");
  await page2.goto("https://google.com");
});
```

---

## 7️⃣ Handling Web Elements

```ts
await page.click("#login");
await page.fill("#username", "admin");
await page.selectOption("#country", "India");
await page.check("#terms");
await page.setInputFiles("#upload", "file.pdf");
await page.hover(".menu");
await page.keyboard.press("Enter");
await page.mouse.move(100, 200);
```

---

## 8️⃣ Assertions

```ts
await expect(page).toHaveURL(/dashboard/);
await expect(page.locator("h1")).toHaveText("Dashboard");
await expect(page.locator("#submit")).toBeEnabled();
await expect.soft(page.locator("#msg")).toHaveText("Success");
```

---

## 9️⃣ Waits & Synchronization

```ts
await page.waitForURL("**/dashboard");
await page.waitForSelector("#profile");
await page.waitForResponse(
  (res) => res.url().includes("/users") && res.status() === 200,
);
```

---

## 🟡 PHASE 2 — Core Automation

---

## 🔟 Hooks & Test Control

```ts
test.beforeEach(async ({ page }) => {
  await page.goto("https://example.com/login");
});

test.describe("Login Tests", () => {
  test("valid login", async ({ page }) => {});
  test.skip("skip example", async ({ page }) => {});
});
```

---

## 1️⃣1️⃣ Configuration & CLI

```ts
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  retries: 1,
  timeout: 30000,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
  ],
});
```

```bash
npx playwright test --project=chromium --headed
```

---

## 1️⃣2️⃣ Screenshots, Videos & Traces

```ts
await page.screenshot({ path: "home.png" });
```

```bash
npx playwright test --trace on
npx playwright show-trace trace.zip
```

---

## 1️⃣3️⃣ Alerts, Frames & Windows

```ts
page.on("dialog", (dialog) => dialog.accept());

const frame = page.frameLocator("#frame1");
await frame.locator("#btn").click();

const [popup] = await Promise.all([
  page.waitForEvent("popup"),
  page.click("#openWindow"),
]);
await popup.fill("#email", "test@test.com");
```

---

## 1️⃣4️⃣ Authentication & Session Reuse

```ts
// login.setup.ts
import { test as setup } from "@playwright/test";

setup("login", async ({ page }) => {
  await page.goto("/login");
  await page.fill("#user", "admin");
  await page.fill("#pass", "password");
  await page.click("#login");
  await page.context().storageState({ path: "auth.json" });
});
```

```ts
// playwright.config.ts
use: {
  storageState: 'auth.json',
}
```

---

## 1️⃣5️⃣ Page Object Model (POM)

```ts
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page) {}

  username = this.page.locator("#username");
  password = this.page.locator("#password");
  loginBtn = this.page.locator("#login");

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
```

```ts
// tests/login.spec.ts
import { LoginPage } from "../pages/LoginPage";

test("login test", async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto("/login");
  await login.login("admin", "1234");
});
```

---

## 1️⃣6️⃣ Data-Driven Testing

```ts
const users = [
  { user: "admin", pass: "1234" },
  { user: "guest", pass: "5678" },
];

for (const data of users) {
  test(`login test for ${data.user}`, async ({ page }) => {
    await page.goto("/login");
    await page.fill("#username", data.user);
    await page.fill("#password", data.pass);
    await page.click("#login");
  });
}
```

---

## 1️⃣7️⃣ File Upload & Downloads

```ts
await page.setInputFiles("#upload", "resume.pdf");

const download = await Promise.all([
  page.waitForEvent("download"),
  page.click("#download"),
]);

const filePath = await download[0].path();
```

---

## 1️⃣8️⃣ Mobile & Responsive

```ts
test.use({ ...devices["iPhone 13"] });

test("mobile test", async ({ page }) => {
  await page.goto("https://example.com");
});
```

---

## 🔵 PHASE 3 — Advanced

---

## 1️⃣9️⃣ API Testing

```ts
test("API test", async ({ request }) => {
  const res = await request.post("/users", {
    data: { name: "John" },
  });
  expect(res.ok()).toBeTruthy();
});
```

---

## 2️⃣0️⃣ Network Interception & Mocking

```ts
await page.route("**/api/users", (route) =>
  route.fulfill({
    status: 200,
    body: JSON.stringify([{ id: 1, name: "Mock User" }]),
  }),
);
```

---

## 2️⃣1️⃣ Advanced Fixtures

```ts
import { test as base } from "@playwright/test";

const test = base.extend<{ adminPage }>({
  adminPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: "auth.json" });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});
```

---

## 2️⃣2️⃣ Parallel Execution & Scaling

```ts
export default defineConfig({
  workers: 4,
  fullyParallel: true,
});
```

```bash
npx playwright test --workers=4
```

---

## 2️⃣3️⃣ Debugging

```bash
npx playwright test --debug
PWDEBUG=1 npx playwright test
```

```ts
await page.pause();
```

---

## 2️⃣4️⃣ Reporting

```bash
npx playwright test --reporter=html
npx playwright show-report
```

```ts
reporter: [["html"], ["junit", { outputFile: "results.xml" }]];
```

---

## 2️⃣5️⃣ Accessibility Testing

```ts
await expect(page.getByRole("button", { name: "Submit" })).toBeEnabled();
await expect(page.getByRole("textbox", { name: "Email" })).toHaveAccessibleName(
  "Email",
);
```

(Axe integration optional)

---

## 2️⃣6️⃣ Visual Regression

```ts
await expect(page).toHaveScreenshot("homepage.png");
```

---

## 2️⃣7️⃣ Performance Testing

```ts
const timing = await page.evaluate(
  () => performance.timing.loadEventEnd - performance.timing.navigationStart,
);
console.log("Load time:", timing);
```

---

## 🔴 PHASE 4 — Enterprise / Production

---

## 2️⃣8️⃣ CI/CD (GitHub Actions)

```yaml
name: Playwright Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 2️⃣9️⃣ Environment & Secrets

```bash
npm install dotenv
```

```ts
import "dotenv/config";

const baseURL = process.env.BASE_URL;
```

---

## 3️⃣0️⃣ Framework Architecture Best Practices

```
tests/
  auth/
  e2e/
pages/
fixtures/
utils/
data/
reports/
```

---

## 3️⃣1️⃣ Migration (Cypress → Playwright)

```ts
// Cypress
cy.get("#btn").click();

// Playwright
await page.locator("#btn").click();
```

---

## 3️⃣2️⃣ Real-World Patterns

```ts
test("admin user flow", async ({ page }) => {
  await page.goto("/admin");
  await page.getByRole("button", { name: "Approve" }).click();
});
```

---

## 3️⃣3️⃣ Interview-Level Example

```ts
test("retry-safe login", async ({ page }) => {
  await page.goto("/login");
  await page.fill("#user", "admin");
  await page.fill("#pass", "1234");
  await Promise.all([page.waitForNavigation(), page.click("#login")]);
  await expect(page).toHaveURL(/dashboard/);
});
```

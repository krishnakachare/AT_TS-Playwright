### ✅ **1. UI Mode (`--ui`) – Visual Test Runner**

- Lets you run, debug, filter, and re-run tests visually.
- Shows test steps, traces, screenshots, and network calls.
- Great for faster debugging.

```bash
npx playwright test --ui
```

---

### ✅ **2. Test Generator (`codegen`) Improvements**

- Records real user actions and generates clean test code.
- Supports assertions and better locator generation.

```bash
npx playwright codegen https://example.com
```

---

### ✅ **3. Auto-waiting & Web-First Assertions**

- Playwright waits automatically for elements to be actionable.
- Assertions retry until timeout → fewer flaky tests.

```ts
await expect(page.locator("#login")).toBeVisible();
```

---

### ✅ **4. Trace Viewer Enhancements**

- Records video, screenshots, DOM snapshots, network logs.
- Lets you replay entire test execution step-by-step.

```ts
use: {
  trace: "on-first-retry";
}
```

---

### ✅ **5. Native API Testing (`request.newContext`)**

- You can test REST APIs without Postman or Axios.
- Supports auth, cookies, headers.

```ts
const response = await request.get("/users");
```

---

### ✅ **6. Improved Locators (`getByRole`, `getByLabel`, etc.)**

- Encourages accessibility-first testing.
- More stable than CSS/XPath.

```ts
page.getByRole("button", { name: "Login" });
```

---

### ✅ **7. Parallel Execution & Sharding**

- Tests run faster using workers.
- Can shard tests across CI machines.

```bash
npx playwright test --shard=1/3
```

---

### ✅ **8. Component Testing Support**

- Test React, Vue, Angular components in isolation.
- Faster than full E2E for UI logic.

---

### ✅ **9. Better Mobile & Device Emulation**

- Built-in devices for iPhone, Pixel, iPad.
- Supports geolocation, permissions, network throttling.

---

### ✅ **10. Built-in HTML Reports with Attachments**

- Includes screenshots, videos, traces, logs.

```bash
npx playwright show-report
```

---

## 🎯 Interview-Ready Short Answer (You can say this):

> _“Recent Playwright versions added powerful features like UI Mode for visual debugging, improved trace viewer with full execution replay, API testing support, accessibility-first locators like getByRole, component testing, and advanced parallel execution with sharding — all aimed at reducing flaky tests and speeding up debugging and CI execution.”_

---

## ✅ How Playwright Handles “Self-Healing” (Practically)

### 🔹 1. **Auto-retrying Locators**

Playwright automatically retries locating elements until timeout instead of failing immediately.

```ts
await page.getByRole("button", { name: "Login" }).click();
```

If DOM changes slightly → Playwright still waits and finds it.

---

### 🔹 2. **Resilient Locators (Role, Label, Text)**

These survive UI changes better than CSS/XPath.

```ts
page.getByLabel("Email");
page.getByRole("textbox", { name: "Username" });
```

---

### 🔹 3. **Web-first Assertions**

Assertions auto-wait and retry.

```ts
await expect(locator).toHaveText("Success");
```

---

### 🔹 4. **Auto-wait for Actionability**

Playwright waits for:
✔ Visible
✔ Enabled
✔ Stable
✔ Attached to DOM

Before acting.

---

## 🎯 Interview-Ready Answer:

> _“Playwright doesn’t provide true AI-based self-healing, but it achieves practical self-healing through auto-waiting, retryable locators, accessibility-based selectors, and web-first assertions, which significantly reduce flaky failures when UI changes slightly.”_

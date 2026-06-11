## ✅ What is **Browser Isolation** in Playwright?

**Browser isolation** means running tests or users in **separate sessions** so that:

- Cookies
- LocalStorage / SessionStorage
- Cache
- Login state

are **not shared** between them.

In Playwright, this isolation is achieved using **`browserContext`** (like incognito windows), not by launching separate browsers.

---

## 🎯 Why Browser Isolation is Important

- To test **multiple users simultaneously**
- To avoid **test flakiness** due to shared state
- To simulate **real-world scenarios** (admin + customer, buyer + seller)

---

## ✅ Simple Example: Two Isolated Users

```ts
import { test, chromium, expect } from "@playwright/test";

test("browser isolation example", async () => {
  const browser = await chromium.launch();

  // User 1 session
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://example.com/login");
  await page1.fill("#username", "user1");
  await page1.fill("#password", "pass1");
  await page1.click("#login");

  // User 2 session (isolated)
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://example.com");

  // User 2 is NOT logged in
  await expect(page2.locator("#login")).toBeVisible();

  await browser.close();
});
```

---

## 🔑 What’s Happening Here

| Item            | User 1        | User 2 |
| --------------- | ------------- | ------ |
| Cookies         | ❌ Not shared |        |
| Login session   | ❌ Not shared |        |
| LocalStorage    | ❌ Not shared |        |
| Browser process | ✅ Same       |        |

Both users run in the **same browser**, but in **different isolated contexts**.

---

## 🧠 Interview One-liner

> Browser isolation in Playwright is achieved using `browserContext`, which creates independent user sessions similar to incognito windows, allowing safe parallel and multi-user testing.

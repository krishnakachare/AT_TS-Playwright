Excellent — this is a **core Playwright interview area**, and your background in Cypress + automation will benefit here. Below is a **complete, structured, interview-ready Q&A pack** covering:

✅ `browser`
✅ `browserContext`
✅ `page`
✅ Differences
✅ Multiple browsers
✅ Multiple tabs/windows
✅ Real-world scenarios
✅ Follow-up trick questions

---

# 🔹 1. Core Concepts

## ✅ Q1. What is a `browser` in Playwright?

**Answer:**
A `browser` represents a real browser instance like Chromium, Firefox, or WebKit. It is the top-level object that launches the browser process and manages browser contexts.

```ts
const browser = await chromium.launch();
```

---

## ✅ Q2. What is a `browserContext` in Playwright?

**Answer:**
A `browserContext` is an **isolated browser session** inside a browser. Each context has its own cookies, cache, localStorage, and session data — similar to an incognito window.

```ts
const context = await browser.newContext();
```

---

## ✅ Q3. What is a `page` in Playwright?

**Answer:**
A `page` represents a **single tab or window** inside a browser context. All UI interactions (click, fill, navigation) happen on a page.

```ts
const page = await context.newPage();
```

---

## 🔥 2. Relationship Between Browser, Context, and Page

## ✅ Q4. Explain the hierarchy: browser → context → page.

**Answer:**

```
Browser (Chromium)
 ├── Context 1 (User session A)
 │     ├── Page 1 (Tab)
 │     └── Page 2 (Popup)
 └── Context 2 (User session B)
       └── Page 1 (Tab)
```

- Browser = actual browser process
- Context = isolated session
- Page = tab/window

---

## 🔥 3. Difference Questions (Very Common)

## ✅ Q5. Difference between `browserContext` and `page`?

| Feature           | browserContext  | page                   |
| ----------------- | --------------- | ---------------------- |
| Represents        | Browser session | Tab/window             |
| Storage isolation | Yes             | No                     |
| Cookies/cache     | Stored here     | Inherited              |
| Can create        | Pages           | Cannot create contexts |
| Parallel users    | Yes             | No                     |

---

## ✅ Q6. Difference between `browser` and `browserContext`?

| Feature          | browser                   | browserContext         |
| ---------------- | ------------------------- | ---------------------- |
| Level            | Top-level browser process | Session inside browser |
| Isolation        | No                        | Yes                    |
| Resource heavy   | Yes                       | No                     |
| Parallel testing | Limited                   | Best approach          |

---

## 🔥 4. Multiple Browser Handling

## ✅ Q7. How do you run tests in multiple browsers in Playwright?

**Answer:**
Using projects in `playwright.config.ts`.

```ts
projects: [
  { name: "chromium", use: { browserName: "chromium" } },
  { name: "firefox", use: { browserName: "firefox" } },
  { name: "webkit", use: { browserName: "webkit" } },
];
```

---

## ✅ Q8. What happens internally when tests run in multiple browsers?

**Answer:**

- Playwright launches **separate browser processes**
- Each browser has its own contexts and pages
- Tests execute independently and in parallel

---

## 🔥 5. Multiple Tabs / Windows Handling

## ✅ Q9. How do you handle multiple tabs in Playwright?

**Answer:**
By listening for `page` events on the browser context.

```ts
const [newPage] = await Promise.all([
  context.waitForEvent("page"),
  page.click("#openTab"),
]);

await newPage.waitForLoadState();
```

---

## ✅ Q10. Difference between new tab and new window in Playwright?

**Answer:**
There is **no technical difference** — both are represented as a new `page` object.

---

## 🔥 6. Multiple Context Handling (Multi-user Testing)

## ✅ Q11. How do you simulate two users logged in at the same time?

**Answer:**
Using two browser contexts.

```ts
const user1 = await browser.newContext();
const user2 = await browser.newContext();
```

Each user has isolated cookies and sessions.

---

## ✅ Q12. Why not open two pages in same context for multi-user testing?

**Answer:**
Because both pages would share cookies and session data, making them behave as the same user.

---

## 🔥 7. Advanced / Real-World Scenario Questions

## ✅ Q13. What is the advantage of using `browserContext` instead of launching multiple browsers?

**Answer:**
Contexts are lightweight, faster, and memory-efficient compared to launching full browser instances.

---

## ✅ Q14. What happens if you close a `browserContext`?

**Answer:**
All pages inside that context are closed and session data is cleared.

---

## ✅ Q15. What happens if you close a `browser`?

**Answer:**
All contexts and pages are closed immediately.

---

## 🔥 8. Popup, Child Window, and Auth Flows

## ✅ Q16. How do you handle a popup window in Playwright?

```ts
const [popup] = await Promise.all([
  page.waitForEvent("popup"),
  page.click("#openPopup"),
]);
```

---

## ✅ Q17. How do you handle OAuth login in a new window?

**Answer:**
Wait for popup, complete login on popup page, then return to main page.

---

## 🔥 9. Storage, Cookies, and Auth Reuse

## ✅ Q18. Where are cookies and localStorage stored?

**Answer:**
Inside the **browserContext**, not the page or browser directly.

---

## ✅ Q19. How can you reuse login state across tests?

**Answer:**
Using `storageState`.

```ts
await context.storageState({ path: "auth.json" });
```

---

## 🔥 10. Parallel Execution and Isolation

## ✅ Q20. Why does Playwright recommend using one context per test?

**Answer:**
To ensure full isolation and avoid flaky tests caused by shared state.

---

## ✅ Q21. Can two tests share the same browser context?

**Answer:**
Yes, but it’s discouraged unless using `test.describe.serial()` or controlled flows.

---

## 🔥 11. Trick / Deep Interview Questions

## ✅ Q22. What happens if two pages exist in same context?

**Answer:**
They share:

- Cookies
- SessionStorage
- LocalStorage
- Cache

But DOM and UI remain independent.

---

## ✅ Q23. What happens if two contexts exist in same browser?

**Answer:**
They are fully isolated — like two incognito windows.

---

## ✅ Q24. Which is heavier: new page or new context?

**Answer:**
New context is heavier than new page, but much lighter than launching a new browser.

---

## ✅ Q25. Which is best for:

- Multi-user testing → **Contexts**
- Multi-tab workflow → **Pages**
- Cross-browser testing → **Browsers**

---

## 🔥 12. Real Coding Questions Interviewers Ask

### ✅ Open new tab and switch to it

```ts
const [tab] = await Promise.all([
  context.waitForEvent("page"),
  page.click("#openTab"),
]);
await tab.bringToFront();
```

---

### ✅ Open two users in same test

```ts
const user1 = await browser.newContext();
const user2 = await browser.newContext();
```

---

### ✅ Close all tabs of a user

```ts
await context.close();
```

---

### ✅ Get all open tabs

```ts
const pages = context.pages();
```

---

## 🔥 13. Cypress vs Playwright (Interview Favorite)

| Feature          | Cypress          | Playwright        |
| ---------------- | ---------------- | ----------------- |
| Multiple tabs    | ❌ Not supported | ✅ Native support |
| Browser contexts | ❌ No            | ✅ Yes            |
| Multi-user       | Hard             | Easy              |
| True isolation   | Limited          | Strong            |

---

# 🎯 Final Interview Summary (One-Liners)

- **Browser** = Actual browser process
- **Context** = Isolated user session (incognito)
- **Page** = Tab/window
- **Multi-user testing** = Multiple contexts
- **Multi-tab handling** = Multiple pages
- **Best practice** = One context per test

# 🎯 Playwright Trace Viewer — Interview Questions & Answers

---

## ✅ 1. What is Trace Viewer in Playwright?

**Answer:**
Trace Viewer is a built-in debugging tool in Playwright that records everything during a test run — including DOM snapshots, screenshots, network calls, console logs, and each test step — allowing time-travel debugging of failures, especially in CI.

---

## ✅ 2. Why is Trace Viewer useful for flaky test debugging?

**Answer:**
It allows replaying test execution step-by-step without rerunning tests, helping identify timing issues, element instability, race conditions, and backend failures that cause flakiness.

---

## ✅ 3. What all data does Playwright capture in Trace Viewer?

**Answer:**

* DOM snapshots
* Screenshots
* Network requests/responses
* Console logs
* Test steps timeline
* Source code references

---

## ✅ 4. How do you enable Trace Viewer in Playwright Test config?

**Answer:**

```ts
use: {
  trace: 'on-first-retry'
}
```

This records trace only when a test fails and retries.

---

## ✅ 5. How do you manually start and stop tracing?

**Answer:**

```ts
await context.tracing.start({
  screenshots: true,
  snapshots: true,
  sources: true,
});

await page.goto('https://example.com');
await context.tracing.stop({ path: 'trace.zip' });
```

---

## ✅ 6. How do you open and view a trace file?

**Answer:**

```bash
npx playwright show-trace trace.zip
```

It opens an interactive Trace Viewer UI in the browser.

---

## ✅ 7. How is Trace Viewer better than screenshots and videos alone?

**Answer:**
Screenshots and videos show only visuals, but Trace Viewer provides:

* DOM state inspection
* Network debugging
* Console logs
* Step-by-step navigation
  This makes root-cause analysis much faster.

---

## ✅ 8. Can Trace Viewer be used in CI pipelines?

**Answer:**
Yes. Playwright automatically uploads trace.zip artifacts in CI, allowing teams to debug failed tests locally without rerunning pipelines.

---

## ✅ 9. What is time-travel debugging in Playwright?

**Answer:**
Time-travel debugging means moving backward and forward through each test action while inspecting DOM, network, and state at that exact moment using Trace Viewer.

---

## ✅ 10. What are the trace recording modes?

**Answer:**

| Mode                | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| `on`                | Record trace for every test                             |
| `off`               | Disable tracing                                         |
| `on-first-retry`    | Record only when test fails and retries (best practice) |
| `retain-on-failure` | Save trace only for failed tests                        |

---

## ✅ 11. How does Trace Viewer help in debugging API failures?

**Answer:**
It shows failed network requests, response payloads, status codes, headers, and timing — making backend issue detection easier.

---

## ✅ 12. Can we share trace files with teammates?

**Answer:**
Yes. Trace Viewer generates a portable `trace.zip` file that can be shared and opened on any machine using Playwright CLI.

---

## ✅ 13. How does Trace Viewer reduce test flakiness?

**Answer:**
By exposing race conditions, delayed renders, missing waits, unstable locators, and backend timeouts — allowing precise fixes instead of guesswork.

---

## ✅ 14. Difference between Trace Viewer and Playwright Inspector?

| Feature       | Trace Viewer         | Inspector             |
| ------------- | -------------------- | --------------------- |
| Usage         | After test execution | During live debugging |
| Time travel   | ✅ Yes                | ❌ No                  |
| CI debugging  | ✅ Yes                | ❌ No                  |
| DOM snapshots | ✅ Yes                | ❌ Limited             |

---

## ✅ 15. Can you explain Trace Viewer in one line (interview gold)?

> *“Playwright Trace Viewer is a time-travel debugging tool that captures full test execution — DOM, network, screenshots, and logs — enabling fast root-cause analysis of flaky failures without rerunning tests.”*

---

## ✅ 16. Real-world scenario question

**Q:** Your test passes locally but fails in CI randomly. How do you debug?

**Answer:**
I enable `trace: 'on-first-retry'`, collect the trace.zip from CI artifacts, replay the failure locally in Trace Viewer, inspect DOM/network timing, and fix waits or locator instability.

---

## ✅ 17. What is the best practice for using Trace Viewer in large projects?

**Answer:**
Use:

```ts
use: { trace: 'on-first-retry' }
```

This avoids heavy storage while still capturing failure context.

---

## ✅ 18. Does Trace Viewer replace videos and screenshots?

**Answer:**
No — it complements them. Trace Viewer includes screenshots and videos but also adds DOM snapshots, logs, and network inspection for deeper debugging.

---

## ✅ 19. How is Trace Viewer better than Selenium logs?

**Answer:**
Unlike Selenium logs, Playwright Trace Viewer provides visual replay, DOM inspection, step-level navigation, and network analysis — drastically reducing debugging time.

---

## ✅ 20. Advanced interview question

**Q:** What happens internally when Trace Viewer records a test?

**Answer:**
Playwright captures snapshots of the DOM, network traffic, screenshots, and execution metadata after every action and serializes them into a compressed trace file for replay.

---

# 🏆 30-Second Interview Summary (Memorize This)

> *“Playwright Trace Viewer is one of its most powerful features. It records full test execution — DOM snapshots, screenshots, network calls, console logs, and step timelines — and enables time-travel debugging. It’s especially useful in CI for investigating flaky failures without rerunning tests. I typically use `trace: 'on-first-retry'` for performance and storage optimization.”*



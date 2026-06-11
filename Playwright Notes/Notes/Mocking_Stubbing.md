## ✅ 1️⃣ Mocking

👉 **What it is:**
A mock simulates a real dependency and also **verifies interactions** — like whether a method was called, how many times, and with what arguments.

👉 **Used for:**
Behavior verification

👉 **Example:**
Mocking a payment service to verify it was called with the correct amount.

```js
expect(paymentService.charge).toHaveBeenCalledWith(1000);
```

✅ You test _how_ the system interacts with the dependency.

---

## ✅ 2️⃣ Stubbing

👉 **What it is:**
A stub returns **predefined responses** but does not verify interactions.

👉 **Used for:**
Controlling test data and system behavior

👉 **Example:**
Stub payment API to always return success or failure.

```json
{ "status": "success" }
```

✅ You test _how your system behaves_ based on the response.

---

## ✅ 3️⃣ Faking

👉 **What it is:**
A fake is a **lightweight working implementation**, often in-memory, used instead of the real component.

👉 **Used for:**
Integration-style testing

👉 **Example:**
Using an in-memory database instead of real DB.

✅ You test with a realistic but simplified dependency.

---

## 🎯 Interview One-Line Summary

> **Mocking** verifies interactions, **stubbing** controls responses, and **faking** replaces real systems with lightweight working versions.

---

## 🔥 Real QA Automation Example (Playwright/API)

| Scenario                                         | Use  |
| ------------------------------------------------ | ---- |
| Validate payment API called with correct payload | Mock |
| Force payment failure/success response           | Stub |
| Use in-memory DB or test server                  | Fake |

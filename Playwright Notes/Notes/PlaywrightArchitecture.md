### **Playwright Architecture – Brief Explanation**

Playwright is a **Node.js library** for browser automation that supports **Chromium, Firefox, and WebKit**. Its architecture is designed to provide **cross-browser testing, speed, and reliability**.

#### **Key Components:**

1. **Test Scripts (User Code)**

   * Written in **JavaScript, TypeScript, Python, C#, or Java**.
   * Uses Playwright API like `page.goto()`, `page.click()`, `page.fill()` to interact with the browser.

2. **Playwright Client**

   * Acts as a **bridge** between your test script and the browser.
   * Sends commands from your code to the **browser driver** using WebSocket or native APIs.

3. **Browser Driver**

   * Each browser has its own driver:

     * Chromium → Chrome/Edge
     * WebKit → Safari
     * Firefox → Firefox
   * Playwright launches these browsers in **headless or headed mode**.

4. **Browser Process**

   * The actual browser instance that executes your commands.
   * Can run **multiple browser contexts** (like incognito sessions) for parallel testing.
   * Isolated sessions prevent **state leakage** between tests.

5. **Playwright Test Runner**

   * Optional, but provides **test orchestration**, **reporting**, **parallel execution**, and **hooks** (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`).

---

### **Workflow / Flow**

1. Test script → 2. Playwright client → 3. Browser driver → 4. Browser → 5. Return response/results

---

### **Diagram**

```
+-------------------+
|   Test Script     |  <-- Your code: page.goto(), page.click()
+-------------------+
           |
           v
+-------------------+
|  Playwright Client|
|  (Node.js API)    |
+-------------------+
           |
           v
+-------------------+
|  Browser Driver   |  <-- Chrome, Firefox, WebKit drivers
+-------------------+
           |
           v
+-------------------+
|  Browser Process  |  <-- Actual browser running the commands
|  (Multiple Contexts)|
+-------------------+
```

✅ **Key Highlights**

* Can run tests in **headless or headed mode**.
* Supports **parallel execution** using multiple contexts.
* Works **cross-browser** without changing your code.
* Provides **network interception**, **screenshot**, and **video recording** capabilities.
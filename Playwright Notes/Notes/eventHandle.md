Here’s a **clear and interview-friendly answer** about handling events in **Playwright**.

---

# ✅ 1. How to Handle DOM Content Loading Event

Playwright provides multiple ways to wait for page load states.

### 🔹 Wait for `domcontentloaded`

```ts
await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
```

OR

```ts
await page.waitForLoadState("domcontentloaded");
```

📌 **What it means:**

- HTML is fully loaded and parsed
- External resources (images, CSS) may NOT be loaded yet

---

# ✅ 2. How to Handle Download Event

Playwright provides a `download` event listener.

```ts
const [download] = await Promise.all([
  page.waitForEvent("download"),
  page.click("#downloadBtn"),
]);

const path = await download.path();
console.log(path);
```

📌 **What it does:**

- Waits for download to start
- Allows you to save file

Example:

```ts
await download.saveAs("myfile.pdf");
```

---

# ✅ 3. Other Important Events in Playwright

Here are commonly used events:

---

## 🔹 Page Load Events

| Event              | Description                            |
| ------------------ | -------------------------------------- |
| `load`             | Full page loaded (HTML + CSS + images) |
| `domcontentloaded` | DOM ready                              |
| `networkidle`      | No network requests for 500ms          |

Example:

```ts
await page.waitForLoadState("networkidle");
```

---

## 🔹 Dialog Event (Alert / Confirm / Prompt)

```ts
page.on("dialog", async (dialog) => {
  console.log(dialog.message());
  await dialog.accept(); // or dialog.dismiss();
});
```

Used for:

- `alert()`
- `confirm()`
- `prompt()`

---

## 🔹 Request Event (API Monitoring)

```ts
page.on("request", (request) => {
  console.log(request.url());
});
```

---

## 🔹 Response Event

```ts
page.on("response", (response) => {
  console.log(response.status());
});
```

---

## 🔹 Console Event (Browser Console Logs)

```ts
page.on("console", (msg) => {
  console.log(msg.text());
});
```

---

## 🔹 Frame Navigation Event

```ts
page.on("framenavigated", (frame) => {
  console.log(frame.url());
});
```

---

## 🔹 Popup Event (New Tab)

```ts
const [popup] = await Promise.all([
  page.waitForEvent("popup"),
  page.click("#openWindow"),
]);
```

---

## 🔹 File Chooser Event

```ts
const [fileChooser] = await Promise.all([
  page.waitForEvent("filechooser"),
  page.click("#uploadBtn"),
]);

await fileChooser.setFiles("test.png");
```

---

# ✅ Types of Event Handling Methods in Playwright

### 1️⃣ `page.waitForEvent()`

Used when action triggers event.

### 2️⃣ `page.on()`

Used to listen continuously.

### 3️⃣ `page.once()`

Listen only one time.

---

# 🎯 Interview Summary Answer (Short Version)

> In Playwright, DOM loading events can be handled using `waitForLoadState('domcontentloaded')`. Download events are handled using `page.waitForEvent('download')`. Other important events include dialog, request, response, console, popup, filechooser, and networkidle. Events can be handled using `page.on()`, `page.once()`, and `page.waitForEvent()` depending on the use case.

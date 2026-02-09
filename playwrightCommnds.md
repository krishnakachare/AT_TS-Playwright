# ✅ Playwright CLI Commands — Full Reference

## 🔹 1️⃣ Installation & Setup

| Command                              | Use                                |
| ------------------------------------ | ---------------------------------- |
| `npm init playwright@latest`         | Create new Playwright project      |
| `npm install @playwright/test`       | Install Playwright manually        |
| `npx playwright install`             | Install required browsers          |
| `npx playwright install chromium`    | Install only Chromium              |
| `npx playwright install firefox`     | Install Firefox                    |
| `npx playwright install webkit`      | Install WebKit                     |
| `npx playwright install --with-deps` | Install OS dependencies (Linux CI) |
| `npx playwright --version`           | Check Playwright version           |
| `npx playwright doctor`              | Diagnose environment issues        |

---

## 🔹 2️⃣ Running Tests (Headless / Headed)

| Command                                    | Use                              |
| ------------------------------------------ | -------------------------------- |
| `npx playwright test`                      | Run all tests (headless default) |
| `npx playwright test --headed`             | Run with visible browser         |
| `npx playwright test --browser=chromium`   | Run only Chromium                |
| `npx playwright test --browser=firefox`    | Run only Firefox                 |
| `npx playwright test --browser=webkit`     | Run only WebKit                  |
| `npx playwright test tests/login.spec.ts`  | Run single test file             |
| `npx playwright test tests/auth/*.spec.ts` | Run by pattern                   |
| `npx playwright test --grep "login"`       | Run matching test titles         |
| `npx playwright test --grep-invert "slow"` | Exclude tests                    |
| `npx playwright test --project=chromium`   | Run named project                |
| `npx playwright test --ui`                 | Open Playwright Test UI          |

---

## 🔹 3️⃣ Debugging & Development

| Command                                         | Use                             |
| ----------------------------------------------- | ------------------------------- |
| `npx playwright test --debug`                   | Run tests in debug mode         |
| `npx playwright codegen`                        | Generate test code via recorder |
| `npx playwright codegen https://example.com`    | Record tests for a site         |
| `npx playwright show-report`                    | Open last HTML report           |
| `npx playwright test --trace on`                | Capture trace for every test    |
| `npx playwright test --trace retain-on-failure` | Trace only on failure           |
| `npx playwright test --slow-mo 100`             | Slow down actions               |

---

## 🔹 4️⃣ Parallelism, Sharding & Performance

| Command                                | Use                            |
| -------------------------------------- | ------------------------------ |
| `npx playwright test --workers=4`      | Run with 4 parallel workers    |
| `npx playwright test --workers=1`      | Disable parallel execution     |
| `npx playwright test --shard=1/3`      | Run shard 1 of 3               |
| `npx playwright test --shard=2/3`      | Run shard 2 of 3               |
| `npx playwright test --fully-parallel` | Parallelize tests in same file |
| `npx playwright test --retries=2`      | Retry failed tests             |
| `npx playwright test --timeout=60000`  | Set test timeout               |

---

## 🔹 5️⃣ Environment Variables & Configuration

| Command                                                   | Use                                   |
| --------------------------------------------------------- | ------------------------------------- |
| `BASE_URL=https://qa.app.com npx playwright test`         | Set env variable (Linux/macOS)        |
| `$env:BASE_URL="https://qa.app.com"; npx playwright test` | Set env variable (Windows PowerShell) |
| `npx playwright test --config=playwright.config.ts`       | Use specific config file              |
| `npx playwright test --project=chrome`                    | Use named project config              |
| `npx playwright test --output=test-results`               | Custom output directory               |

---

## 🔹 6️⃣ Reports, Traces, Videos & Screenshots

| Command                                | Use                     |
| -------------------------------------- | ----------------------- |
| `npx playwright show-report`           | Open last HTML report   |
| `npx playwright test --reporter=html`  | Generate HTML report    |
| `npx playwright test --reporter=line`  | Console-friendly report |
| `npx playwright test --reporter=junit` | Generate XML for CI     |
| `npx playwright test --trace on`       | Enable tracing          |
| `npx playwright test --video on`       | Record videos           |
| `npx playwright test --screenshot on`  | Capture screenshots     |

---

## 🔹 7️⃣ CI/CD & Headless Execution

| Command                                             | Use                      |
| --------------------------------------------------- | ------------------------ |
| `npx playwright test --reporter=html --trace on`    | CI-friendly run          |
| `npx playwright test --workers=2 --retries=2`       | Stable CI execution      |
| `npx playwright test --project=chromium --headless` | Force headless           |
| `npx playwright test --shard=1/4`                   | Distributed CI execution |
| `npx playwright install --with-deps`                | Required in Linux CI     |

---

## 🔹 8️⃣ Browser & Device Emulation

| Command                                          | Use                    |
| ------------------------------------------------ | ---------------------- |
| `npx playwright test --project="Desktop Chrome"` | Desktop Chrome profile |
| `npx playwright test --project="iPhone 14"`      | Mobile emulation       |
| `npx playwright codegen --device="Pixel 7"`      | Record mobile tests    |
| `npx playwright test --project="Tablet Safari"`  | Tablet testing         |

---

## 🔹 9️⃣ Test Selection & Tagging

| Command                                    | Use                  |
| ------------------------------------------ | -------------------- |
| `npx playwright test --grep @smoke`        | Run tagged tests     |
| `npx playwright test --grep-invert @slow`  | Exclude tagged tests |
| `npx playwright test tests/login.spec.ts`  | Run specific file    |
| `npx playwright test tests/auth/*.spec.ts` | Run folder           |

---

## 🔹 🔟 Maintenance & Utilities

| Command                      | Use                       |
| ---------------------------- | ------------------------- |
| `npx playwright doctor`      | Check installation health |
| `npx playwright install`     | Install/update browsers   |
| `npx playwright uninstall`   | Remove browsers           |
| `npx playwright help`        | Show help                 |
| `npx playwright test --help` | Test command help         |

---

# 🎯 MOST USED PLAYWRIGHT COMMANDS (MEMORIZE)

```bash
npx playwright test
npx playwright test --headed
npx playwright test --debug
npx playwright codegen
npx playwright show-report
npx playwright test --workers=4
npx playwright test --retries=2
npx playwright test --shard=1/3
```

---

# 🧠 Interview One-Liner

> I use Playwright CLI to execute tests in headless mode for CI, run parallel workers, shard tests across agents, capture traces and videos on failure, and generate HTML/JUnit reports for pipeline visibility.

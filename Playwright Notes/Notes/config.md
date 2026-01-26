# Playwright Configuration File Explanation

Let me break down your playwright.config.js file with all its options and other available configurations:

## **Current Configuration Options**

### **1. testDir**
```javascript
testDir: './tests',
```
- Specifies the folder where Playwright looks for test files
- Defaults to `./tests`
- Can use glob patterns like `'./tests/**/*.spec.js'`

### **2. fullyParallel**
```javascript
fullyParallel: true,
```
- Runs all test files in parallel simultaneously
- Default is `false` (runs test files sequentially, but tests within a file run in parallel)
- Useful for faster test execution when tests are independent

### **3. forbidOnly**
```javascript
forbidOnly: !!process.env.CI,
```
- Prevents `.only` in tests (skips other tests) from running in CI environment
- Ensures all tests run in CI pipeline
- Converts `process.env.CI` to boolean (!! is a double negation trick)

### **4. retries**
```javascript
retries: process.env.CI ? 2 : 0,
```
- Retries failed tests 2 times in CI, 0 times locally
- Useful for flaky tests in CI environments
- Default is `0` (no retries)

### **5. workers**
```javascript
workers: process.env.CI ? 1 : undefined,
```
- Sets number of parallel worker processes
- CI: 1 worker (sequential execution - safer for CI)
- Local: `undefined` (auto-detects based on CPU cores)
- Default is `undefined`

### **6. reporter**
```javascript
reporter: 'html',
```
- Generates HTML test report
- Report location: `playwright-report/index.html`
- Other options: `'list'`, `'dot'`, `'json'`, `'junit'`, `'github'`, `[[name, options]]`

### **7. use (Global Options)**
```javascript
use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
    headless: true,
},
```
- **baseURL**: Base URL for all requests (navigate to `/login` → `http://127.0.0.1:3000/login`)
- **trace**: Records video/screenshots on failure (`'on-first-retry'` or `'always'` or `'off'`)
- **headless**: Run without UI (`true` = headless, `false` = visible browser)

### **8. projects (Browser Configurations)**
```javascript
projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
],
```
- Runs tests across multiple browsers
- Spreads predefined device settings (viewport, user agent, etc.)
- You can run: `npx playwright test --project=chromium`

### **9. webServer**
```javascript
webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
},
```
- Auto-starts dev server before running tests
- Waits for URL to be available
- **reuseExistingServer**: Reuses running server locally, restarts in CI

---

## **Test Configuration Options (Top-Level)**

### **Timeouts**
```javascript
timeout: 30000,              // Individual test timeout in ms (default: 30000)
globalTimeout: 600000,       // Total test suite timeout in ms (default: 30 minutes)
expect: {
    timeout: 5000            // Assertion/expect timeout in ms (default: 5000)
}
```

### **Test Filtering**
```javascript
testIgnore: '**/node_modules/**',  // Patterns to ignore test files
testMatch: '**/*.spec.js',         // Patterns to include test files
```

### **Output & Artifacts**
```javascript
outputDir: './test-results',  // Directory for screenshots, videos, traces
snapshotDir: './snapshots',   // Directory for snapshot files
snapshotPathTemplate: '{dir}/{testFileDir}/{testFileName}-{platform}{ext}',
```

### **Global Setup & Teardown**
```javascript
globalSetup: require.resolve('./global-setup.ts'),
globalTeardown: require.resolve('./global-teardown.ts'),
```

### **Metadata**
```javascript
metadata: { version: '1.0', environment: 'test' },
```

---

## **Use Options (Browser/Page Context Options)**

### **Screenshots & Videos**
```javascript
use: {
    screenshot: 'only-on-failure',  // 'on', 'off', 'only-on-failure'
    screenshotDir: './screenshots',
    video: 'retain-on-failure',      // 'on', 'off', 'retain-on-failure'
    videoDir: './videos',
}
```

### **Timeouts in Context**
```javascript
use: {
    actionTimeout: 10000,       // Timeout for individual actions
    navigationTimeout: 30000,   // Timeout for page navigation
    launchTimeout: 30000,       // Timeout for browser launch
}
```

### **Locators & Element Selection**
```javascript
use: {
    testIdAttribute: 'data-testid',  // Attribute to use for locating elements by test ID
}
```

### **Tracing & Debugging**
```javascript
use: {
    trace: 'on-first-retry',         // 'on', 'off', 'on-first-retry'
    traceDir: './traces',
}
```

### **Network & Cookies**
```javascript
use: {
    baseURL: 'http://127.0.0.1:3000',
    httpCredentials: {
        username: 'user',
        password: 'pass'
    },
    extraHTTPHeaders: {
        'Authorization': 'Bearer token'
    },
    offline: false,  // Simulate offline mode
    bypassCSP: true,
}
```

### **Browser & Device Emulation**
```javascript
use: {
    acceptDownloads: true,
    colorScheme: 'dark',           // 'light', 'dark', 'no-preference'
    deviceScaleFactor: 2,
    hasTouch: false,
    isMobile: false,
    javaScriptEnabled: true,
    locale: 'en-US',
    timezoneId: 'America/New_York',
    viewport: { width: 1280, height: 720 },
    userAgent: 'Custom User Agent',
    geolocation: { latitude: 37.7749, longitude: -122.4194 },
    permissions: ['camera', 'microphone'],
    reducedMotion: 'reduce',       // 'reduce', 'no-preference'
    forcedColors: 'none',          // 'none', 'active'
}
```

### **Authentication**
```javascript
use: {
    storageState: './auth.json',   // Save/load cookies and local storage
}
```

---

## **Complete Configuration Example**

```javascript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Test discovery
    testDir: './tests',
    testMatch: '**/*.spec.ts',
    testIgnore: '**/node_modules/**',
    
    // Parallelization
    fullyParallel: true,
    workers: process.env.CI ? 1 : undefined,
    
    // Retry & CI settings
    retries: process.env.CI ? 2 : 0,
    forbidOnly: !!process.env.CI,
    
    // Timeouts
    timeout: 30000,
    globalTimeout: 600000,
    
    // Output
    outputDir: './test-results',
    snapshotDir: './snapshots',
    
    // Reporting
    reporter: [
        ['html'],
        ['json', { outputFile: 'test-results.json' }],
        ['junit', { outputFile: 'junit.xml' }],
        ['list']
    ],
    
    // Expect options
    expect: {
        timeout: 5000,
        toHaveScreenshot: {
            maxDiffPixels: 100,
        },
        toMatchSnapshot: {
            maxDiffPixelRatio: 0.1,
        }
    },
    
    // Global setup/teardown
    globalSetup: require.resolve('./global-setup.ts'),
    globalTeardown: require.resolve('./global-teardown.ts'),
    
    // Shared use options
    use: {
        baseURL: 'http://127.0.0.1:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        headless: true,
        testIdAttribute: 'data-testid',
        actionTimeout: 10000,
        navigationTimeout: 30000,
    },
    
    // Web server
    webServer: {
        command: 'npm run start',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
    },
    
    // Projects (multi-browser)
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },
    ],
});
```

---

## **Complete Configuration Reference Table**

| Category | Option | Type | Default | Description |
|----------|--------|------|---------|-------------|
| **Discovery** | testDir | string | `'./tests'` | Directory containing test files |
| | testMatch | string/regex | `'**/*test*.js'` | Glob pattern for test files to include |
| | testIgnore | string/regex | `'**/node_modules/**'` | Glob pattern for test files to ignore |
| **Parallelization** | fullyParallel | boolean | `false` | Run all tests in parallel |
| | workers | number/string | `undefined` | Number of parallel workers (or CPU percentage) |
| **Retries & CI** | retries | number | `0` | Number of retries for failed tests |
| | forbidOnly | boolean | `false` | Fail if `test.only` is found |
| **Timeouts** | timeout | number | `30000` | Test timeout in milliseconds |
| | globalTimeout | number | `1800000` | Total suite timeout in milliseconds |
| | expect.timeout | number | `5000` | Assertion timeout in milliseconds |
| **Reporting** | reporter | string/array | `'list'` | Reporter format (`'html'`, `'json'`, `'junit'`, etc.) |
| **Output** | outputDir | string | `'test-results'` | Directory for artifacts |
| | snapshotDir | string | `'__snapshots__'` | Directory for snapshots |
| | snapshotPathTemplate | string | `'{dir}/{testFileDir}...'` | Snapshot file path template |
| **Setup/Teardown** | globalSetup | string | `undefined` | Global setup file path |
| | globalTeardown | string | `undefined` | Global teardown file path |
| **Web Server** | webServer.command | string | `undefined` | Command to start dev server |
| | webServer.url | string | `undefined` | URL to wait for server |
| | webServer.reuseExistingServer | boolean | `true` | Reuse running server |
| | webServer.timeout | number | `120000` | Server startup timeout |
| **Browser/Page (use)** | baseURL | string | `undefined` | Base URL for navigation |
| | testIdAttribute | string | `'data-testid'` | Attribute for test ID locators |
| | headless | boolean | `true` | Run browser in headless mode |
| | screenshot | string | `'off'` | Screenshot on failure (`'on'`, `'off'`, `'only-on-failure'`) |
| | screenshotDir | string | `undefined` | Screenshot directory |
| | video | string | `'off'` | Record video (`'on'`, `'off'`, `'retain-on-failure'`) |
| | videoDir | string | `undefined` | Video directory |
| | trace | string | `'off'` | Trace recording (`'on'`, `'off'`, `'on-first-retry'`) |
| | traceDir | string | `undefined` | Trace directory |
| | actionTimeout | number | `10000` | Action timeout in milliseconds |
| | navigationTimeout | number | `30000` | Navigation timeout in milliseconds |
| | launchTimeout | number | `30000` | Browser launch timeout |
| **Authentication** | storageState | string/object | `undefined` | Save/load auth cookies |
| | httpCredentials | object | `undefined` | HTTP Basic Auth credentials |
| | extraHTTPHeaders | object | `undefined` | Extra HTTP headers for requests |
| **Device Emulation** | viewport | object | `{ width: 1280, height: 720 }` | Viewport size |
| | deviceScaleFactor | number | `1` | Device scale factor |
| | isMobile | boolean | `false` | Emulate mobile device |
| | hasTouch | boolean | `false` | Enable touch events |
| | userAgent | string | `undefined` | Custom user agent |
| | locale | string | `'en-US'` | Locale for emulation |
| | timezoneId | string | `'America/Los_Angeles'` | Timezone ID |
| | geolocation | object | `undefined` | Geolocation coordinates |
| | permissions | array | `[]` | Browser permissions (`'camera'`, `'microphone'`) |
| | colorScheme | string | `'light'` | Color scheme (`'light'`, `'dark'`, `'no-preference'`) |
| | reducedMotion | string | `'no-preference'` | Reduced motion setting |
| | forcedColors | string | `'none'` | Forced colors mode |
| **Network** | offline | boolean | `false` | Simulate offline mode |
| | bypassCSP | boolean | `false` | Bypass Content Security Policy |
| | acceptDownloads | boolean | `true` | Accept download prompts |
| | javaScriptEnabled | boolean | `true` | Enable JavaScript |

---

## **Projects Configuration Reference**

```javascript
projects: [
    {
        name: 'chromium',              // Project name
        use: { ...devices['Desktop Chrome'] },
        testDir: './tests',            // Project-specific test dir
        testMatch: '**/*.spec.js',      // Project-specific test match
        fullyParallel: true,            // Project-specific settings
        timeout: 60000,                 // Project-specific timeout
    },
    {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 5'] },
    },
    {
        name: 'Slow Motion',
        use: {
            ...devices['Desktop Chrome'],
            slowMo: 100,                // Slow down actions by 100ms
        },
    },
]
```

---

Your configuration is well-structured for both local development and CI/CD pipelines!
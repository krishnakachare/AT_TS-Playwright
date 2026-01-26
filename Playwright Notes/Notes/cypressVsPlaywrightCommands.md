🧪 **Cypress vs Playwright – Complete Command Comparison Cheat Sheet**

🔹 **Test Structure**
• `it()` / `specify()` → `test()`
• `describe()` → `test.describe()`
• `before()` → `test.beforeAll()`
• `beforeEach()` → `test.beforeEach()`
• `after()` → `test.afterAll()`
• `afterEach()` → `test.afterEach()`

---

🔹 **Navigation**
• `cy.visit()` → `page.goto()`
• `cy.reload()` → `page.reload()`
• `cy.go('back')` → `page.goBack()`
• `cy.go('forward')` → `page.goForward()`
• `cy.url()` → `page.url()`
• `cy.title()` → `page.title()`

---

🔹 **Locators / Element Selection**
• `cy.get()` → `page.locator()`
• `cy.contains()` → `page.getByText()`
• `cy.find()` → `locator.locator()`
• `cy.children()` → `locator.locator(':scope > *')`
• `cy.parent()` → `locator.locator('..')`
• `cy.parents()` → `locator.locator('xpath=ancestor::*')`
• `cy.eq()` → `locator.nth()`
• `cy.first()` → `locator.first()`
• `cy.last()` → `locator.last()`
• `cy.within()` → `locator.locator()`

---

🔹 **User Actions**
• `cy.click()` → `locator.click()`
• `cy.dblclick()` → `locator.dblclick()`
• `cy.rightclick()` → `locator.click({ button: 'right' })`
• `cy.type()` → `locator.fill()`
• `cy.type('{enter}')` → `locator.press('Enter')`
• `cy.clear()` → `locator.fill('')`
• `cy.check()` → `locator.check()`
• `cy.uncheck()` → `locator.uncheck()`
• `cy.select()` → `locator.selectOption()`
• `cy.hover()` → `locator.hover()`
• `cy.focus()` → `locator.focus()`
• `cy.blur()` → `locator.blur()`
• `cy.scrollIntoView()` → `locator.scrollIntoViewIfNeeded()`

---

🔹 **Assertions**
• `should('be.visible')` → `expect(locator).toBeVisible()`
• `should('not.be.visible')` → `expect(locator).toBeHidden()`
• `should('exist')` → `expect(locator).toBeAttached()`
• `should('not.exist')` → `expect(locator).not.toBeAttached()`
• `should('be.enabled')` → `expect(locator).toBeEnabled()`
• `should('be.disabled')` → `expect(locator).toBeDisabled()`
• `should('be.checked')` → `expect(locator).toBeChecked()`
• `should('have.text')` → `expect(locator).toHaveText()`
• `should('contain.text')` → `expect(locator).toContainText()`
• `should('have.value')` → `expect(locator).toHaveValue()`
• `should('have.attr')` → `expect(locator).toHaveAttribute()`
• `should('have.class')` → `expect(locator).toHaveClass()`
• `should('have.length')` → `expect(locator).toHaveCount()`

---

🔹 **Wait & Timing**
• `cy.wait(time)` → `page.waitForTimeout()`
• `cy.wait(alias)` → `page.waitForResponse()`
• `cy.waitUntil()` → `page.waitForFunction()`
• `cy.intercept()` → `page.route()`

---

🔹 **Network / API**
• `cy.intercept()` → `page.route()`
• `cy.request()` → `request.newContext()`
• `cy.wait('@api')` → `page.waitForResponse()`

---

🔹 **Iframe Handling**
• `cy.iframe()` → `frameLocator()`

---

🔹 **Browser / Window**
• `cy.viewport()` → `page.setViewportSize()`
• `cy.window()` → `page.evaluate()`
• `cy.document()` → `page.evaluate()`
• `cy.screenshot()` → `page.screenshot()`

---

🔹 **Cookies / Storage**
• `cy.setCookie()` → `context.addCookies()`
• `cy.getCookie()` → `context.cookies()`
• `cy.clearCookies()` → `context.clearCookies()`
• `cy.clearLocalStorage()` → `page.evaluate(() => localStorage.clear())`

---

🔹 **Files**
• `cy.fixture()` → `fs.readFile()`
• `cy.writeFile()` → `fs.writeFile()`
• `cy.readFile()` → `fs.readFile()`
• `cy.attachFile()` → `locator.setInputFiles()`
• `cy.downloadFile()` → `page.waitForEvent('download')`

---

🔹 **Execution Control**
• `cy.then()` → `await`
• `cy.wrap()` → `Promise.resolve()`
• `cy.task()` → `test.step()` / Node helpers

---

✨ **Key Takeaway**
• Cypress → **Chain-based, implicit waits**
• Playwright → **Async/await, explicit & faster execution**

---

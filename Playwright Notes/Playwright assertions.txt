## Assertions :
==========================================================
# Auto-retrying assertions:
The following assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them.

   *  Assertion *	                  * Description *
expect(locator).toBeAttached()	    Element is attached
expect(locator).toBeChecked()	    Checkbox is checked
expect(locator).toBeDisabled()	    Element is disabled
expect(locator).toBeEditable()	    Element is editable
expect(locator).toBeEmpty()	        Container is empty
expect(locator).toBeEnabled()	    Element is enabled
expect(locator).toBeFocused()	    Element is focused
expect(locator).toBeHidden()	    Element is not visible
expect(locator).toBeInViewport()	Element intersects viewport
expect(locator).toBeVisible()	    Element is visible
expect(locator).toContainText()  	Element contains text
expect(locator).toHaveAttribute()	Element has a DOM attribute
expect(locator).toHaveClass()	    Element has a class property
expect(locator).toHaveCount()	    List has exact number of children
expect(locator).toHaveCSS()	        Element has CSS property
expect(locator).toHaveId()	        Element has an ID
expect(locator).toHaveJSProperty()	Element has a JavaScript property
expect(locator).toHaveText()	    Element matches text
expect(locator).toHaveValue()	    Input has a value
expect(locator).toHaveValues()	    Select has options selected
expect(page).toHaveTitle()	        Page has a title
expect(page).toHaveURL()	        Page has a URL
expect(response).toBeOK()	        Response has an OK status

===========================================================================
# Non-retrying assertions:
These assertions allow to test any conditions, but do not auto-retry. Most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.
Prefer auto-retrying assertions whenever possible. For more complex assertions that need to be retried, use expect.poll or expect.toPass.


* Assertion *                           * Description *
expect(value).toBe()	                Value is the same
expect(value).toBeCloseTo()	            Number is approximately equal
expect(value).toBeDefined()	            Value is not undefined
expect(value).toBeFalsy()	            Value is falsy, e.g. false, 0, null, etc.
expect(value).toBeGreaterThan()	        Number is more than
expect(value).toBeGreaterThanOrEqual()	Number is more than or equal
expect(value).toBeInstanceOf()	        Object is an instance of a class
expect(value).toBeLessThan()	        Number is less than
expect(value).toBeLessThanOrEqual()	    Number is less than or equal
expect(value).toBeNaN()	                Value is NaN
expect(value).toBeNull()	            Value is null
expect(value).toBeTruthy()	            Value is truthy, i.e. not false, 0, null, etc.
expect(value).toBeUndefined()	        Value is undefined
expect(value).toContain()	            String contains a substring
expect(value).toContain()	            Array or set contains an element
expect(value).toContainEqual()	        Array or set contains a similar element
expect(value).toEqual()	                Value is similar - deep equality and pattern matching
expect(value).toHaveLength()	        Array or string has length
expect(value).toHaveProperty()	        Object has a property
expect(value).toMatch()	                String matches a regular expression
expect(value).toMatchObject()	        Object contains specified properties
expect(value).toStrictEqual()	        Value is similar, including property types
expect(value).toThrow()	                Function throws an error
expect(value).any()	                    Matches any instance of a class/primitive
expect(value).anything()	            Matches anything
expect(value).arrayContaining()	        Array contains specific elements
expect(value).closeTo()	                Number is approximately equal
expect(value).objectContaining()	    Object contains specific properties
expect(value).stringContaining()	    String contains a substring
expect(value).stringMatching()	        String matches a regular expression

==================================================================================
# Negating matchers :
In general, we can expect the opposite to be true by adding a .not to the front of the matchers:
expect(value).not.toEqual(0);

==============================================
# Soft assertions :
By default, failed assertion will terminate test execution. Playwright also supports soft assertions: failed soft assertions do not terminate test execution, but mark the test as failed.
wait expect.soft(page.getByTestId('status')).toHaveText('Success');

===============================================
# Custom expect message :
You can specify a custom expect message as a second argument to the expect function, for example:
await expect(page.getByText('Name'), 'should be logged in').toBeVisible();

===================================================
# expect.toPass :
You can retry blocks of code until they are passing successfully.

await expect(async () => {
  const response = await page.request.get('https://api.example.com');
  expect(response.status()).toBe(200);
}).toPass();


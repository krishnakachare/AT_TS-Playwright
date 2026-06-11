import { test, expect } from '@playwright/test';

test('Hard Assertions Demo', async ({ page }) => {

    await expect.soft(2 + 2).toBe(8); //fails and not stopping execution here
    await expect(2 + 2).toBe(4); // pass

})
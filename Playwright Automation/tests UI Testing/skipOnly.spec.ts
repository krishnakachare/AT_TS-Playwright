import { test, expect } from '@playwright/test';


// skip TC
test.skip('Skip This Test', async ({ page }) => {
    // Test code here
})

// run only this TC
test.only('Run Only This Test', async ({ page }) => {
    // Test code here
})

// Grouping TCs
test.describe('Group of Tests', () => {
    test('Test 1', async ({ page }) => {
        // Test code here
    });

})
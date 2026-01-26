import { test, expect } from '@playwright/test';

test('Test-1', { tag: ["@smoke"] }, async ({ page }) => {

});


test('Test-2', { tag: ["@smoke", "@regression"] }, async ({ page }) => {

});


test('Test-3', { tag: ["@smoke"] }, async ({ page }) => {

});


/* 
npx playwright test --grep '@smoke'
npx playwright test --grep '@regression'
npx playwright test --grep-invert '@smoke'

*/
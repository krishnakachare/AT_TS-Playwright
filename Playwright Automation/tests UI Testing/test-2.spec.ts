import { test, expect } from "@playwright/test"

test.describe('Mark all as completed', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test.afterEach(async ({ page }) => {
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should allow me to mark all items as completed', async ({ page }) => {
    // test actions details omitted for clarity
  });

  test('should allow me to clear the complete state of all items', async ({ page }) => {
    // test actions details omitted for clarity
  });

  test('complete all checkbox should update state when items are completed / cleared', async ({ page }) => {
    // test actions details omitted for clarity
  });
});
import { test, expect } from '@playwright/test';

test('Luma', async ({ page }) => {
  await page.goto('https://magento2-demo.magebit.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Magebit/);

});


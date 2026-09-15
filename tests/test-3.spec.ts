import { test, expect } from '@playwright/test';
import testData from './checkout-data.json';

test('Complete-Checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(testData.username);
  await page.locator('[data-test="password"]').fill(testData.password);
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill(testData.firstName);
  await page.locator('[data-test="lastName"]').fill(testData.lastName);
  await page.locator('[data-test="postalCode"]').fill(testData.postalCode);

  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
});
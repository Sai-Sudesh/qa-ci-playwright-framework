import { test, expect } from '@playwright/test';

test.describe('Core Purchase Flow', () => {

  test('User should complete checkout successfully', async ({ page }) => {

    // Step 1: Login
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory.html/);

    // Step 2: Add product to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // Step 3: Go to cart
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart.html/);

    // Step 4: Checkout
    await page.click('[data-test="checkout"]');

    // Step 5: Checkout information
    await page.fill('[data-test="firstName"]', 'Sai');
    await page.fill('[data-test="lastName"]', 'Sudesh');
    await page.fill('[data-test="postalCode"]', '500001');
    await page.click('[data-test="continue"]');

    // Step 6: Overview validation
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.click('[data-test="finish"]');

    // Step 7: Order confirmation
    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');

  });

});



test.describe('Core Purchase Flow - Defensive Checks', () => {

  test('No error should be displayed during successful checkout flow', async ({ page }) => {

    // Login
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);

    // Add product to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');

    // Checkout
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'Sai');
    await page.fill('[data-test="lastName"]', 'Sudesh');
    await page.fill('[data-test="postalCode"]', '500001');
    await page.click('[data-test="continue"]');

    // 🔥 Defensive assertion
    await expect(page.locator('[data-test="error"]')).toHaveCount(0);

    // Finish checkout
    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');

  });

});

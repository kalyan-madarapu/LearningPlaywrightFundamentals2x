import { test, expect } from '@playwright/test';

test.describe('Playwright Website Tests', () => {
  test('has correct page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Verify the page title contains "Playwright"
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('page loads successfully', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Check if the main heading is visible
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });

  test('get started link is visible and clickable', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Find and click the get started link
    const getStartedLink = page.getByRole('link', { name: /Get started/i });
    await expect(getStartedLink).toBeVisible();
    await getStartedLink.click();

    // Verify navigation to Installation section
    await expect(page).toHaveURL(/.*installation/i);
  });

  test('installation heading is visible after navigation', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Navigate to get started
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expect page to have a heading with the name of Installation
    await expect(page.getByRole('heading', { name: /Installation/i })).toBeVisible();
  });

  test('page is responsive and interactive', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Check that page is interactive
    const links = page.getByRole('link');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });
});

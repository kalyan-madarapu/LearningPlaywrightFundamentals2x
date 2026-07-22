//spicejet search the flights DEL to BNG
import { test, expect } from "@playwright/test";
test('verify the search flights', async({page}) => {
    await page.goto("https://www.spicejet.com/");
    const welcomePage = await page.locator("//div[contains(text(),'Welcome aboard')]");
    await expect(welcomePage).toHaveText(/Welcome aboard/);

    await page.getByTestId('to-testID-origin').getByRole('textbox').fill('De');
  await page.locator('div.css-76zvg2').filter({ hasText: /^Delhi$/ }).first().click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('Ban');
  await page.locator('div.css-76zvg2').filter({ hasText: /^Bengaluru$/ }).first().click();
  await page.pause();
});


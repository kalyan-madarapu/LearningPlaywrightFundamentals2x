import {test,expect} from '@playwright/test';

test("verify the title",async({page})=>{
    await page.goto("https://app.vwo.com/#/login");
    await expect(page).toHaveTitle("Login - VMO")
})
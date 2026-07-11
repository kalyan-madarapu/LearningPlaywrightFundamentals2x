import{test, expect} from "@playwright/test";
test("has title",async({page})=>{
    await page.goto("https://app.vwo.com/#/login");

})

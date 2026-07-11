import { test, expect } from '@playwright/test';

test("Two contexts and closing it", async ({ browser }) => {
    let ttaCart_Context = await browser.newContext();
    let ttaCart_Page = await ttaCart_Context.newPage();//1

    let ttaBank_Context = await browser.newContext();
    let ttaBank_Page = await ttaBank_Context.newPage();//2

    await ttaCart_Page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await ttaBank_Page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")

    console.log("TTA cart page title: ", await ttaCart_Page.title());
    console.log("TTA bank page title: ", await ttaBank_Page.title());


    await ttaBank_Context.close();
    await ttaCart_Context.close();
})
import{test, expect} from "@playwright/test";
test('verify Direct click',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //getByRole
    //getByText are not unique 
    //await page.getByTestId("forgotten-password-link").click();
    await page.locator('.list-group-item.forgot-link').click();
    await page.pause();
  //await page.getByText("Forgotten Password").click();
    //await page.pause();
})
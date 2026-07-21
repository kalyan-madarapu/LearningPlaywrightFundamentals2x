//program to verify the user able to find the Terminated employee and click delete icon
import { test, expect } from "@playwright/test";
test('verify the login Orange HR,Terminate record', async({page}) => {
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill("admin");
    await page.locator("//input[@name='password']").fill("Awesomeqa@4321");
    await page.locator("//button[@type='submit']").click();
    await page.goto("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");
    const RecordsDisplay = await page.locator("//span[contains(text(),'Records Found')]");
    //await expect(RecordsDisplay).toBeVisible();
    const rows = await page.locator("//div[@class='oxd-table-card']");
    const rowCount = await rows.count();
    console.log(rowCount);
    for(let i=0;i<rowCount;i++){
        const rowData = await rows.nth(i).locator('.oxd-table-cell').allInnerTexts();
        console.log(`Row ${i+1}`, rowData);

        if(rowData.includes('Terminated')){
            const firstName = rowData[2];
            console.log("First Name:", firstName);
            await page.locator('i[class="oxd-icon bi-trash"]').nth(i).hover();
            await page.locator('i[class="oxd-icon bi-trash"]').nth(i).click();
        }
    }    

})

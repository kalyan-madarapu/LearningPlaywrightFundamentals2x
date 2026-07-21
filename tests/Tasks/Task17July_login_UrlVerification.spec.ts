import { test, expect } from "@playwright/test";
test('verify the urlchnaged when login done', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter#");
   
    const StudentLoginText = await page.getByText("Student Login");
    await expect(StudentLoginText).toBeVisible();
    //Login emailID
    await page.getByRole('textbox', { name: 'email' }).fill("kalyanm@gmail.com");
    await page.getByRole('textbox', { name: 'password' }).fill("Pass@123");
    //await page.getByRole('checkbox',{name:'remember'}).check();
    await page.getByTestId('login-button').click();
    //Get the URL
    await expect(page).toHaveURL(/login-success/);


})
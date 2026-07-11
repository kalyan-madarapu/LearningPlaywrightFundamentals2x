import{test,expect} from "@playwright/test"
test('verify login to the app:katalon-demo', async({page}) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //verify the title
   // await page.locator("//header[@id='top']/div/h3")
    //click the make appointment button
    await page.locator("//a[@id='btn-make-appointment']").click();
    //verify the login page
  //await page.locator("//*[@id='login']/div/div/div/h2")
  //username to be filled
  //click login button without entering the details
   await page.locator("//button[@id='btn-login']");
   //locator for validation message
   await page.locator("//section[@id='login']/div/div/div[1]/p[2]");

  await page.locator("//input[@id='txt-username']").fill("John Doe");
  await page.locator("//input[@id='txt-password']").fill("ThisIsNotAPassword");
  await page.locator("//button[@id='btn-login']");
//verify the Make Appointment
await page.locator("//section[@id='appointment']/div/div/div/h2")

 

    

})
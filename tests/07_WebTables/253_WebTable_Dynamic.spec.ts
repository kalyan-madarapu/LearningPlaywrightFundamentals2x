import{test, expect} from "@playwright/test";
test('verift dynamic record',async({page})=>{
await page.goto("https://awesomeqa.com/webtable1.html");
//xpath=//table[@summary='Sample Table']/tbody/tr
const rows = await page.locator("table[summary='Sample Table'] tbody tr");
const rowCont=await rows.count();
console.log(rowCont);
for(let i=1; i<=rowCont; i++){
const rowData = await rows.nth(i).locator('td').allInnerTexts();


}
})
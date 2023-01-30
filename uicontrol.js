describe('UI controls Test suite',async()=>
{
it('UI controls',async()=>
{


   await browser.url("https://rahulshettyacademy.com/loginpagePractise")
   console.log(await browser.getTitle())
   await  $("#username").setValue("rahulshettyacadmey")
   await $("input[name='username']").setValue("rahulshettyacademy")
  await $("//input[@type='password']").setValue("learning") 
  await broswer.pause(3000)
  //radio buttons//
  const radiobuttons=await $$(".customradio")
  const userdropdown= radiobuttons[1]
  await userdropdown.$("span").click()
  await  $(".modal-body").waitForDisplayed()
  await  $("#cancelBtn").click()
 await $$(".customradio")[0].$("span").isSelected()
 await browser.pause(4000)
 await userdropdown.$("span").click()
 await  $(".modal-body").waitForDisplayed()
 await  $("#okayBtn").click()
 await $$(".customradio")[0].$("span").click()


 


})








}
)
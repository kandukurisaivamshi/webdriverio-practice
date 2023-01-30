describe('Ecommerence',async()=>
{
it('loginpage',async()=>
{
await browser.url("https://rahulshettyacademy.com/loginpagePractise")
   console.log(await browser.getTitle())
   //css selector,xpath
   await $("input[name='username']").setvalue("rahulshettyacademy")
   await  $("#username").setValue("rahulshettyacadmey")
   const password=$("//input[@type='password']")
   await password.setvalue("learning")
  await $("#signInBtn").click()
  await browser.pause(3000)
 await console.log(await $(".alert-danger").getText())
  await browser.waituntil(async()=>await $("#signInBtn").getAttribute('value')==='signIn',
  {
    timeout:5000,
    timeoutMsg:'Error message is not showing up'
   })

   await console.log(await $(".alert-danger").getText())
}
)











}
)
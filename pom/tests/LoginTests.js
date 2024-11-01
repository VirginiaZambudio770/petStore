import homePage from "../pages/HomePage"
import loginPage from "../pages/LoginPage";
import myAccount from "../pages/MyAccount"
import { URLS, CREDENTIALS } from "../data/Constants";

fixture `Login tests`
    .page `${URLS.BASE_URL}`
    .beforeEach ( async t => {
        await homePage.clickOnSignInButton()
    })

test.meta({type:'Smoke', category:'Regression'})('Login', async t => {
    await loginPage.login(CREDENTIALS.VALID.USERNAME,CREDENTIALS.VALID.PASSWORD)
    await t.expect(myAccount.signOutButtonExists).ok('The signOut button was not found.')
})

test.meta({type:'Regression'})('Login with invalid username and password', async t => {
    await loginPage.login(CREDENTIALS.INVALID.USERNAME,CREDENTIALS.INVALID.PASSWORD)
    await t.expect(loginPage.verififyErrorExists).ok('The error message was not shown.')
})
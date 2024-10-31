import homePage from "../pages/HomePage"
import loginPage from "../pages/LoginPage";
import myAccount from "../pages/MyAccount"
import { URLS, CREDENTIALS } from "../data/Constants";

fixture `Login tests`
    .page `${URLS.BASE_URL}`
    .beforeEach ( async t => {
        await t.click(homePage.signInButton)
    })

test.meta('Smoke','Regression')('Login', async t => {
    await loginPage.Login(CREDENTIALS.VALID.USERNAME,CREDENTIALS.VALID.PASSWORD)
    await t.expect(myAccount.signOutButtonExists).ok('The signOut button was not found.')
})

test.meta('Regression')('Login with invalid username and password', async t => {
    await loginPage.Login(CREDENTIALS.INVALID.USERNAME,CREDENTIALS.INVALID.PASSWORD)
    await t.expect(loginPage.errorMessage.exists).ok('The error message was not shown.')
})
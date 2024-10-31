import { Selector, t } from "testcafe";

class HomePage {
    constructor(){
        this.signInButton= Selector('a').withText('Sign In')
    }
   
    async clickOnSignInButton(){
        await t.expect(this.signInButton.exists).ok('Sign In button was not found.')
        await t.click(this.signInButton ({timeout:2000}))
    }
}
export default new HomePage
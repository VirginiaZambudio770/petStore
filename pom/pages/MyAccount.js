import { Selector, t } from "testcafe";

class MyAccount {
    constructor(){
        this.signOutButton=Selector('a').withText('Sign Out')
    }

async signOutButtonExists() {
    await t.expect(this.signOutButton.exists).ok('SignOut button was not found.')
    await t.click(this.signOutButton)
}
}export default new MyAccount
import { Selector, t } from "testcafe";

class MyAccount {
    constructor(){
        this.signOutButton=Selector('a').withText('Sign Out')
    }

async signOutButtonExists() {
    await t.expect(this.signOutButton.exists).ok('SignOut button was not found.')
}

}export default new MyAccount
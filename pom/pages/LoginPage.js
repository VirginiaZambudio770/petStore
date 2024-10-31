import { Selector, t } from "testcafe";

class LoginPage {
    constructor(){
        this.username= Selector('input').withAttribute('name','username')
        this.password= Selector('input').withAttribute('name','password')
        this.loginButton=Selector('input').withAttribute('value','Login')
        this.errorMessage=Selector('li').withText('Invalid username or password')
    }
async login(username,password){
    await t.expect(this.username.exists).ok('The username field was not found.')
    await t.typeText(this.username, username)

    await t.expect(this.password.exists).ok('The password field was no found.')
    await t.typeText(this.password, password)

    await t.expect(this.loginButton.exists).ok('The loginButton was not found.')
    await t.click(this.loginButton)
}

async verififyErrorExists(){
    await t.expect(this.errorMessage.exists).ok('The error message was not shown.')
}

}
export default new LoginPage
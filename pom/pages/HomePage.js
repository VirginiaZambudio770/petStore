import { Selector, t } from "testcafe";

class HomePage {
    constructor(){
        this.signInButton= Selector('a').withText('Sign In')
    }
   
}
export default new HomePage
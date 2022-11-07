import { Selector, t } from "testcafe";

class loginPage {
    constructor(){
        this.user = Selector ('#user-name')
        this.pass = Selector ('input[data-test="password"]')
        this.button = Selector ('input[name="login-button"]')
    }

    async submintLoginForm (user, pass){
        await t.typeText(this.user, user)
        await t.typeText(this.pass, pass)
        await t.click(this.button)
    }


} export default new loginPage
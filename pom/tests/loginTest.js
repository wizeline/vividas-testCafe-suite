import { Selector } from "testcafe";
import loginPage from '../pages/loginPage'

fixture`Login test suite`
    .page`https://www.saucedemo.com/`

test('User must be logged in succesfully',async t => {
    await loginPage.submintLoginForm('standard_user','secret_sauce')
    await t.expect(Selector('.title').withText('PRODUCTS').exists).ok()
})
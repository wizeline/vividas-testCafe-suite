import { Selector } from "testcafe";
import inventoryPage from "../pages/inventoryPage";
import loginPage from '../pages/loginPage'

fixture`Login test suite`
    .page`https://www.saucedemo.com/`

test('User must be logged in succesfully',async t => {
    await loginPage.submintLoginForm('standard_user','secret_sauce')
    await t.expect(inventoryPage.title.exists).ok()
})
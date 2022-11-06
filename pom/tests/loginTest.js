import { Selector } from "testcafe";

fixture`Login test suite`
    .page`https://www.saucedemo.com/`

test('User must be logged in succesfully',async t => {
    await t.typeText('#user-name','standard_user')
    await t.typeText('input[data-test="password"]','secret_sauce')
    await t.click('input[name="login-button"]')
    await t.expect(Selector('.title').withText('PRODUCTS').exists).ok()
})
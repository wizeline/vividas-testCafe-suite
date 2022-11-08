import { Selector } from "testcafe";
import inventoryPage from "../pages/inventoryPage";
import loginPage from '../pages/loginPage'
import dotenv from 'dotenv'
dotenv.config()

fixture`Login test suite`
    .page`${process.env.URL_TESTPAGE}`

test('User must be logged in succesfully',async t => {
    await loginPage.submintLoginForm(process.env.USER_PAGE,process.env.PASSWORD)
    await t.expect(inventoryPage.title.exists).ok()
})
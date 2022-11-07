import { Selector } from "testcafe";

class inventoryPage {
    constructor(){
        this.title = Selector('.title').withText('PRODUCTS')
    }
} export default new inventoryPage
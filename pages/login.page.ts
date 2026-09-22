import {page,locator,expect} from '@playwright/test';
export class LoginPage {
    readonly page: page;
    readonly alert:locator;

    constructor(page: page) {
        this.page = page;
        this.alert = page.getByRole('alert');
}
async acessarsite() {
    await this.page.goto('https://www.saucedemo.com/');
    await expect(this.page).toHaveTitle("Swag Labs");
}
async login(email:string,password:string) {
    await this.page.locator('#user-name').fill(email);
    await this.page.getBylabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();


}
}
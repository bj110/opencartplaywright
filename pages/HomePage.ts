import { Page, expect, Locator } from '@playwright/test';

export class HomePage {

    //locators

    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;


    //constructor - actually initialize locators into this variables

    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.linkLogin = page.locator('a:has-text("Login")');
        this.txtSearchbox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[type="button"]');

    }

    //Action methods

    //Check if HomePage exists
    async isHomePageExists() {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    //Click "My Account" link
    async clickMyAccount() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'My Account': ${error}`);
            throw error;
        }

    }


    // Click "Register" link

    async clickRegister() {
        try {
            await this.lnkRegister.click();

        } catch (error) {
            console.log(`Exception occured while clicking 'Register': ${error}`);
            throw error;
        }

    }


    //Click "Login" link

    async clickLogin() {
        try {
            await this.linkLogin.click();

        } catch (error) {
            console.log(`Exception occured while clicking 'Login': ${error}`);
            throw error;

        }

    }


    //Enter product name in the search box

    async enterProductName(pName: string) {
        try {
            await this.txtSearchbox.fill(pName);

        } catch (error) {
            console.log(`Exception occured while entering product name: ${error}`);
        }

    }

    //Click the search button

    async clickSearch() {
        try {
            await this.btnSearch.click();

        } catch (error) {
            console.log(`Exception occured while clicking 'Search': ${error}`);
        }

    }


}












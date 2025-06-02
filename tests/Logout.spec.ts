
/**
 * Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LogoutPage } from '../pages/LogoutPage';

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;


//Set up before each test 

test.beforeEach(async({page})=>{

config = new TestConfig();//Load test config

//1) Navigate to the application URL
await page.goto(config.appUrl);

//Initialize page objects
homePage = new HomePage(page);
loginPage = new LoginPage(page);
myAccountPage = new MyAccountPage(page);
logoutPage = new LogoutPage(page);

});

//Optional clean up after each test
test.afterEach(async({page})=>{

    await page.close();//close the browser tab (helps keep tests clean)
});

test('User logout test @master @regression', async()=> {

    //2) Go to Login page from Home page
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //3) Login with valid credentials
    await loginPage.login(config.email, config.password);

    //4) Verify successful login
    expect(myAccountPage.isMyAccountPageExists()).toBeTruthy();

    //5) Click Logout, which returns LogoutPage instance
     logoutPage= await myAccountPage.clickLogout();

    //6) Verify "Continue" button is visible before clicking
    expect(await logoutPage.isContinueButtonVisible()).toBe(true);

    //7) Click Continue and verify redirection to HomePage
    homePage= await logoutPage.clickContinue();
    expect(await homePage.isHomePageExists()).toBe(true);

});
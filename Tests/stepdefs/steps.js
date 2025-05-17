const { Given, When, Then } = require('@wdio/cucumber-framework');

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
// const loginPage = require('../pageobjects/login.page');

// const pages = {
//     login: LoginPage
// }

const Login = require('../pageobjects/login.page')

Given(/^Browse LMJ website$/, async() => {
	await browser.url("https://uat-b2b.lmjltd.com/");
});


// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });


When(/^I click profile icon$/, async () => {
	const profilelink = new Login
    await profilelink.profile();
});


// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});




// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class Login {

    get profileicon () {
        return $('//a[@role="button"]//span[@class="material-icons px-3 md-30 py-1"]')
    }

    get inputUsername () {
        return $('//input[@placeholder="Enter Email Address"]')
    }

    get inputPassword () {
        return $('//input[@placeholder="Enter Password"]')
    }

    get btnSubmit () {
        return $('//button[contains(text(), "Login")]');
    }

    async profile () {
        await this.profileicon.click()
    }

    async login () {
        await this.inputUsername.setValue("arv123@gmail.com");
        await this.inputPassword.setValue("Pass@123");
        await this.btnSubmit.click();
    }
}


// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

module.exports = Login;

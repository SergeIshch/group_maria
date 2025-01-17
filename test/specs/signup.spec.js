const LoginPage = require('../pageobjects/Login.page');
const SignupPage = require('../pageobjects/Singup.page');


describe('SIGNUP PAGE', () => {

    before('Open login page', async () => {
        await LoginPage.open();
    });
    //BUG: "Unnecessary validation appears while clicking on SignUp button"
    it('Should signup with valid credentials', async () => {
        await LoginPage.signupButton.click();
        await SignupPage.signup(`user${Date.now()}@user.com`, 'superUser123!');
        await expect(SignupPage.messageUserRegistered).toBeExisting().true;
        await expect(await SignupPage.messageUserRegistered).toHaveText('Registration successful!');
    });

});

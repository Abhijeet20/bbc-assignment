import Page from "./page.js";
import reporter from "../helper/reporter.js";

class SignInPage extends Page {
  constructor() {
    super();
  }

  /**Page object*/
  get usernameInputBox() {
    return $(`//input[@type='email']`);
  }
  get passwordInputBox() {
    return $(`//input[@type='password']`);
  }
  get loginButton() {
    return $(`//button[@type='submit']`);
  }

  /**Page Actions*/
  async enterUserName(username: string) {
    if (!username) throw Error(`Given username: ${username} is not valid`);
    try {
      username = username.trim();
      await this.typeInto(await this.usernameInputBox, username);
      reporter.addStep("info", `Username: ${username} entered successfully.`);
    } catch (err) {
      err.message = `Error entering username: ${username}, ${err.message}`;
      throw err;
    }
  }

  async enterPassword(password: string) {
    if (!password) throw Error(`Given password is not valid`);
    try {
      password = password.trim();
      await this.typeInto(await this.passwordInputBox, password);
      reporter.addStep("info", `Password entered successfully.`);
    } catch (err) {
      err.message = `Error entering password, ${err.message}`;
      throw err;
    }
  }

  async clickLoginBtn() {
    try {
      await this.click(await this.loginButton);
      reporter.addStep("info", `Login button clicked`);
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async loginToBBCNewsPage(username: string, password: string) {
    try {
      await this.enterUserName(username);
      await this.enterPassword(password);
      await this.clickLoginBtn();
    } catch (err) {
      throw err;
    }
  }
}

export default new SignInPage();

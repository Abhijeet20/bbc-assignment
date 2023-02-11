import Page from "./page";
import chai from "chai";

class SignInPage extends Page {
  constructor() {
    super();
  }

  /**Page object*/
  get usernameInputBox() {
    return "//input[@type='email']";
  }
  get passwordInputBox() {
    return "//input[@type='password']";
  }
  get loginButton() {
    return "//button[@type='submit']";
  }

  /**Page Actions*/
}

export default new SignInPage();

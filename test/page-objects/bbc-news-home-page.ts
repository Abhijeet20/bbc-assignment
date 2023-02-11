import Page from "./page";
import chai from "chai";

class HomePage extends Page {
  constructor() {
    super();
  }

  /**Page object*/
  get commentIconButtons() {
    return "(//a[contains(@class,'nw-c-comment')])";
  }

  /**Page Actions*/
}

export default new HomePage();

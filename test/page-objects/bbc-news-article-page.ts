import Page from "./page.js";
import reporter from "../helper/reporter.js";

class ArticlePage extends Page {
  constructor() {
    super();
  }

  /**Page object*/
  get commentIcon() {
    return $(`//a[@href='#comments']`);
  }

  get commentIconScroll() {
    return $(`//a[@class="icon-scroll"]`);
  }

  get viewCommentsButton() {
    return $(`//button[@class="view-comments-button"]`);
  }

  get iframeComment() {
    return $(`//iframe[@title="Comments"]`);
  }

  get signedInText() {
    return $(`//span[text()='You’re signed in, ']`);
  }

  async getCommentSectionButton(buttonName: string) {
    return $(
      `//div[@class='comments__user-interactions-container']/descendant::a[text()='${buttonName}']`
    );
  }

  /**Page Actions*/
  async scrollToComments() {
    try {
      reporter.addStep("info", `Scroll to comment section`);
      let ele: WebdriverIO.Element;
      const eleCommentIcon = await this.commentIcon;
      const eleScrollCommentIcon = await this.commentIconScroll;
      if (await eleCommentIcon.isDisplayed()) {
        ele = eleCommentIcon;
      } else if (await eleScrollCommentIcon.isDisplayed()) {
        ele = eleScrollCommentIcon;
      } else {
        let errorMessage = `Error comment button not found in article page`;
        throw errorMessage;
      }
      await this.click(ele);
      await browser.pause(5000);
    } catch (err) {
      err.message = `Error clicking comment button in article page, ${err.message}`;
      throw err;
    }
  }

  async navigateToCommentSection() {
    try {
      await this.scrollToComments();
      reporter.addStep("info", `View comments`);
      //Optional element identified in page
      const eleViewComments = await this.viewCommentsButton;
      if (await eleViewComments.isDisplayed()) {
        await this.click(eleViewComments);
      }
      //Optional element identified in page
      const eleIframe = await this.iframeComment;
      if (await eleIframe.isDisplayed()) {
        await browser.switchToFrame(eleIframe);
      }
    } catch (err) {
      err.message = `Error viewing comment section, ${err.message}`;
      throw err;
    }
  }

  async isCommentSectionButtonDisplayed(buttonName: string) {
    reporter.addStep(
      "info",
      `Verify ${buttonName} button is displayed in comment section`
    );
    const eleRegisterButton = await this.getCommentSectionButton(buttonName);
    let status = await eleRegisterButton.isDisplayed();
    return status;
  }

  async isSignedInTextDisplayed() {
    reporter.addStep("info", `Verify signed in text in comment section`);
    const eleSignedInText = await this.signedInText;
    let status = await eleSignedInText.isDisplayed();
    return status;
  }
}

export default new ArticlePage();

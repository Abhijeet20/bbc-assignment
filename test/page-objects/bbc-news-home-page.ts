import Page from "./page.js";
import reporter from "../helper/reporter.js";

class HomePage extends Page {
  constructor() {
    super();
  }

  /**Page object*/
  async getCommentIcon(index: string) {
    return $(`(//a[contains(@class,'nw-c-comment')])[${index}]`);
  }

  get signInButton() {
    return $(
      `//header[@aria-label='BBC-wide']/descendant::span[text()='Sign in']/..`
    );
  }
  get commentIconButtons() {
    return $$(`//a[contains(@class,'nw-c-comment')]`);
  }

  /**Page Actions*/
  async clickSignInBtn() {
    try {
      await this.click(await this.signInButton);
      reporter.addStep("info", `Sign in button clicked`);
    } catch (err) {
      err.message = `Error clicking sign in button, ${err.message}`;
      throw err;
    }
  }

  async getTotalCommentIcons() {
    try {
      const commentIconsLength = await this.commentIconButtons.length;
      reporter.addStep(
        "info",
        `Total comment icons on home page are: ${commentIconsLength}`
      );
      return commentIconsLength;
    } catch (err) {
      err.message = `Unable to fetch total comment icons, ${err.message}`;
      throw err;
    }
  }

  async clickArticleCommentIcon() {
    try {
      const commentIconsLength = await this.getTotalCommentIcons();
      for (let i = 1; i <= commentIconsLength; i++) {
        const eleCommentIcon = await this.getCommentIcon(i.toString());
        const status = await eleCommentIcon.isClickable();
        if (status) {
          await this.click(eleCommentIcon);
          reporter.addStep("info", `First comment icon clicked`);
          break;
        } else if (!status && i == commentIconsLength) {
          const message = `Error comment icon not found`;
          throw message;
        }
      }
    } catch (err) {
      err.message = `Error clicking comment icon on home page, ${err.message}`;
      throw err;
    }
  }
}

export default new HomePage();

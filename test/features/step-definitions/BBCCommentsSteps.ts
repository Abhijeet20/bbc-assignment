import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^User opens BBC news page$/, async function () {
  await browser.url("/news");
  await browser.pause(2000);
});

When(
  /^The user navigates to the first article which has a comment icon$/,
  async function () {
    const eleCommentIcons = await $$(`(//a[contains(@class,'nw-c-comment')])`);
    const commentIconsLength = eleCommentIcons.length;
    let articleLinkText = "";

    for (let i = 1; i < commentIconsLength; i++) {
      const eleCommentIcon = await $(
        `(//a[contains(@class,'nw-c-comment')])[${i}]`
      );
      const status = await eleCommentIcon.isClickable();
      if (status) {
        // articleLinkText = await eleCommentIcon.getAttribute("href");
        await eleCommentIcon.click();
        break;
      }
      // console.log(`Article link is ${articleLinkText}`);
    }
    // const eleCommentIcon = await $(`(//a[contains(@class,'nw-c-comment')])[1]`);

    // const status = await eleCommentIcon.isClickable();
    // console.log(`Element is ${status}`);
    // await eleCommentIcon.scrollIntoView();
    // await eleCommentIcon.click();
  }
);

Then(
  /^The non-signed-in user has \'Sign-in or Register\' in the comment section$/,
  async function () {
    const ele = await $(`//a[@href='#comments']`);
    await ele.click();
    await browser.pause(5000);
    const eleIframe = await $(`//iframe[@title="Comments"]`);
    await browser.switchToFrame(eleIframe);
    const eleSignInButton = await $(
      `//div[@class='comments__user-interactions-container']/descendant::a[text()='Sign in']`
    );
    let status = await eleSignInButton.isDisplayed();
    chai.expect(status).to.be.true;

    const eleRegisterButton = await $(
      `//div[@class='comments__user-interactions-container']/descendant::a[text()='Register']`
    );

    status = await eleRegisterButton.isDisplayed();
    chai.expect(status).to.be.true;
  }
);

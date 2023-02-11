import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Non logged-in user opens the BBC news page$/, async function () {
  await browser.url("/news");
  await browser.pause(2000);
});

When(
  /^The user navigates to the first article which has a comment icon$/,
  async function () {
    const eleCommentIcons = await $$(`(//a[contains(@class,'nw-c-comment')])`);
    const commentIconsLength = eleCommentIcons.length;
    let articleLinkText = "";

    const eleCommentIcon = await $(`(//a[contains(@class,'nw-c-comment')][1])`);
    const status = await eleCommentIcon.isDisplayed();
    chai.expect(status).to.be.true;
    for (let i = 1; i < commentIconsLength; i++) {
      const eleCommentIcon = await $(
        `(//a[contains(@class,'nw-c-comment')])[${i}]`
      );
      const status = await eleCommentIcon.isClickable();
      if (status) {
        await eleCommentIcon.click();
        break;
      }
    }
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

Given(/^User logs in to the BBC news page$/, async function () {
  await browser.url("/news");
  const eleSignInButton = await $(
    `//header[@aria-label='BBC-wide']/descendant::span[text()='Sign in']/..`
  );
  let status = await eleSignInButton.isDisplayed();
  chai.expect(status).to.be.true;
  await eleSignInButton.click();
  const eleUserName = await $(`//input[@type="email"]`);
  await eleUserName.setValue(process.env.TEST_USERNAME);
  const elePassword = await $(`//input[@type="password"]`);
  await elePassword.setValue(process.env.TEST_PASSWORD);
  const eleSignin = await $(`//button[@type="submit"]`);
  await eleSignin.click();
});

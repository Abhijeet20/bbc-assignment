import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";
import bbcNewsArticlePage from "../../page-objects/bbc-news-article-page.js";

Then(
  /^The non-signed-in user has \"Sign-in or Register\" in the comment section$/,
  async function () {
    await bbcNewsArticlePage.navigateToCommentSection();
    let status = await bbcNewsArticlePage.isCommentSectionButtonDisplayed(
      `Sign in`
    );
    chai.expect(status).to.be.true;
    status = await bbcNewsArticlePage.isCommentSectionButtonDisplayed(
      `Register`
    );
    chai.expect(status).to.be.true;
  }
);

Then(
  /^The signed-in user has text \"You\’re signed in\, \" in the comment section$/,
  async function () {
    await bbcNewsArticlePage.navigateToCommentSection();
    const status = await bbcNewsArticlePage.isSignedInTextDisplayed();
    chai.expect(status).to.be.true;
  }
);

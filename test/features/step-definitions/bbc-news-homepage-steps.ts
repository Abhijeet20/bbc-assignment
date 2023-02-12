import { Given, When, Then } from "@cucumber/cucumber";
import reporter from "../../helper/reporter.js";
import bbcNewsSigninPage from "../../page-objects/bbc-news-signin-page.js";
import bbcNewsHomePage from "../../page-objects/bbc-news-home-page.js";

Given(/^Non logged-in user opens the BBC news page$/, async function () {
  reporter.addStep("info", "Open BBC news page");
  await bbcNewsHomePage.navigateTo("/news");
});

Given(/^User logs in to the BBC news page$/, async function () {
  await bbcNewsHomePage.navigateTo("/news");
  await bbcNewsHomePage.clickSignInBtn();
  await bbcNewsSigninPage.loginToBBCNewsPage(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );
});

When(
  /^The user navigates to the first article which has a comment icon$/,
  async function () {
    reporter.addStep("info", "Search comment icon on home page");
    await bbcNewsHomePage.clickArticleCommentIcon();
  }
);

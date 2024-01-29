import mainPage from "../pageobjects/main.page.js";
import footerPage from "../pageobjects/footer.page.js";

describe("Verify that all elements on the footer are displayed and all links are clickable", () => {
  before(async () => {
    await mainPage.openMainUrl();
  });
  it("should verify that all elements on the footer are displayed and all links are clickable", async () => {
    (await footerPage.footer).scrollIntoView();
    await expect(await footerPage.footer).toBeDisplayed();
    await expect(await footerPage.logoFoter).not.toBeClickable();
    await expect(await footerPage.aboutUsLabel).toBeDisplayed();
    await expect(await footerPage.privacyPolicyLink).toBeDisplayed();
    await expect(await footerPage.cookieRulesLink).toBeDisplayed();
    await expect(await footerPage.termsConditionsLink).toBeDisplayed();
    await expect(await footerPage.forBuyersLabel).toBeDisplayed();
    await expect(await footerPage.unitCardsLink).toBeDisplayed();
    await expect(await footerPage.tendersLink).toBeDisplayed();
    await expect(await footerPage.contactsSection).toBeDisplayed();
    await expect(await footerPage.logoFoter).toBeDisplayed();
    await expect(await footerPage.copyrightLabel).toBeDisplayed();
    await footerPage.clickPrivacyPolicyLink();
    await expect(browser).toHaveUrl(
      expect.stringContaining(`/privacy-policy/`)
    );
    await expect(await footerPage.privacyPolicyTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickCookieRulesLink();
    await expect(browser).toHaveUrl(expect.stringContaining(`/cookie-policy/`));
    await expect(await footerPage.cookieRulesTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickTermsConditionsLink();
    await expect(browser).toHaveUrl(
      expect.stringContaining(`/terms-conditions/`)
    );
    await expect(await footerPage.termsConditionsTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickUnitCardsLink();
    await expect(browser).toHaveUrl(expect.stringContaining(`/products/`));
    await expect(await footerPage.mainSearchInputField).toBeDisplayed();
    await expect(await footerPage.mainSearchInputField).toHaveAttribute(
      "placeholder",
      "Пошук оголошень або послуг"
    );
    await mainPage.clickLogoIcon();
    await expect(browser).toHaveUrl(`${process.env.ENV}`);
    await expect(await mainPage.mainTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickTendersLink();
    await expect(browser).toHaveUrl(expect.stringContaining(`/tenders-map/`));
    await expect(await footerPage.tenderSearchInputField).toBeDisplayed();
    await expect(await footerPage.tenderSearchInputField).toHaveAttribute(
      "placeholder",
      "Пошук тендера за ключовими словами"
    );
    await mainPage.clickLogoIcon();
    await expect(browser).toHaveUrl(`${process.env.ENV}`);
    await expect(await footerPage.emailField).toHaveAttribute(
      "href",
      "mailto:info@rentzila.com.ua"
    );
  });
});

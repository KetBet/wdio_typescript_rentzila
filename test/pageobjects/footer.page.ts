import Page from "./page.js";

const footer: string = "div.Footer_footer__Dhw_9";
const logoFoter: string = 'div.Footer_footer__Dhw_9 div[data-testid="logo"]';
const aboutUsLabel: string = 'div[data-testid="content"]';
const privacyPolicyLink: string = 'div[data-testid="politika-konfidenciinosti"]';
const cookieRulesLink: string =
  'div[data-testid="pravila-vikoristannya-failiv-cookie"]';
const termsConditionsLink: string = 'div[data-testid="umovi-dostupu-ta-koristuvannya"]';
const forBuyersLabel: string = "div.RentzilaForBuyers_title__k3tHn";
const unitCardsLink: string = 'div[data-testid="ogoloshennya"]';
const tendersLink: string = 'div[data-testid="tenderi"] > a';
const contactsSection: string = "div.RentzilaContacts_container__aLXtD";
const emailField: string = "a.RentzilaContacts_email__jlzWc";
const copyrightLabel: string = 'div[data-testid="copyright"]';
const privacyPolicyTitle: string = "main h1.PrivacyPolicy_title__FEiRV";
const cookieRulesTitle: string = "main h1.Cookies_title__BVLFo";
const termsConditionsTitle: string = "main h1.TermsConditions_title__haW1D";
const mainSearchInputField: string = 'input[data-testid="searchInput"]';
const tenderSearchInputField: string = "div.ItemSearch_search__Nu9XY > input";

class FooterPage extends Page {
  public get footer() {
    return super.get(footer);
  }
  public get logoFoter() {
    return super.get(logoFoter);
  }
  public get aboutUsLabel() {
    return super.get(aboutUsLabel);
  }
  public get privacyPolicyLink() {
    return super.get(privacyPolicyLink);
  }
  public get cookieRulesLink() {
    return super.get(cookieRulesLink);
  }
  public get termsConditionsLink() {
    return super.get(termsConditionsLink);
  }
  public get forBuyersLabel() {
    return super.get(forBuyersLabel);
  }
  public get unitCardsLink() {
    return super.get(unitCardsLink);
  }
  public get tendersLink() {
    return super.get(tendersLink);
  }
  public get contactsSection() {
    return super.get(contactsSection);
  }
  public get copyrightLabel() {
    return super.get(copyrightLabel);
  }
  public get emailField() {
    return super.get(emailField);
  }
  public get privacyPolicyTitle() {
    return super.get(privacyPolicyTitle);
  }
  public get cookieRulesTitle() {
    return super.get(cookieRulesTitle);
  }
  public get termsConditionsTitle() {
    return super.get(termsConditionsTitle);
  }
  public get mainSearchInputField() {
    return super.get(mainSearchInputField);
  }
  public get tenderSearchInputField() {
    return super.get(tenderSearchInputField);
  }

  public async clickPrivacyPolicyLink() {
    await this.privacyPolicyLink.click();
  }
  public async clickCookieRulesLink() {
    await this.cookieRulesLink.click();
  }
  public async clickTermsConditionsLink() {
    await this.termsConditionsLink.click();
  }
  public async clickUnitCardsLink() {
    await this.unitCardsLink.click();
  }
  public async clickTendersLink() {
    await this.tendersLink.click();
  }
}

export default new FooterPage();

import Page from "./page.js";

const servicesSection = 'section[data-testid="services"]';
const servicesTabs =
  "div.RentzilaProposes_categories_list__cxa6m > div.RentzilaProposes_service__oHepD";
const servicesItem1 = "[data-testid='service__kompleks-robit']";
const servicesItem2 =
  "[data-testid='service__navantazhennya-ta-rozvantazhennya']";
const servicesItem3 = "[data-testid='service__asfaltuvannya']";
const servicesItem4 = "[data-testid='service__dorozhni-roboti']";
const servicesItem5 = "[data-testid='service__orannya-zemli']";
const servicesItem6 = "[data-testid='service__pidiomni-roboti']";
const servicesItem7 = "[data-testid='service__perevezennya-materialiv']";
const servicesItems =
  'section[data-testid="services"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2';
const servicesItemsLabels =
  'section[data-testid="services"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2 > div.RentzilaProposes_name__DTnwr';
const logoIcon = 'a > div[data-testid="logo"]';
const closeTelegramPopUp = 'div[data-testid="crossButton"]';
const vehiclesSection = "[data-testid='specialEquipment'] > h2";
const vehiclesTabs =
  "div.RentzilaProposes_categories_list__cxa6m > h3.RentzilaProposes_service__oHepD";
const vehiclesItem1 = '[data-testid="category__sivalki"]';
const vehiclesItem2 = '[data-testid="category__traktori"]';
const vehiclesItem3 = '[data-testid="category__obpriskuvachi"]';
const vehiclesItem4 = '[data-testid="category__ekskavatori"]';
const vehiclesItem5 = '[data-testid="category__navantazhuvachi"]';
const vehiclesItem6 = '[data-testid="category__pidiomniki"]';
const vehiclesItem7 = '[data-testid="category__komunalni-mashini"]';
const vehiclesItems =
  'section[data-testid="specialEquipment"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2';
const vehiclesItemsLabels =
  'section[data-testid="specialEquipment"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2 > div.RentzilaProposes_name__DTnwr';
const mainTitle = "h1.HeroSection_title__QIzpM";
const searchInputField =
  '[class*="Navbar_searchWrapper"] [class*="MainSearch_inputForm"]';
const searchDropdown = "[data-testid='searchDropdown']";
const searchHistoryFirst =
  "div:first-of-type > [data-testid='resultItem']:first-of-type";
const searchDropdownServices = '[data-testid="services"]';
const searchResultsPagination = "[class*='MapPagination_count']";
const mapSection = "#map";
const searchedUnits = 'div[data-testid="resultItem"]';
const clearSearch =
  '[data-testid="searchClear"]';
  const unitTitle = '[class*="UnitName_name"]';
  const catalogButton = '[class*="NavbarCatalog_label"]';
  const catalogDropdown = '[class*="Catalog_container"]';
  const catalogList1 ="[class*='Catalog_parent']";
  const catalogList2 = '[class*="Catalog_list"]';
  const catalogList3 =
    '[class*="CatalogItem_item"]';

class MainPage extends Page {
  public get servicesItem1() {
    return super.get(servicesItem1);
  }

  public get servicesItem2() {
    return super.get(servicesItem2);
  }

  public get servicesItem3() {
    return super.get(servicesItem3);
  }

  public get servicesItem4() {
    return super.get(servicesItem4);
  }

  public get servicesItem5() {
    return super.get(servicesItem5);
  }

  public get servicesItem6() {
    return super.get(servicesItem6);
  }

  public get servicesItem7() {
    return super.get(servicesItem7);
  }

  public get vehiclesItem1() {
    return super.get(vehiclesItem1);
  }

  public get vehiclesItem2() {
    return super.get(vehiclesItem2);
  }

  public get vehiclesItem3() {
    return super.get(vehiclesItem3);
  }

  public get vehiclesItem4() {
    return super.get(vehiclesItem4);
  }

  public get vehiclesItem5() {
    return super.get(vehiclesItem5);
  }

  public get vehiclesItem6() {
    return super.get(vehiclesItem6);
  }

  public get vehiclesItem7() {
    return super.get(vehiclesItem7);
  }

  public get clearSearch() {
    return super.get(clearSearch);
  }

  public get searchInputField() {
    return super.get(searchInputField);
  }

  public get searchDropdown() {
    return super.get(searchDropdown);
  }

  public get searchHistoryFirst() {
    return super.get(searchHistoryFirst);
  }

  public get searchDropdownServices() {
    return super.get(searchDropdownServices);
  }

  public get searchResultsPagination() {
    return super.get(searchResultsPagination);
  }

  public get mapSection() {
    return super.get(mapSection);
  }

  public get searchedUnits() {
    return super.getAll(searchedUnits);
  }

  public get mainTitle() {
    return super.get(mainTitle);
  }

  public get servicesSection() {
    return super.get(servicesSection);
  }

  public get servicesTabs() {
    return super.getAll(servicesTabs);
  }

  public get servicesItems() {
    return super.getAll(servicesItems);
  }

  public get servicesItemsLabels() {
    return super.getAll(servicesItemsLabels);
  }

  public get closeTelegramPopUp() {
    return super.get(closeTelegramPopUp);
  }

  public get vehiclesSection() {
    return super.get(vehiclesSection);
  }

  public get vehiclesTabs() {
    return super.getAll(vehiclesTabs);
  }

  public get vehiclesItems() {
    return super.getAll(vehiclesItems);
  }

  public get vehiclesItemsLabels() {
    return super.getAll(vehiclesItemsLabels);
  }

  public get logoIcon() {
    return super.get(logoIcon);
  }

  public get unitTitle() {
    return super.get(unitTitle);
  }

  public get catalogButton() {
    return super.get(catalogButton);
  }

  public get catalogDropdown() {
    return super.get(catalogDropdown);
  }

  public get catalogList1() {
    return super.getAll(catalogList1);
  }

  public get catalogList2() {
    return super.getAll(catalogList2);
  }

  public get catalogList3() {
    return super.getAll(catalogList3);
  }

  public async clickLogoIcon() {
    await this.logoIcon.click();
  }

  public async clickServicesItem1() {
    await this.servicesItem1.click();
  }

  public async clickVehicleItem1() {
    await this.vehiclesItem1.click();
  }

  public async clickServicesTab(i: number) {
    await this.servicesTabs[i].click();
  }

  public async clickServicesItem(i: number) {
    await this.servicesItems[i].click();
  }

  public async searchService(text: string) {
    return $(`//div[@data-testid="services"]/div[contains(text(), "${text}")]`);
  }

  public async searchCategory(text: string) {
    return $(`//div/div[contains(text(), "${text}")]`);
  }

  public async serviceTag(item: string) {
    return $(`//div[@itemprop="services"]//div[contains(text(),'${item}')]`);
  }

  public async clickPopularTab(i: number) {
    await this.servicesTabs[i].click();
  }

  public async clickFirstSearchedUnit() {
    await this.searchedUnits[0].click();
  }

  public async clickSearchInput() {
    await this.searchInputField.click();
  }

  public async clickClearSearch() {
    await this.clearSearch.click();
  }

  public async clickCloseTelegramPopUp() {
    if (await this.closeTelegramPopUp.isDisplayed()) {
      await this.closeTelegramPopUp.click();
    }
  }

  public async clickVehiclesTab(i: number) {
    await this.vehiclesTabs[i].click();
  }

  public async clickVehiclesItem(i: number) {
    await this.vehiclesItems[i].click();
  }

  public async clickCatalogButton() {
    await this.catalogButton.click();
  }

  public async checkFeedbackPresent(
    feedbackList: any,
    name: string,
    phone: string
  ) {
    let checkfeedback = null;
    for (const feedback of feedbackList) {
      if (feedback.name === name && feedback.phone === phone) {
        checkfeedback = feedback;
        break; 
      }
    }
    await expect(checkfeedback).not.toBeUndefined();
  }

  public openMainUrl() {
    return super.open("");
  }
}

export default new MainPage();

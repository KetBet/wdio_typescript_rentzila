import mainPage from "../pageobjects/main.page.js";
import productsPage from "../pageobjects/products.page.js";
import unitPage from "../pageobjects/unit.page.js";
import data from "../../utils/test-data.json" assert { type: 'json' };

describe('Checking "Послуги" section on the main page', () => {
  before(async () => {
    await mainPage.openMainUrl();
  });
  it('should check "Послуги" section on the main page', async () => {
    await expect(await mainPage.servicesSection).toBeDisplayed();
    await expect(await mainPage.servicesTabs).toBeDisplayed();
    await expect(await mainPage.servicesItem1).toBeDisplayed();
    await expect(await mainPage.servicesItem2).toBeDisplayed();
    await expect(await mainPage.servicesItem3).toBeDisplayed();
    await expect(await mainPage.servicesItem4).toBeDisplayed();
    await expect(await mainPage.servicesItem5).toBeDisplayed();
    await expect(await mainPage.servicesItem6).toBeDisplayed();
    await expect(await mainPage.servicesItem7).toBeDisplayed();

    await mainPage.clickServicesItem1();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await productsPage.selectedItem).toBeDisplayed();
    await expect(await productsPage.listUnits).toBeDisplayed();

    await productsPage.clickFirstUnitItem();
    await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
    await expect(await unitPage.relevantService).toBeDisplayed();
    await mainPage.clickLogoIcon();
    await expect(browser).toHaveUrl(`${process.env.ENV}`);

    for (let i = 0; i < data.Services.Type.length; i++) {
      await expect(await mainPage.servicesSection).toBeDisplayed();
      await expect(await mainPage.servicesTabs[i]).toBeDisplayed();
      await expect(await mainPage.servicesItems).toBeDisplayed();

      for (let n: number = 0; n < await mainPage.servicesItems.length; n++) {
        await mainPage.clickCloseTelegramPopUp();
        await mainPage.clickServicesTab(i);
        let item: string = await mainPage.servicesItemsLabels[n].getText();
        await mainPage.clickServicesItem(n);
        await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
        await expect(await productsPage.selectedItem).toHaveText(item);
        if (await mainPage.searchResultsPagination.getText() !== 'Знайдено 0 оголошень на видимій території') {
          await expect(await productsPage.listUnits).toBeDisplayed();
          await productsPage.clickFirstUnitItem();
          await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
          await expect(await mainPage.serviceTag(item)).toBeExisting();
        }
        await mainPage.clickLogoIcon();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
      }
    }
});
});



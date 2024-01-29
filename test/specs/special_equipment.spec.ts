import mainPage from "../pageobjects/main.page.js";
import data from "../../utils/test-data.json" assert { type: "json" };
import productsPage from "../pageobjects/products.page.js";
import unitPage from "../pageobjects/unit.page.js";

describe('Checking "Спецтехніка" section on the main page', () => {
  before(async () => {
    await mainPage.openMainUrl();
  });
  it('should check "Спецтехніка" section on the main page', async () => {
    await expect(await mainPage.vehiclesSection).toBeDisplayed();
    await expect(await mainPage.vehiclesTabs).toBeDisplayed();
    await expect(await mainPage.vehiclesItem1).toBeDisplayed();
    await expect(await mainPage.vehiclesItem2).toBeDisplayed();
    await expect(await mainPage.vehiclesItem3).toBeDisplayed();
    await expect(await mainPage.vehiclesItem4).toBeDisplayed();
    await expect(await mainPage.vehiclesItem5).toBeDisplayed();
    await expect(await mainPage.vehiclesItem6).toBeDisplayed();
    await expect(await mainPage.vehiclesItem7).toBeDisplayed();

    await mainPage.clickVehicleItem1();
    await expect(browser).toHaveUrl(
      `${process.env.ENV}products/posivna-ta-sadilna-tekhnika/`
    );
    await expect(await productsPage.selectedItem).toBeDisplayed();
    await expect(await productsPage.listUnits).toBeDisplayed();

    await productsPage.clickFirstUnitItem();
    await expect(browser).toHaveUrl(new RegExp(/unit\/$/));

    const specialEquipmentType = data.SpecialEquipment.Type[0];
    await expect(unitPage.unitCategory).toHaveText(
      data.SpecialEquipment[specialEquipmentType][0].category
    );

    await mainPage.clickLogoIcon();
    await expect(browser).toHaveUrl(`${process.env.ENV}`);

    for (let i = 0; i < data.SpecialEquipment.Type.length; i++) {
      await expect(await mainPage.vehiclesSection).toBeDisplayed();
      await expect(await mainPage.vehiclesTabs[i]).toBeDisplayed();
      await expect(await mainPage.vehiclesItems).toBeDisplayed();

      const specialEquipmentType = data.SpecialEquipment.Type[i];

      for (
        let j = 0;
        j < data.SpecialEquipment[specialEquipmentType].length;
        j++
      ) {
        await mainPage.clickCloseTelegramPopUp();
        await mainPage.clickVehiclesTab(i);
        await mainPage.clickVehiclesItem(j);
        await browser.pause(1000);
        await expect(browser).toHaveUrl(
          expect.stringContaining(`${process.env.ENV}products/`)
        );
        await expect(productsPage.selectedItem).toHaveText(
          data.SpecialEquipment[specialEquipmentType][j].filter
        );

        if (
          (await mainPage.searchResultsPagination.getText()) !==
          "Знайдено 0 оголошень на видимій території"
        ) {
          await expect(await productsPage.listUnits).toBeDisplayed();
          await productsPage.clickFirstUnitItem();
          await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
          await expect(unitPage.unitCategory).toHaveText(
            data.SpecialEquipment[specialEquipmentType][j].category
          );
          await mainPage.clickLogoIcon();
          await expect(browser).toHaveUrl(`${process.env.ENV}`);
          await browser.pause(1000);
        }
      }
    }
  });
});

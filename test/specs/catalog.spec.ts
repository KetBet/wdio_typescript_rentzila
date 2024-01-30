import mainPage from "../pageobjects/main.page.js";
import data from "../../utils/test-data.json" assert { type: "json" };
import productsPage from "../pageobjects/products.page.js";

describe('Verify "Каталог"', () => {
  before(async () => {
    await mainPage.openMainUrl();
    await expect(await mainPage.logoIcon).toBeDisplayed();
  });
  it('should verify "Каталог"', async () => {
    let index: number;
    let filter: string;
    for (let i: number = 0; i < 4; i++) {
      await expect(await mainPage.catalogButton).toBeDisplayed();
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogDropdown).toBeDisplayed();
      await expect(await mainPage.catalogList1).toBeDisplayed();
      await mainPage.catalogList1[0].moveTo();
      await expect(await mainPage.catalogList2).toBeDisplayed();
      filter = await mainPage.catalogList2[i].getText();
      await mainPage.catalogList2[i].click();
      await expect(browser).toHaveUrl(
        `${process.env.ENV}products/${data.CatalogListSecond[i]}/`
      );
      await expect(await productsPage.selectedItem).toHaveText(filter);
      await mainPage.clickLogoIcon();
    }
    for (let i: number = 0; i < 11; i++) {
      await mainPage.clickCatalogButton();
      await mainPage.catalogList1[0].moveTo();
      await mainPage.catalogList2[0].moveTo();
      await expect(await mainPage.catalogList3[i]).toHaveText(
        data.Bud_technika1[i]
      );
      await mainPage.catalogList3[i].click();
      await expect(browser).toHaveUrl(
        `${process.env.ENV}products/${data.Bud_technika2[i]}/`
      );
      await mainPage.clickLogoIcon();
    }
    for (let i: number = 0; i < 6; i++) {
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogDropdown).toBeDisplayed();
      await expect(await mainPage.catalogList1).toBeDisplayed();
      await mainPage.catalogList1[0].moveTo();
      await expect(await mainPage.catalogList2).toBeDisplayed();
      await mainPage.catalogList2[1].moveTo();
      await expect(await mainPage.catalogList3[i]).toHaveText(
        data.Kom_technika1[i]
      );
      await mainPage.catalogList3[i].click();
      await expect(browser).toHaveUrl(
        `${process.env.ENV}products/${data.Kom_technika2[i]}/`
      );
      await mainPage.clickLogoIcon();
    }
    for (let i: number = 0; i < 17; i++) {
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogDropdown).toBeDisplayed();
      await expect(await mainPage.catalogList1).toBeDisplayed();
      await mainPage.catalogList1[0].moveTo();
      await expect(await mainPage.catalogList2).toBeDisplayed();
      await mainPage.catalogList2[2].moveTo();
      await expect(await mainPage.catalogList3[i]).toHaveText(data.Selhoz1[i]);
      await mainPage.catalogList3[i].click();
      await expect(browser).toHaveUrl(
        `${process.env.ENV}products/${data.Selhoz2[i]}/`
      );
      await mainPage.clickLogoIcon();
    }
    for (let i: number = 0; i < 2; i++) {
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogDropdown).toBeDisplayed();
      await expect(await mainPage.catalogList1).toBeDisplayed();
      await mainPage.catalogList1[0].moveTo();
      await expect(await mainPage.catalogList2).toBeDisplayed();
      await mainPage.catalogList2[3].moveTo();
      await expect(await mainPage.catalogList3[i]).toHaveText(
        data.Skladska1[i]
      );
      await mainPage.catalogList3[i].click();
      await expect(browser).toHaveUrl(
        `${process.env.ENV}products/${data.Skladska2[i]}/`
      );
      await mainPage.clickLogoIcon();
    }
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogDropdown).toBeDisplayed();
    await mainPage.catalogList1[1].moveTo();
    await expect(await mainPage.catalogList2).toBeDisplayed();
    for (let i: number = 0; i < 3; i++) {
      await mainPage.catalogList2[i].moveTo();
      await expect(await mainPage.catalogList3).toBeDisplayed();
    }
    index = Math.floor(Math.random() * (await mainPage.catalogList3).length);
    filter = await mainPage.catalogList3[index].getText();
    await mainPage.catalogList3[index].click();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await productsPage.selectedItem).toHaveText(filter);
    await mainPage.clickLogoIcon();
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogDropdown).toBeDisplayed();
    await mainPage.catalogList1[1].moveTo();
    await expect(await mainPage.catalogList2).toBeDisplayed();
    await mainPage.catalogList2[0].moveTo();
    await expect(await mainPage.catalogList3).toBeDisplayed();
    filter = await mainPage.catalogList3[3].getText();
    await mainPage.catalogList3[3].click();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await productsPage.selectedItem).toHaveText(filter);
    await mainPage.clickLogoIcon();
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogDropdown).toBeDisplayed();
    await mainPage.catalogList1[1].moveTo();
    await expect(await mainPage.catalogList2).toBeDisplayed();
    await mainPage.catalogList2[2].moveTo();
    await expect(await mainPage.catalogList3).toBeDisplayed();
    filter = await mainPage.catalogList3[2].getText();
    await mainPage.catalogList3[2].click();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await productsPage.selectedItem).toHaveText(filter);
    await mainPage.clickLogoIcon();
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogDropdown).toBeDisplayed();
    await mainPage.catalogList1[1].moveTo();
    await expect(await mainPage.catalogList2).toBeDisplayed();
    await mainPage.catalogList2[1].moveTo();
    await expect(await mainPage.catalogList3).toBeDisplayed();
    filter = await mainPage.catalogList3[4].getText();
    await mainPage.catalogList3[4].click();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await productsPage.selectedItem).toHaveText(filter);
  });
});

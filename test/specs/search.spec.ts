import mainPage from "../pageobjects/main.page.js";
import data from "../../utils/test-data.json" assert { type: "json" };
import { faker } from "@faker-js/faker";
import productsPage from "../pageobjects/products.page.js";
import unitPage from "../pageobjects/unit.page.js";
import { Key } from "webdriverio";

const randomSymbol = faker.string.symbol();

describe("Verify Search Input", () => {
  before(async () => {
    await mainPage.openMainUrl();
  });
  it("should verify Search Input", async () => {
    await mainPage.clickCloseTelegramPopUp();
    await mainPage.clickSearchInput();
    await mainPage.searchDropdown.waitForDisplayed();
    await expect(await mainPage.searchDropdownServices).toBeDisplayed();
    await browser.keys(Key.Enter);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchInputField).toHaveText("");
    await expect(await productsPage.listUnits).toBeDisplayed();
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput1}`);
    await browser.keys(Key.Enter);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.mapSection).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toHaveText(
      expect.stringContaining(`${data.Search.searchInput1}`)
    );
    await productsPage.clickFirstUnitItem();
    await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await expect(await mainPage.searchDropdown).toBeDisplayed();
    await expect(await mainPage.searchHistoryFirst).toHaveText(
      `${data.Search.searchInput1}`
    );
    await mainPage.searchInputField.setValue(`${data.Search.searchInput2}`);
    await browser.keys(Key.Enter);
    await browser.pause(2000);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.mapSection).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toHaveText(
      expect.stringContaining(`${data.Search.searchInput2}`)
    );
    await productsPage.clickFirstUnitItem();
    await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await expect(await mainPage.searchDropdown).toBeDisplayed();
    await expect(await mainPage.searchHistoryFirst).toHaveText(
      `${data.Search.searchInput2}`
    );
    await mainPage.searchInputField.setValue(`${data.Search.searchInput3}`);
    await browser.keys(Key.Enter);
    await productsPage.clickFirstUnitItem();
    await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
    await expect(await unitPage.unitTitle).toHaveText(
      expect.stringContaining(`${data.Search.searchInput3}`)
    );
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput4}`);
    await expect(await mainPage.searchedUnits).not.toBeExisting();
    await browser.keys(Key.Enter);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResultsPagination).toHaveText(
      `Знайдено 0 оголошень на видимій території за запитом " "`
    );
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput5}`);
    await expect(await mainPage.searchedUnits).toBeExisting();
    await browser.keys(Key.Enter);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResultsPagination).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toHaveText(
      expect.stringContaining(`${data.Search.searchInput5}`)
    );
    await productsPage.clickFirstUnitItem();
    await expect(browser).toHaveUrl(new RegExp(/unit\/$/));
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${randomSymbol}`);
    if (await mainPage.searchedUnits[0].isExisting()) {
      await expect(await mainPage.searchedUnits).toBeDisplayed();
    } else {
      await expect(await mainPage.searchedUnits).not.toBeDisplayed();
    }
    await browser.keys(Key.Enter);
    await browser.pause(1500);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    if (!["<", ">", "^", ";", "{", "}", "`"].includes(randomSymbol)) {
      await expect(await mainPage.searchInputField).toHaveValue(
        `${randomSymbol}`
      );
      await expect(await mainPage.searchResultsPagination).toHaveText(
        expect.stringContaining(`${randomSymbol}`)
      );
    } else {
      await expect(await mainPage.searchInputField).toHaveValue("");
      await expect(await productsPage.listUnits).toBeDisplayed();
    }
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput6}`);
    await expect(await mainPage.searchedUnits).not.toBeExisting();
    await browser.keys(Key.Enter);
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResultsPagination).toHaveText(
      `Знайдено 0 оголошень на видимій території за запитом "${data.Search.searchInput6}"`
    );
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput7}`);
    await expect(await mainPage.searchedUnits).toBeExisting();
    await expect(
      await mainPage.searchService(`${data.Search.searchInput7}`)
    ).toBeExisting();
    await (
      await mainPage.searchService(`${data.Search.searchInput7}`)
    ).click();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResultsPagination).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toHaveText(
      expect.stringContaining(`Знайдено`)
    );
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput8}`);
    await expect(await mainPage.searchedUnits).toBeExisting();
    await expect(
      await mainPage.searchCategory(
        `${data.Search.searchInput8.toLowerCase()}`
      )
    ).toBeExisting();
    await (
      await mainPage.searchCategory(
        `${data.Search.searchInput8.toLowerCase()}`
      )
    ).click();
    await expect(browser).toHaveUrl(
      expect.stringContaining(`${process.env.ENV}products/`)
    );
    await expect(await mainPage.searchResultsPagination).toBeDisplayed();
    await expect(await mainPage.searchResultsPagination).toHaveText(
      expect.stringContaining(`Знайдено`)
    );
    await mainPage.clickLogoIcon();
    await mainPage.clickSearchInput();
    await mainPage.searchInputField.setValue(`${data.Search.searchInput3}`);
    await expect(await mainPage.searchDropdown).toBeDisplayed();
    await expect(await mainPage.searchDropdownServices).toBeDisplayed();
    await expect(await mainPage.searchedUnits).toBeDisplayed();
    await mainPage.clickClearSearch();
    await expect(await mainPage.searchInputField).toHaveValue("");
    await expect(await mainPage.searchDropdown).not.toBeDisplayed();
    await expect(await mainPage.searchDropdownServices).not.toBeDisplayed();
  });
});

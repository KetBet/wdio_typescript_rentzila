import Page from "./page.js";

const servicesItem1Checked: string = "[data-testid='serviceCheckbox']";
const selectedItem: string = "div.ResetFilters_selectedCategory___D1E6 > p";
const listUnits: string = 'div[data-testid="cardWrapper"]';
const firstUnionItem: string =
  "div.MapPagination_units_container__zUtiI > div:nth-child(3) > a";

class ProductsPage extends Page {  public get servicesItem1Checked() {
    return super.get(servicesItem1Checked);
  }

  public get selectedItem() {
    return super.get(selectedItem);
  }

  public get listUnits() {
    return super.getAll(listUnits);
  }

  public get firstUnionItem() {
    return super.get(firstUnionItem);
  }

  public async clickFirstUnitItem() {
    await this.firstUnionItem.click();
  }

}
export default new ProductsPage();
import Page from "./page.js";

const relevantService: string =
  "div.UnitCharacteristics_services_container__hSEbl > div:nth-child(1)";
const unitCategory: string =
  "div.UnitCharacteristics_main_characteristics__uSWQh > div:nth-child(1) > div";
const unitTitle: string = "h1.UnitName_name__oM_YV";

class UnitPage extends Page {
  public get relevantService() {
    return super.get(relevantService);
  }

  public get unitCategory() {
    return super.get(unitCategory);
  }

  public get unitTitle() {
    return super.get(unitTitle);
  }
}

export default new UnitPage();

export default class Page {
  public get(element: string) {
    return $(element);
  }
  public getAll(element: string) {
    return $$(element);
  }
  public open(path: string) {
    return browser.url(`${path}`);
  }
}

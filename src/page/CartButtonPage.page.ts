import { $, ElementFinder, promise } from 'protractor';

export class CartButtonPage {
  private get cartButtonMenu(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public goToCartButtonMenu(): promise.Promise<void> {
    return this.cartButtonMenu.click();
  }
}

import { $, ElementFinder, promise } from 'protractor';

export class AddProductModal {
  private get addProductModalMenu(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToAddProductModal(): promise.Promise<void> {
    return this.addProductModalMenu.click();
  }
}
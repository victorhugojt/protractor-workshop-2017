import { $, browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { AddProductModal } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addProductModalPage: AddProductModal = new AddProductModal();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });
  
  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');   
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await
    await addProductModalPage.goToAddProductModal();    
    await(browser.sleep(3000));
    await $('#add_to_cart > button > span').click();
    await(browser.sleep(3000));
    await $('[style*="display: block;"] .button-container > a').click();
    await(browser.sleep(3000));
    await $('.cart_navigation span').click();
    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();
    await(browser.sleep(3000));

    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));

    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
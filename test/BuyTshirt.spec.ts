import { $, browser } from 'protractor';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await $('#block_top_menu > ul > li:nth-child(3) > a').click();
    await(browser.sleep(3000));
    await
    $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img').click();
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

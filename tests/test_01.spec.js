import { test, expect } from '@playwright/test';

test('products', async ({ page }) => {
  // ========== LOCATORS SECTION ==========
  // Locators for elements on the page
  const miceImg = page.locator('#miceImg');  
  const productLink = page.locator("//a[normalize-space()='Logitech G502 Proteus Core']");  
  const quantitySpan = page.locator("//div[@class='uiview ng-scope']//span[2]");  
  const saveToCartBtn = page.locator("button[name='save_to_cart']");  
  const shoppingCartLink = page.locator('#shoppingCartLink');  
  const checkOutBtn = page.locator('#checkOutPopUp');  
  const usernameField = page.locator("input[name='usernameInOrderPayment']");  
  const passwordField = page.locator("input[name='passwordInOrderPayment']");  
  const loginBtn = page.locator('#login_btn');  
  const userSection = page.locator('#userSection');  
  const userLabels = userSection.locator('#userDetails label.ng-binding');  
  const editShippingLink = userSection.locator('a', { hasText: 'Edit shipping details' });  
  const nextBtn = page.locator("//div[@class='mobileBtnHandler']//button[@id='next_btn']");  
  const safepayUser = page.locator("input[name='safepay_username']");  
  const safepayPass = page.locator("input[name='safepay_password']");  
  const safepaySave = page.locator("input[name='save_safepay']");  
  const payNowBtn = page.locator('#pay_now_btn_SAFEPAY');  
  const orderConfirmation = page.locator("span.roboto-regular.ng-scope");  
  const trackingNumber = page.locator('#trackingNumberLabel');  
  const orderNumber = page.locator('#orderNumberLabel');  
  const menuUserLink = page.locator('#menuUserLink');  

  // ========== ACTIONS SECTION ==========
  // Navigate to homepage and complete purchase flow
  await page.goto('https://advantageonlineshopping.com/');
  
  // Select product and add to cart
  await miceImg.click();  
  await productLink.click();  
  await quantitySpan.click();  
  await saveToCartBtn.click();  
  
  // Proceed to checkout
  await shoppingCartLink.hover();  
  await checkOutBtn.click();  
  
  // Login during checkout process
  await usernameField.fill('Jason');  
  await passwordField.fill('Cp@5057');  
  await loginBtn.click();  

  // Verify user details
  await expect(userSection).toBeVisible();  

  const userName = await userLabels.nth(0).textContent();  
  expect(userName?.trim()).toBe('Jason Smith');  

  const phone = await userLabels.nth(6).textContent();  
  expect(phone?.trim()).toBe('01215148642146');  

  await expect(editShippingLink).toBeVisible();  
  await nextBtn.click();  

  // Complete SafePay payment
  await safepayUser.fill('Jason');  
  await safepayPass.fill('Abcd@1234');  
  await safepaySave.check();  
  await expect(safepaySave).toBeChecked();  

  await payNowBtn.click();

  // Verify order confirmation
  await expect(orderConfirmation).toBeVisible();  
  const orderText = await orderConfirmation.textContent();  
  expect(orderText?.trim()).toBe('Thank you for buying with Advantage');  

  // Log order details
  const trackingText = await trackingNumber.textContent();  
  console.log('Tracking Number:', trackingText?.trim());  

  const orderNumberText = await orderNumber.textContent();  
  console.log('Order Number:', orderNumberText?.trim());  

  // Validate order number exists
  if (!orderNumberText?.trim()) {
    throw new Error('Order number is undefined or empty.');
  }

  // Verify order appears in user's order history
  await menuUserLink.click();  
  await page.click("//label[@role='link'][normalize-space()='My orders']");  

  const orderInList = page.locator(`//label[@class='left ng-binding'][normalize-space()='${orderNumberText.trim()}']`);
  const orderPageText = await orderInList.textContent();  
  console.log('Order Page:', orderPageText?.trim());  

  expect(orderPageText?.trim()).toBe(orderNumberText.trim());  

  await page.close();  
});
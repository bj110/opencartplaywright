# Test info

- Name: Add product to cart test @master @regression
- Location: C:\Automation\opencartplaywright\tests\AddToCart.spec.ts:47:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at C:\Automation\opencartplaywright\tests\AddToCart.spec.ts:72:58
```

# Test source

```ts
   1 | /**
   2 |  * Test Case: Add Product to Cart
   3 |  * 
   4 |  * Tags: @master @regression
   5 |  * 
   6 |  * Steps:
   7 |  * 1. Navigate to application URL
   8 |  * 2. Enter an existing product name in the search box
   9 |  * 3. Click the search button
  10 |  * 4. Verify the product appears in the search results
  11 |  * 5. Select the product
  12 |  * 6. Set quantity
  13 |  * 7. Add the product to the cart
  14 |  * 8. Verify the success message
  15 |  */
  16 |
  17 | import { test, expect } from '@playwright/test';
  18 | import { TestConfig } from '../test.config';
  19 | import { HomePage } from '../pages/HomePage';
  20 | import { SearchResultsPage } from '../pages/SearchResultsPage';
  21 | import { ProductPage } from '../pages/ProductPage';
  22 |
  23 | // Shared instances
  24 | let config: TestConfig;
  25 | let homePage: HomePage;
  26 | let searchResultsPage: SearchResultsPage;
  27 | let productPage: ProductPage;
  28 |
  29 | test.beforeEach(async({page})=>{
  30 |     config = new TestConfig();
  31 |     await page.goto(config.appUrl);//Step1: Open application URL
  32 |
  33 |     //Initialize page objects
  34 |     homePage = new HomePage(page);
  35 |     searchResultsPage = new SearchResultsPage(page);
  36 |     productPage = new ProductPage(page);
  37 | });
  38 |
  39 |
  40 | test.afterEach(async({page})=>{
  41 |
  42 |     await page.close();//Optional cleanup
  43 |
  44 | });
  45 |
  46 |
  47 | test('Add product to cart test @master @regression', async()=>{
  48 |
  49 | // Step 2: Enter product name in search box
  50 | await homePage.enterProductName(config.productName);
  51 |
  52 | // Step 3: Click the search button
  53 | await homePage.clickSearch();
  54 |
  55 | // Step 4: Verify search results page is displayed
  56 |  expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  57 |
  58 | // Step 5: Verify that the product exists in the results
  59 |
  60 |  const productName= config.productName;
  61 | expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  62 |
  63 | // Step 6-7-8: Select product → Set quantity → Add to cart → Verify confirmation
  64 |
  65 | if(await searchResultsPage.isProductExist(productName))
  66 | {
  67 |     await searchResultsPage.selectProduct(productName);
  68 |     await productPage.setQuantity(config.productQuantity);
  69 |     await productPage.addToCart();
  70 |
  71 | //Step 8: Assert success message is visible
> 72 | expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
     |                                                          ^ Error: expect(received).toBeTruthy()
  73 |
  74 | }
  75 |
  76 | });
  77 |
  78 |
```
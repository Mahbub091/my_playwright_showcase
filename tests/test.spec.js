import { test, expect } from '@playwright/test';
import landingPage from '../pom/landingPage';
import landingPageData from '../testData/landingPageData.json';
import globalData from '../testData/globalData.json';
const { utils } = require ('../utilities/utils');

test.beforeEach(async ({page}) => {
    const test = new utils(page);
    await test.navigateTo(globalData.landingPageUrl)
  });


  test.describe('Validating Menu Click', ()=> {

    test('Validating Navigation with URL & Title', async ({ page }) => {
      const test = new utils(page);

      await test.verifyContainsUrl(globalData.landingPageUrl);
      await test.verifyTitle(globalData.landingPageTitle);
    });

    test('Validating Header Menu Items', async({page}) =>{
      const test = new utils(page);
      await test.validateAndClick (landingPage.getNavBarDocs, 'Docs')
      await test.validateAndClick (landingPage.getNavBarApi, 'API')
      await test.validateAndClick (landingPage.getNavBarNode, 'Node.js')
      await test.validateAndClick (landingPage.javaMenu, 'Java')
      await test.validateAndClick (landingPage.getNavBarCommunity, 'Community')



    })

  })

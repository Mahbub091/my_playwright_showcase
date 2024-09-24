import { test as base, expect } from '@playwright/test';
import landingPage from '../pom/landingPage';
import globalData from '../testData/globalData.json';
const { utils } = require('../utilities/utils');

const test = base.extend({
  utilsFixture: async ({ page }, use) => {
    const utilsInstance = new utils(page);
    await utilsInstance.navigateTo(globalData.landingPageUrl);
    await use(utilsInstance);
  }
});

// Tests
test.describe('Validating Menu Click', () => {

  test('Validating Navigation with URL & Title', async ({ utilsFixture }) => {
    await utilsFixture.verifyContainsUrl(globalData.landingPageUrl);
    await utilsFixture.verifyTitle(globalData.landingPageTitle);
  });

  test('Validating Header Menu Items', async({ utilsFixture }) => {
    await utilsFixture.validateAndClick(landingPage.getNavBarDocs, 'Docs');
    await utilsFixture.validateAndClick(landingPage.getNavBarApi, 'API');
    await utilsFixture.validateAndClick(landingPage.getNavBarNode, 'Node.js');
    await utilsFixture.validateAndClick(landingPage.javaMenu, 'Java');
    await utilsFixture.validateAndClick(landingPage.getNavBarCommunity, 'Community');
  });

  test('Validating Href Attribute', async({ utilsFixture }) => {
    await utilsFixture.validateButtonAttribute(landingPage.gettingStartedButton, '/docs/intro');
    await utilsFixture.validateButtonAttribute(landingPage.starButton, 'https://github.com/microsoft/playwright');
    await utilsFixture.validateButtonAttribute(landingPage.followButton, 'https://github.com/microsoft/playwright/stargazers');
    await utilsFixture.validateAndClick(landingPage.gettingStartedButton, 'Get started');
    await utilsFixture.wait(2);
    await utilsFixture.scrollAndClick(landingPage.codeGenText, 'Codegen.');
    await utilsFixture.verifyContainsUrl('https://playwright.dev/docs/intro');
  });

});

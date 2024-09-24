import { test, expect } from './fixtures'; // Import the fixture
import globalData from '../testData/globalData.json'
import landingPage from '../pom/landingPage';

test.describe('Validating Menu Click', () => {
  test.beforeEach(async ({ runner }) => {
    await runner.navigateTo(globalData.landingPageUrl)
  });

  test('Validating Navigation with URL & Title', async ({ runner }) => {
    await runner.navigateTo(globalData.landingPageUrl)
    await runner.verifyContainsUrl(globalData.landingPageUrl);
    await runner.verifyTitle(globalData.landingPageTitle);
  });

  test('Validating Header Menu Items', async ({ runner }) => {
    await runner.validateAndClick(landingPage.getNavBarDocs, 'Docs');
    await runner.validateAndClick(landingPage.getNavBarApi, 'API');
    await runner.validateAndClick(landingPage.getNavBarNode, 'Node.js');
    await runner.validateAndClick(landingPage.javaMenu, 'Java');
    await runner.validateAndClick(landingPage.getNavBarCommunity, 'Community');
  });

  test('Validating Href Attribute', async ({ runner }) => {
    await runner.validateButtonAttribute(landingPage.gettingStartedButton, '/docs/intro');
    await runner.validateButtonAttribute(landingPage.starButton, 'https://github.com/microsoft/playwright');
    await runner.validateButtonAttribute(landingPage.followButton, 'https://github.com/microsoft/playwright/stargazers');
    await runner.validateAndClick(landingPage.gettingStartedButton, 'Get started');
    await runner.wait(2);
    await runner.scrollAndClick(landingPage.codeGenText, 'Codegen.');
    await runner.verifyContainsUrl('https://playwright.dev/docs/intro');
  });

});

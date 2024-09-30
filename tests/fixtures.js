// tests/fixtures.js
import { test as base } from '@playwright/test';
import LandingPage from '../pom/landingPage';
const { utils } = require('../utilities/utils');
import { LambdaHomePage } from '../pom/lambdaHomePage';

// Extend base test with custom fixtures for Utils and LandingPage
const test = base.extend({
  runner: async ({ page }, use) => {
    const utilsInstance = new utils(page);
    // await utilsInstance.navigateTo(globalData.landingPageUrl);
    await use(utilsInstance);
  },
  landingPage: async ({ page }, use) => {
    const landingPageInstance = new LandingPage(page);
    await use(landingPageInstance);
  },

  lambdaPage: async ({ page }, use) => {
    const lambdaPageInstance = new LambdaHomePage(page);
    await use(lambdaPageInstance);
  }
});

export { test };

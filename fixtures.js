// tests/fixtures.js
import { test as base } from '@playwright/test';
import Utils from './utilities/utils';

const test = base.extend({
    loginPage: async ({ page }, use) => {
        const utils = new Utils(page);
        await use(utils);
    },
});

export { test };

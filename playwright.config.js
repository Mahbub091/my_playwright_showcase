const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',

  reporter: [
    ['list', { printSteps: true }],
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: 'Regression_Test_Chrome',
      },
    ],
  ],

  use: {
    baseURL: '',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Regression_Test_Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

import { test, expect } from './fixtures'; // Import the fixture
import lambdaData from '../testData/lambdaTestData.json';
import LambdaPage from '../pom/lambdaHomePage';

test.describe('Validating Menu Click', () => {
  test.beforeEach(async ({ runner }) => {
    await runner.navigateTo(lambdaData.lambdaTestUrl)
  });

  test('Validating Navigation with URL & Title', async ({ runner }) => {
    await runner.verifyContainsUrl(lambdaData.lambdaTestUrl);
    await runner.verifyTitle(lambdaData.pageTitle);
    await runner.waitForPageLoad();
  });

  test('Validating and Entering value to text input field', async ({ runner }) => {
    await runner.typeInputBox(LambdaPage.textInputField, "cameras");
    await runner.clickOnElement(LambdaPage.searchButton);

  });

});

import { test, expect } from './fixtures'; // Import the fixture
import lambdaData from '../testData/lambda.json';
import LambdaPage from '../pom/lambdaHomePage';
const fs = require('fs');
const path = require('path');




const loadExpectedTexts = () => {
  const jsonFilePath = path.resolve(__dirname, '../testData/lambda.json');  // Adjust the path to your JSON file
  const data = fs.readFileSync(jsonFilePath, 'utf-8');
  return JSON.parse(data).expectedTexts;
};

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
    await runner.mouseHover(LambdaPage.accountButton);
    await runner.validateAndClick(LambdaPage.loginButton, 'Login');
    await runner.clickOnElement(LambdaPage.accountButton);
  });

  test('Validating Login Form & Successful Login Attempt', async ({ runner }) => {
    await runner.mouseHover(LambdaPage.accountButton);
    await runner.validateAndClick(LambdaPage.loginButton, 'Login');
    await runner.clickOnElement(LambdaPage.accountButton);
    // Load expected texts from the JSON file
    const expectedTexts = loadExpectedTexts();

    // Validate the text of the links in the right column
    await runner.verifyLinksText(LambdaPage.rightColumnList, expectedTexts);





    // await runner.focusOnElement(LambdaPage.emailField);
    // await runner.typeInputBox(LambdaPage.emailField, 'mahbubasr091@gmail.com');
    // await runner.fillInputBox(LambdaPage.passwordField, '123456789000000');
    // await runner.clickOnElement(LambdaPage.accountLoginButton);
  });

});

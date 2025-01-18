import { expect } from "@playwright/test";
import { allure } from "allure-playwright"; // Import allure-playwright for logging

exports.utils = class utils {
  constructor(page) {
    this.page = page;
  }

  async captureScreenshotOnFailure(testName) {
    try {
      const screenshot = await this.page.screenshot();
      allure.attachment(`${testName} Screenshot`, screenshot, "image/png"); // Attach screenshot to Allure report
    } catch (error) {
      console.log("Error capturing screenshot:", error);
    }
  }

  logToAllure(message) {
    allure.attachment("Custom Log", message, "text/plain"); // Log the message as an attachment
  }

  async navigateTo(url) {
    try {
      await this.page.goto(url);
      this.logToAllure(`Navigated to ${url}`); // Log the URL navigated to
    } catch (error) {
      const errorMsg = `Failed to navigate to ${url}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("navigateTo");
      throw new Error(errorMsg);
    }
  }

  async clickOnElement(identifier) {
    try {
      await this.page.locator(identifier).click();
      this.logToAllure(`Clicked on element with identifier: ${identifier}`);
    } catch (error) {
      const errorMsg = `Failed to click on element with identifier: ${identifier}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("clickOnElement");
      throw new Error(errorMsg);
    }
  }

  async mouseHover(identifier) {
    try {
      await this.page.locator(identifier).hover();
      this.logToAllure(`Hovered over element with identifier: ${identifier}`);
    } catch (error) {
      const errorMsg = `Failed to hover over element with identifier: ${identifier}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("mouseHover");
      throw new Error(errorMsg);
    }
  }

  async fillInputBox(identifier, text) {
    try {
      await this.page.locator(identifier).fill(text);
      this.logToAllure(
        `Filled input box with identifier ${identifier} with text: ${text}`,
      );
    } catch (error) {
      const errorMsg = `Failed to fill input box with identifier ${identifier} with text: ${text}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("fillInputBox");
      throw new Error(errorMsg);
    }
  }

  async typeInputBox(identifier, text) {
    try {
      await this.page.locator(identifier).type(text);
      this.logToAllure(
        `Typed text: "${text}" in input box with identifier: ${identifier}`,
      );
    } catch (error) {
      const errorMsg = `Failed to type text: "${text}" in input box with identifier: ${identifier}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("typeInputBox");
      throw new Error(errorMsg);
    }
  }

  async dblClickOnElement(identifier) {
    try {
      await this.page.locator(identifier).dblclick();
      this.logToAllure(
        `Double-clicked on element with identifier: ${identifier}`,
      );
    } catch (error) {
      const errorMsg = `Failed to double-click on element with identifier: ${identifier}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("dblClickOnElement");
      throw new Error(errorMsg);
    }
  }

  async focusOnElement(identifier) {
    try {
      await this.page.locator(identifier).focus();
      this.logToAllure(`Focused on element with identifier: ${identifier}`);
    } catch (error) {
      const errorMsg = `Failed to focus on element with identifier: ${identifier}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("focusOnElement");
      throw new Error(errorMsg);
    }
  }

  async verifyTitle(title) {
    try {
      await expect(this.page).toHaveTitle(title);
      this.logToAllure(`Verified page title: ${title}`);
    } catch (error) {
      const errorMsg = `Failed to verify title: ${title}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyTitle");
      throw new Error(errorMsg);
    }
  }

  async verifyContainsUrl(url) {
    try {
      await expect(this.page).toHaveURL(url);
      this.logToAllure(`Verified URL contains: ${url}`);
    } catch (error) {
      const errorMsg = `Failed to verify URL contains: ${url}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyContainsUrl");
      throw new Error(errorMsg);
    }
  }

  async verifyToHaveText(identifier, expectedText) {
    try {
      await expect.soft(this.page.locator(identifier)).toHaveText(expectedText);
      this.logToAllure(
        `Verified element with identifier ${identifier} has text: "${expectedText}"`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} has text: "${expectedText}"`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyToHaveText");
      throw new Error(errorMsg);
    }
  }

  async verifyToHaveValue(identifier, inputFieldText) {
    try {
      await expect
        .soft(this.page.locator(identifier))
        .toHaveValue(inputFieldText);
      this.logToAllure(
        `Verified element with identifier ${identifier} has value: "${inputFieldText}"`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} has value: "${inputFieldText}"`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyToHaveValue");
      throw new Error(errorMsg);
    }
  }

  async verifyContainText(identifier, expectedText) {
    try {
      await expect
        .soft(this.page.locator(identifier))
        .toContainText(expectedText);
      this.logToAllure(
        `Verified element with identifier ${identifier} contains text: "${expectedText}"`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} contains text: "${expectedText}"`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyContainText");
      throw new Error(errorMsg);
    }
  }

  async verifyToHaveCss(identifier, key, value) {
    try {
      await expect.soft(this.page.locator(identifier)).toHaveCSS(key, value);
      this.logToAllure(
        `Verified element with identifier ${identifier} has CSS property: "${key}" with value: "${value}"`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} has CSS property: "${key}" with value: "${value}"`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyToHaveCss");
      throw new Error(errorMsg);
    }
  }

  async verifyElementIsVisible(identifier) {
    try {
      await expect.soft(this.page.locator(identifier)).toBeVisible();
      this.logToAllure(
        `Verified element with identifier ${identifier} is visible`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} is visible`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyElementIsVisible");
      throw new Error(errorMsg);
    }
  }

  async verifyRadioBtnChecked(identifier) {
    try {
      await expect.soft(this.page.locator(identifier)).toBeChecked();
      this.logToAllure(
        `Verified radio button with identifier ${identifier} is checked`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify radio button with identifier ${identifier} is checked`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyRadioBtnChecked");
      throw new Error(errorMsg);
    }
  }

  async verifyTextBoxEditable(identifier) {
    try {
      await expect.soft(this.page.locator(identifier)).toBeEditable();
      this.logToAllure(
        `Verified text box with identifier ${identifier} is editable`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify text box with identifier ${identifier} is editable`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyTextBoxEditable");
      throw new Error(errorMsg);
    }
  }

  async verifyTextBoxEnabled(identifier) {
    try {
      await expect.soft(this.page.locator(identifier)).toBeEnabled();
      this.logToAllure(
        `Verified text box with identifier ${identifier} is enabled`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify text box with identifier ${identifier} is enabled`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyTextBoxEnabled");
      throw new Error(errorMsg);
    }
  }

  async verifyElementFocused(identifier) {
    try {
      await expect.soft(this.page.locator(identifier)).toBeFocused();
      this.logToAllure(
        `Verified element with identifier ${identifier} is focused`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} is focused`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyElementFocused");
      throw new Error(errorMsg);
    }
  }

  async validateAndClick(identifier, expectedText) {
    try {
      await this.page.locator(identifier).focus();

      await expect.soft(this.page.locator(identifier)).toBeVisible(); //Waiting Here To Make Sure That Our Expected Element Is Visible
      const actualText = await this.page.locator(identifier).textContent(); // Initiating elements Text Content

      // We're clicking on the element after validating the element's text contents
      if (actualText.trim() === expectedText) {
        await this.page.locator(identifier).click();
        this.logToAllure(
          `Validated and clicked on element with identifier: ${identifier} having expected text: "${expectedText}"`,
        );
      } else {
        const errorMsg = `Text does not match. Expected: "${expectedText}", but found: "${actualText}"`;
        this.logToAllure(errorMsg);
        await this.captureScreenshotOnFailure("validateAndClick");
        throw new Error(errorMsg);
      }
    } catch (error) {
      throw error;
    }
  }

  async validateButtonAttribute(identifier, hrefAttribute) {
    try {
      const button = await this.page.locator(identifier);
      await expect(button).toBeVisible();

      const hrefValue = await button.getAttribute("href");
      expect(hrefValue).toBe(hrefAttribute);
      this.logToAllure(
        `Verified button with identifier ${identifier} has href attribute: "${hrefValue}"`,
      );
    } catch (error) {
      const errorMsg = `Failed to verify button with identifier ${identifier} has href attribute: "${hrefAttribute}"`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("validateButtonAttribute");
      throw new Error(errorMsg);
    }
  }

  async scrollAndClick(identifier) {
    try {
      const targetElement = this.page.locator(identifier);
      await targetElement.scrollIntoViewIfNeeded();
      await expect(targetElement).toBeVisible();

      await targetElement.click();
      this.logToAllure(
        `Scrolled to and clicked on element with identifier: ${identifier}`,
      );
    } catch (error) {
      const errorMsg = `Failed to scroll and click on element with identifier: ${identifier}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("scrollAndClick");
      throw new Error(errorMsg);
    }
  }

  async wait(time, options = {}) {
    const { waitForSelector, waitForNetworkIdle, waitForLoadState } = options;

    try {
      await this.page.waitForTimeout(time * 1000);

      if (waitForSelector) {
        await this.page.waitForSelector(waitForSelector, {
          state: "visible",
          timeout: time * 1000,
        });
        this.logToAllure(`Waited for selector: ${waitForSelector}`);
      }

      if (waitForNetworkIdle) {
        await this.page.waitForLoadState("networkidle", {
          timeout: time * 1000,
        });
        this.logToAllure(`Waited for network idle state`);
      }

      if (waitForLoadState) {
        await this.page.waitForLoadState(waitForLoadState, {
          timeout: time * 1000,
        });
        this.logToAllure(`Waited for page load state: ${waitForLoadState}`);
      }
    } catch (error) {
      const errorMsg = `Failed to wait for the specified conditions`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("wait");
      throw new Error(errorMsg);
    }
  }

  async waitForPageLoad(page, state = "load") {
    try {
      await this.page.waitForLoadState(state);
      this.logToAllure(`Waited for page to reach load state: ${state}`);
    } catch (error) {
      const errorMsg = `Failed to wait for page to reach load state: ${state}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("waitForPageLoad");
      throw new Error(errorMsg);
    }
  }

  async verifyLinkTextByIndex(locator, index, expectedText) {
    try {
      const selector = `${locator}:nth-of-type(${index})`;
      const actualText = await this.page.textContent(selector);
      if (!actualText.includes(expectedText)) {
        const errorMsg = `Text mismatch at index ${index}: expected "${expectedText}", but got "${actualText}"`;
        this.logToAllure(errorMsg);
        await this.captureScreenshotOnFailure("verifyLinkTextByIndex");
        throw new Error(errorMsg);
      }
      this.logToAllure(
        `Verified text for link at index ${index}: "${actualText}" matches expected "${expectedText}"`,
      );
    } catch (error) {
      throw error;
    }
  }

  async verifyLinksText(locator, expectedTexts) {
    try {
      for (let i = 0; i < expectedTexts.length; i++) {
        await this.verifyLinkTextByIndex(locator, i + 1, expectedTexts[i]);
      }
      this.logToAllure(`Verified all links text at indices ${locator}`);
    } catch (error) {
      const errorMsg = `Failed to verify links text at locator: ${locator}`;
      this.logToAllure(errorMsg);
      await this.captureScreenshotOnFailure("verifyLinksText");
      throw new Error(errorMsg);
    }
  }
};

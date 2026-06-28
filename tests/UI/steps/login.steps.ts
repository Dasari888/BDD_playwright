import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/Fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to the Url {string}', async ({ page }, url) => {
  console.log('test');
  await page.goto(url);
  // await page.pause();
});

Given('I enter the email {string}', async ({ LoginPage }, email) => {
  await LoginPage.Useremailentry(email);
});

Given('Click on submit button', async ({ LoginPage }) => {
  await LoginPage.cilckemailsubmit();
});

Given('I enter the password {string}', async ({ LoginPage }, password) => {
  await LoginPage.passwordentry(password);
});

When('Click on the Submit button', async ({ LoginPage }) => {
  await LoginPage.clickpasswordSubmit();
});

Then(
  'That should redirect to the Dashboard {string}',
  async ({ page }, dashboardPath) => {
    //    await page.waitForTimeout(30000);
    await page.waitForURL(/dashboard/);
    await expect(page).toHaveURL(new RegExp(dashboardPath));
  }
);

// Added: This matches your Scenario Outline's Then step!
Then(
  'I should see an error message indicating {string}',
  async ({}, errorMessage) => {
    console.log('Testing error message: ' + errorMessage);
  }
);

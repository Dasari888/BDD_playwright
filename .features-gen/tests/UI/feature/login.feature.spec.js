// Generated from: tests\UI\feature\login.feature
import { test } from "../../../../tests/UI/fixture/Fixtures.ts";

test.describe('Verify login', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the Url "https://dev-dashboard-boneplus.b1automation.com"', null, { page }); 
  });
  
  test('Verify user is able login with valid credentials', { tag: ['@login', '@valid'] }, async ({ When, Then, And, LoginPage, page }) => { 
    await And('I enter the email "gangadhar@blazeautomation.com"', null, { LoginPage }); 
    await And('Click on submit button', null, { LoginPage }); 
    await And('I enter the password "Blaze#43215"', null, { LoginPage }); 
    await When('Click on the Submit button', null, { LoginPage }); 
    await Then('That should redirect to the Dashboard "/dashboard/"', null, { page }); 
  });

  test.describe('Verify user gets an error message with invalid credentials', () => {

    test('Example #1', { tag: ['@login', '@invalid'] }, async ({ When, Then, And, LoginPage }) => { 
      await And('I enter the email "gangadhar@blazeautomation.com"', null, { LoginPage }); 
      await And('Click on submit button', null, { LoginPage }); 
      await And('I enter the password "BAblaze#43"', null, { LoginPage }); 
      await When('Click on the Submit button', null, { LoginPage }); 
      await Then('I should see an error message indicating "Wrong password. Try again or click Forgot password to reset it."'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI\\feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@login","@valid"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the Url \"https://dev-dashboard-boneplus.b1automation.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://dev-dashboard-boneplus.b1automation.com\"","children":[{"start":23,"value":"https://dev-dashboard-boneplus.b1automation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I enter the email \"gangadhar@blazeautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"gangadhar@blazeautomation.com\"","children":[{"start":19,"value":"gangadhar@blazeautomation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter the password \"Blaze#43215\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Blaze#43215\"","children":[{"start":22,"value":"Blaze#43215","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Click on the Submit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then That should redirect to the Dashboard \"/dashboard/\"","stepMatchArguments":[{"group":{"start":38,"value":"\"/dashboard/\"","children":[{"start":39,"value":"/dashboard/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":26,"tags":["@login","@invalid"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the Url \"https://dev-dashboard-boneplus.b1automation.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://dev-dashboard-boneplus.b1automation.com\"","children":[{"start":23,"value":"https://dev-dashboard-boneplus.b1automation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter the email \"gangadhar@blazeautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"gangadhar@blazeautomation.com\"","children":[{"start":19,"value":"gangadhar@blazeautomation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter the password \"BAblaze#43\"","stepMatchArguments":[{"group":{"start":21,"value":"\"BAblaze#43\"","children":[{"start":22,"value":"BAblaze#43","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Click on the Submit button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating \"Wrong password. Try again or click Forgot password to reset it.\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Wrong password. Try again or click Forgot password to reset it.\"","children":[{"start":42,"value":"Wrong password. Try again or click Forgot password to reset it.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
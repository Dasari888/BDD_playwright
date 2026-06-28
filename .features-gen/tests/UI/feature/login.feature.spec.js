// Generated from: tests\UI\feature\login.feature
import { test } from "../../../../tests/UI/fixture/Fixtures.ts";

test.describe('Verify login', () => {

  test.beforeEach('Background', async ({ Given, LoginPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the Url "https://boneplus.b1automation.com/"', null, { LoginPage, page }); 
  });
  
  test('Verify user is able login with valid credentials', { tag: ['@login', '@valid'] }, async ({ When, Then, And, LoginPage, page }) => { 
    await And('I enter the email "gangadhar@blazeautomation.com"', null, { LoginPage }); 
    await And('Click on submit button', null, { LoginPage }); 
    await And('I enter the password "BAblaze#4329"', null, { LoginPage }); 
    await When('Click on the Submit button', null, { LoginPage }); 
    await Then('That should redirect to the Dashboard "/dashboard/"', null, { LoginPage, page }); 
  });

  test.describe('Verify user gets an error message with invalid credentials', () => {

    test('Example #1', { tag: ['@login', '@invalid'] }, async ({ When, Then, And, LoginPage, page }) => { 
      await And('I enter the email "wronguser@blazeautomation.com"', null, { LoginPage }); 
      await And('Click on submit button', null, { LoginPage }); 
      await And('I enter the password "BAblaze#4329"', null, { LoginPage }); 
      await When('Click on the Submit button', null, { LoginPage }); 
      await Then('I should see an error message indicating "Invalid email or password"', null, { page }); 
    });

    test('Example #2', { tag: ['@login', '@invalid'] }, async ({ When, Then, And, LoginPage, page }) => { 
      await And('I enter the email "gangadhar@blazeautomation.com"', null, { LoginPage }); 
      await And('Click on submit button', null, { LoginPage }); 
      await And('I enter the password "WrongPassword"', null, { LoginPage }); 
      await When('Click on the Submit button', null, { LoginPage }); 
      await Then('I should see an error message indicating "Invalid email or password"', null, { page }); 
    });

    test('Example #3', { tag: ['@login', '@invalid'] }, async ({ When, Then, And, LoginPage, page }) => { 
      await And('I enter the email "empty"', null, { LoginPage }); 
      await And('Click on submit button', null, { LoginPage }); 
      await And('I enter the password "BAblaze#4329"', null, { LoginPage }); 
      await When('Click on the Submit button', null, { LoginPage }); 
      await Then('I should see an error message indicating "Please enter a valid email"', null, { page }); 
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
  {"pwTestLine":10,"pickleLine":9,"tags":["@login","@valid"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the Url \"https://boneplus.b1automation.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://boneplus.b1automation.com/\"","children":[{"start":23,"value":"https://boneplus.b1automation.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I enter the email \"gangadhar@blazeautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"gangadhar@blazeautomation.com\"","children":[{"start":19,"value":"gangadhar@blazeautomation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter the password \"BAblaze#4329\"","stepMatchArguments":[{"group":{"start":21,"value":"\"BAblaze#4329\"","children":[{"start":22,"value":"BAblaze#4329","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Click on the Submit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then That should redirect to the Dashboard \"/dashboard/\"","stepMatchArguments":[{"group":{"start":38,"value":"\"/dashboard/\"","children":[{"start":39,"value":"/dashboard/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":26,"tags":["@login","@invalid"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the Url \"https://boneplus.b1automation.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://boneplus.b1automation.com/\"","children":[{"start":23,"value":"https://boneplus.b1automation.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter the email \"wronguser@blazeautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"wronguser@blazeautomation.com\"","children":[{"start":19,"value":"wronguser@blazeautomation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter the password \"BAblaze#4329\"","stepMatchArguments":[{"group":{"start":21,"value":"\"BAblaze#4329\"","children":[{"start":22,"value":"BAblaze#4329","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Click on the Submit button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating \"Invalid email or password\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Invalid email or password\"","children":[{"start":42,"value":"Invalid email or password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":27,"tags":["@login","@invalid"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the Url \"https://boneplus.b1automation.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://boneplus.b1automation.com/\"","children":[{"start":23,"value":"https://boneplus.b1automation.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter the email \"gangadhar@blazeautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"gangadhar@blazeautomation.com\"","children":[{"start":19,"value":"gangadhar@blazeautomation.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter the password \"WrongPassword\"","stepMatchArguments":[{"group":{"start":21,"value":"\"WrongPassword\"","children":[{"start":22,"value":"WrongPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Click on the Submit button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating \"Invalid email or password\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Invalid email or password\"","children":[{"start":42,"value":"Invalid email or password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":28,"tags":["@login","@invalid"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the Url \"https://boneplus.b1automation.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://boneplus.b1automation.com/\"","children":[{"start":23,"value":"https://boneplus.b1automation.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter the email \"empty\"","stepMatchArguments":[{"group":{"start":18,"value":"\"empty\"","children":[{"start":19,"value":"empty","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter the password \"BAblaze#4329\"","stepMatchArguments":[{"group":{"start":21,"value":"\"BAblaze#4329\"","children":[{"start":22,"value":"BAblaze#4329","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Click on the Submit button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating \"Please enter a valid email\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Please enter a valid email\"","children":[{"start":42,"value":"Please enter a valid email","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
import { test, expect } from '@playwright/test';
import { Buffer } from 'buffer';

test('loginUI', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');
  
});

test('login api', async ({ request }) => {
  const BASE_URL = 'https://dev-dashboard-boneplus.b1automation.com';
  const client_id = 'ef19253e80c4be4ace2e03612';
  const client_secret = 'ee6f26b1ff78c74898c99cfc64f0e7015f564822';
  const response = await request.post(`${BASE_URL}/v1/user/login`, {
    headers: {
      //   Authorization:`Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    data: {
      email: 'playtest567@gmail.com',
      password:
        '5be2732c7c70b41127bd33a7a92c7303ed8a4383755e1bdb50b3e0dc29dd965f#43215',
      app_token: 'werty',
    },
  });

  // const respjson=await Apirespnse.json();
  // expect.soft(Apirespnse.status()).toBe(200)
  // expect.soft(respjson.status).toBe(1)

  const loginAPIResponse = await response.json();
  expect(response.status()).toBe(200);
  console.log('Login API Response:', loginAPIResponse);
  expect(loginAPIResponse.status).toBe(1);
});

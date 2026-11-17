import { expect, test } from '@playwright/test';

const email = process.env.MOCKATOO_TEST_EMAIL;
const password = process.env.MOCKATOO_TEST_PASSWORD;

test('the dev-only Mockatoo button opens the Mockatoo login page', async ({
  page,
}) => {
  await page.goto('/login');
  await page.getByRole('button', { name: 'Sign in with Mockatoo' }).click();

  await expect(page).toHaveURL(/^https:\/\/app\.mockatoo\.globalunderdog\.com\//);
  await expect(page.getByLabel('Email', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
});

test('signs in through Mockatoo and reaches the protected page', async ({
  page,
}) => {
  test.skip(
    !email || !password,
    'Set MOCKATOO_TEST_EMAIL and MOCKATOO_TEST_PASSWORD to run the full sign-in.'
  );

  await page.goto('/login');
  await page.getByRole('button', { name: 'Sign in with Mockatoo' }).click();

  await page.getByLabel('Email', { exact: true }).fill(email!);
  await page.getByLabel('Password').fill(password!);
  await page.getByRole('button', { name: 'Log in with password' }).click();
  await page.getByRole('button', { name: 'Authorize' }).click();

  await expect(page).toHaveURL(/\/protected$/);
  await expect(page.getByText(`You are logged in as ${email}`)).toBeVisible();

  await page.getByRole('button', { name: 'Sign out' }).click();
  await expect(page).toHaveURL(/\/login/);
});

# Next.js + PostgreSQL Auth Starter

This is a [Next.js](https://nextjs.org/) starter kit that uses [NextAuth.js](https://next-auth.js.org/) for simple email + password login, [Drizzle](https://orm.drizzle.team) as the ORM, and a [Neon Postgres](https://vercel.com/postgres) database to persist the data.

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-title=Next.js%20Prisma%20PostgreSQL%20Auth%20Starter&demo-description=Simple%20Next.js%2013%20starter%20kit%20that%20uses%20Next-Auth%20for%20auth%20and%20Prisma%20PostgreSQL%20as%20a%20database.&demo-url=https%3A%2F%2Fnextjs-postgres-auth.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F7rsVQ1ZBSiWe9JGO6FUeZZ%2F210cba91036ca912b2770e0bd5d6cc5d%2Fthumbnail.png&project-name=Next.js%%20Prisma%20PostgreSQL%20Auth%20Starter&repository-name=nextjs-postgres-auth-starter&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-postgres-auth-starter&from=templates&skippable-integrations=1&env=AUTH_SECRET&envDescription=Generate%20a%20random%20secret%3A&envLink=https://generate-secret.vercel.app/&stores=%5B%7B"type"%3A"postgres"%7D%5D)

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app nextjs-typescript-starter --example "https://github.com/vercel/nextjs-postgres-auth-starter"
```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

Outside production, the login page also offers **Sign in with Mockatoo (dev only)**. [Mockatoo](https://mockatoo.globalunderdog.com) is a free hosted mock OAuth provider, so end-to-end tests can sign in without seeding a user. Production builds keep email + password only.

Run the [Playwright](https://playwright.dev) tests:

```bash
pnpm exec playwright install chromium
pnpm test:e2e
```

The full sign-in test is skipped unless `MOCKATOO_TEST_EMAIL` and `MOCKATOO_TEST_PASSWORD` are set. To run it, sign up at [app.mockatoo.globalunderdog.com](https://app.mockatoo.globalunderdog.com) (about a minute) and pass your test account's email and password:

```bash
MOCKATOO_TEST_EMAIL=you@example.com MOCKATOO_TEST_PASSWORD=... pnpm test:e2e
```

In CI, add them as repository secrets; [`.github/workflows/e2e.yml`](.github/workflows/e2e.yml) passes them to the tests.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

export default function Head() {
  const title = "Next.js Prisma PostgreSQL Auth Starter";
  const description =
    "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a PostgreSQL database to persist the data.";
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

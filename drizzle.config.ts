import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './app/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    }
  });
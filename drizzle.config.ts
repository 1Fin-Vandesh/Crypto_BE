import { defineConfig } from 'drizzle-kit';

export default defineConfig ({
  schema: './src/drizzle/schema/*.ts',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // TODO: connection limit and pooling config to be added
    url: process.env.CRYPTO_DATA_DATABASE_URL,
  },
  introspect: {
    casing: 'preserve',
  },
  // schemaFilter: ['public'],
});
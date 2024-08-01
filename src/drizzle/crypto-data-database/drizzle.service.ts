import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../schema/schema';

@Injectable()
export class CryptoDataService {
    private readonly client = postgres(process.env.CRYPTO_DATA_DATABASE_URL);
    public db = drizzle(this.client, { schema });
}

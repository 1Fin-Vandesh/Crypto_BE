import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../schema/schema';

@Injectable()
export class DrizzleService {
    private readonly client = postgres(process.env.DATABASE_URL);
    // private readonly client = postgres('postgresql://postgres:root@localhost:5432/CryptoDB');

    public db = drizzle(this.client, { schema });
}

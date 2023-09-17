import { Pool } from '@neondatabase/serverless';

import { Kysely, PostgresDialect, sql } from 'kysely';
import { DB } from './schema.types';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) });

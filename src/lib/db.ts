import { Pool } from '@neondatabase/serverless';

import { Kysely, PostgresDialect, sql } from 'kysely';
import { DB } from './schema.types';
const pool = new Pool({ connectionString: process.env.NEXT_PUBLIC_DB });
export const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) });

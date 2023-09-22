import { Pool } from '@neondatabase/serverless';

import { Kysely, PostgresDialect, sql } from 'kysely';
import { DB } from './schema.types';
const pool = new Pool({ connectionString: "postgres://gorai.azer:6zPjBwUFgG5I@ep-odd-snowflake-02271722-pooler.eu-central-1.aws.neon.tech/neondb" });
export const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) });

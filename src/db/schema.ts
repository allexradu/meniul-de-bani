import {
    varchar,
    boolean,
    pgTable,
    uuid,
    timestamp,
    integer,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm/sql'

export const contact = pgTable('contacts', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    phone: varchar({ length: 50 }).notNull(),
    address: varchar({ length: 1000 }).notNull(),
    square_meters: integer().notNull(),
    product_id: varchar({ length: 50 }).notNull(),
    company_name: varchar({ length: 255 }).notNull(),
    company_registration_number: varchar({ length: 50 }).notNull(),
    marketing_consent: boolean().default(false),
    created_on: timestamp('create_on')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    last_updated: timestamp('last_updated')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
})

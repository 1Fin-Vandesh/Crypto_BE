import { pgTable, varchar, unique, bigint, timestamp, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const crypto_temp = pgTable("crypto_temp", {
	cmc_id: varchar("cmc_id"),
	name: varchar("name"),
	symbol: varchar("symbol"),
	slug: varchar("slug"),
});

export const crypto_master = pgTable("crypto_master", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	cmc_id: integer("cmc_id").notNull(),
	name: varchar("name"),
	symbol: varchar("symbol"),
	slug: varchar("slug"),
	// TODO: failed to parse database type 'bit(1)'
	status_code: unknown("status_code"),
},
(table) => {
	return {
		crypto_master_cmc_id: unique("crypto_master_cmc_id").on(table.cmc_id),
	}
});
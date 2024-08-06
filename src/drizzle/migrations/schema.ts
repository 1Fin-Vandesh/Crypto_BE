import { pgTable, varchar, unique, bigint, timestamp, integer, numeric, serial, text } from "drizzle-orm/pg-core"
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
	status_code: integer("status_code"),
	search_count: integer("search_count"),
	icr_score: integer("icr_score"),
	updated_price: numeric("updated_price"),
},
(table) => {
	return {
		crypto_master_cmc_id: unique("crypto_master_cmc_id").on(table.cmc_id),
	}
});

export const aave = pgTable("aave", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const amp = pgTable("amp", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const ape = pgTable("ape", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const polygon = pgTable("polygon", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const wax = pgTable("wax", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const litecoin = pgTable("litecoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const bitcoin = pgTable("bitcoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const ethereum = pgTable("ethereum", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const tron = pgTable("tron", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const uniswap = pgTable("uniswap", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const zcash = pgTable("zcash", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const stellar = pgTable("stellar", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const arbitrum = pgTable("arbitrum", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const optimism = pgTable("optimism", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const solana = pgTable("solana", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const raydium = pgTable("raydium", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const sei = pgTable("sei", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const avalanche = pgTable("avalanche", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const thorchain = pgTable("thorchain", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const dogecoin = pgTable("dogecoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const kava = pgTable("kava", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const waves = pgTable("waves", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const fantom = pgTable("fantom", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const neo = pgTable("neo", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const gmx = pgTable("gmx", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const sushiswap = pgTable("sushiswap", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const maker = pgTable("maker", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const aptos = pgTable("aptos", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const moonriver = pgTable("moonriver", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const algorand = pgTable("algorand", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const compound = pgTable("compound", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const celo = pgTable("celo", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const moonbeam = pgTable("moonbeam", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const icon = pgTable("icon", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const cardano = pgTable("cardano", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const coin_master = pgTable("coin_master", {
	table_name: varchar("table_name"),
	cmc_id: varchar("cmc_id"),
	name: varchar("name"),
});

export const balancer = pgTable("balancer", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const altered_coin_master = pgTable("altered_coin_master", {
	table_name: varchar("table_name"),
});

export const tezos = pgTable("tezos", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const chiliz = pgTable("chiliz", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const flow = pgTable("flow", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const klaytn = pgTable("klaytn", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const harmony = pgTable("harmony", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
	cmc_id: integer("cmc_id"),
	percent_change_1h: numeric("percent_change_1h"),
	percent_change_24h: numeric("percent_change_24h"),
	percent_change_7d: numeric("percent_change_7d"),
	percent_change_30d: numeric("percent_change_30d"),
	price: numeric("price"),
	volume_24h: numeric("volume_24h"),
	market_cap: numeric("market_cap"),
	total_supply: numeric("total_supply"),
	circulating_supply: numeric("circulating_supply"),
});

export const Zero1_crypto_currency_master = pgTable("01_crypto_currency_master", {
	id: serial("id").primaryKey().notNull(),
	cmc_id: text("cmc_id"),
	name: text("name"),
	symbol: text("symbol"),
	slug: text("slug"),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updated_at: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const Zerox = pgTable("0x", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const Oneinch = pgTable("1inch", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ankr = pgTable("ankr", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const api3 = pgTable("api3", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const aragon_network = pgTable("aragon_network", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const arweave = pgTable("arweave", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const astr = pgTable("astr", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const audio = pgTable("audio", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const axie_infinity = pgTable("axie_infinity", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const band_protocol = pgTable("band_protocol", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const basic_attention_token = pgTable("basic_attention_token", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const beam = pgTable("beam", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const biconomy = pgTable("biconomy", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const bitcoin_cash = pgTable("bitcoin_cash", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const bittorrent = pgTable("bittorrent", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const bonk = pgTable("bonk", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const cartesi = pgTable("cartesi", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const celestia = pgTable("celestia", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const chainlink = pgTable("chainlink", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const chromia = pgTable("chromia", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ckb = pgTable("ckb", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const coin98 = pgTable("coin98", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const conflux_network = pgTable("conflux_network", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const constitutiondao = pgTable("constitutiondao", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const convex_finance = pgTable("convex_finance", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const cosmos = pgTable("cosmos", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const curve = pgTable("curve", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const dai = pgTable("dai", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const dash = pgTable("dash", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const decentraland = pgTable("decentraland", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const decred = pgTable("decred", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const dexe = pgTable("dexe", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const dydx = pgTable("dydx", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const egld = pgTable("egld", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const elf = pgTable("elf", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const enj = pgTable("enj", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ens = pgTable("ens", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const eos = pgTable("eos", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ethereum_classic = pgTable("ethereum_classic", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const fet = pgTable("fet", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const filecoin = pgTable("filecoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const first_digital_usd = pgTable("first_digital_usd", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const floki = pgTable("floki", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const flux = pgTable("flux", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const frax_share = pgTable("frax_share", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const gains_network = pgTable("gains_network", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const gal = pgTable("gal", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const gala = pgTable("gala", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const gnosis = pgTable("gnosis", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const golem = pgTable("golem", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const hedera_hashgraph = pgTable("hedera_hashgraph", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const illuvium = pgTable("illuvium", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const immutable_x = pgTable("immutable_x", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const injective_protocol = pgTable("injective_protocol", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const internet_computer = pgTable("internet_computer", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const iost = pgTable("iost", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const iota = pgTable("iota", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const iotex = pgTable("iotex", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const jasmy = pgTable("jasmy", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const jito_governance_token = pgTable("jito_governance_token", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const just = pgTable("just", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const kadena = pgTable("kadena", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const kusama = pgTable("kusama", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const lido_dao = pgTable("lido_dao", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const livepeer = pgTable("livepeer", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const loopring = pgTable("loopring", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const lunc = pgTable("lunc", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const magic = pgTable("magic", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const mask = pgTable("mask", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const memecoin = pgTable("memecoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const mina = pgTable("mina", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const monero = pgTable("monero", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const nano = pgTable("nano", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const near_protocol = pgTable("near_protocol", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const neo_gas = pgTable("neo_gas", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const neutron_2 = pgTable("neutron_2", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const nexo = pgTable("nexo", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ocean_protocol = pgTable("ocean_protocol", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ontology = pgTable("ontology", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const open_campus = pgTable("open_campus", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ordi = pgTable("ordi", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const osmosis = pgTable("osmosis", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const pax_dollar = pgTable("pax_dollar", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const pax_gold = pgTable("pax_gold", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const pendle = pgTable("pendle", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const polkadot = pgTable("polkadot", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const polymesh = pgTable("polymesh", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const power_ledger = pgTable("power_ledger", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const qnt = pgTable("qnt", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const qtum = pgTable("qtum", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const render = pgTable("render", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const rif = pgTable("rif", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const rocket_pool = pgTable("rocket_pool", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const safepal = pgTable("safepal", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const sand = pgTable("sand", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const shiba_inu = pgTable("shiba_inu", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const siacoin = pgTable("siacoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const singularitynet = pgTable("singularitynet", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const skl = pgTable("skl", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const ssv_network = pgTable("ssv_network", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const stacks = pgTable("stacks", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const status = pgTable("status", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const stepn = pgTable("stepn", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const storj = pgTable("storj", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const stratis = pgTable("stratis", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const sui = pgTable("sui", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const swipe = pgTable("swipe", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const synthetix = pgTable("synthetix", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const tellor = pgTable("tellor", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const terra = pgTable("terra", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const terrausd = pgTable("terrausd", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const tether = pgTable("tether", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const the_graph = pgTable("the_graph", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const theta = pgTable("theta", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const theta_fuel = pgTable("theta_fuel", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const threshold_network = pgTable("threshold_network", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const trader_joe = pgTable("trader_joe", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const trueusd = pgTable("trueusd", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const twt = pgTable("twt", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const uma = pgTable("uma", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const usdc = pgTable("usdc", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const vechain = pgTable("vechain", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const venus = pgTable("venus", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const vtho = pgTable("vtho", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const vulcan_forged = pgTable("vulcan_forged", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const woo = pgTable("woo", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const worldcoin = pgTable("worldcoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const wrapped_bitcoin = pgTable("wrapped_bitcoin", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const xem = pgTable("xem", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const xrp = pgTable("xrp", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const yfi = pgTable("yfi", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});

export const zilliqa = pgTable("zilliqa", {
	id: serial("id").primaryKey().notNull(),
	open: numeric("open"),
	high: numeric("high"),
	low: numeric("low"),
	close: numeric("close"),
	volume: numeric("volume"),
	real_volume: numeric("real_volume"),
	date: timestamp("date", { withTimezone: true, mode: 'string' }),
});
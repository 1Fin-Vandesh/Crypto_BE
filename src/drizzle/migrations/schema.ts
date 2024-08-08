import {
  pgTable,
  serial,
  numeric,
  timestamp,
  unique,
  bigint,
  integer,
  varchar,
  boolean,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const ape = pgTable('ape', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const aragon_network = pgTable('aragon_network', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const astr = pgTable('astr', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const audio = pgTable('audio', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const bonk = pgTable('bonk', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const ckb = pgTable('ckb', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const _crypto_master = pgTable(
  '_crypto_master',
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint('id', { mode: 'number' }).primaryKey().notNull(),
    cmc_id: integer('cmc_id').notNull(),
    name: varchar('name'),
    symbol: varchar('symbol'),
    slug: varchar('slug'),
    search_count: integer('search_count').default(0),
    icr_score: integer('icr_score'),
    updated_price: numeric('updated_price'),
    is_active: boolean('is_active').default(false),
    created_at: timestamp('created_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    category_code: integer('category_code'),
  },
  (table) => {
    return {
      crypto_master_cmc_id: unique('crypto_master_cmc_id').on(table.cmc_id),
    };
  },
);

export const curve = pgTable('curve', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const dai = pgTable('dai', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const crypto_categories = pgTable('crypto_categories', {
  id: serial('id').primaryKey().notNull(),
  created_at: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  status_code: integer('status_code').default(1).notNull(),
  code: integer('code').notNull(),
  name: varchar('name', { length: 255 }),
});

export const dydx = pgTable('dydx', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const egld = pgTable('egld', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const elf = pgTable('elf', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const enj = pgTable('enj', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const ens = pgTable('ens', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const fet = pgTable('fet', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const floki = pgTable('floki', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const flux = pgTable('flux', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const gal = pgTable('gal', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const gnosis = pgTable('gnosis', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const golem = pgTable('golem', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const hedera_hashgraph = pgTable('hedera_hashgraph', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const injective_protocol = pgTable('injective_protocol', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const iost = pgTable('iost', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const jito_governance_token = pgTable('jito_governance_token', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const lunc = pgTable('lunc', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const mask = pgTable('mask', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const memecoin = pgTable('memecoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const neo_gas = pgTable('neo_gas', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const neutron_2 = pgTable('neutron_2', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const optimism = pgTable('optimism', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const Oneinch = pgTable('1inch', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8104),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const pax_dollar = pgTable('pax_dollar', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const polkadot = pgTable('polkadot', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const qnt = pgTable('qnt', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const rif = pgTable('rif', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const sand = pgTable('sand', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const skl = pgTable('skl', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const stepn = pgTable('stepn', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const swipe = pgTable('swipe', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const terra = pgTable('terra', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const theta = pgTable('theta', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const threshold_network = pgTable('threshold_network', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const trader_joe = pgTable('trader_joe', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const twt = pgTable('twt', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const usdc = pgTable('usdc', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const vtho = pgTable('vtho', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const vulcan_forged = pgTable('vulcan_forged', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const woo = pgTable('woo', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const xem = pgTable('xem', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const yfi = pgTable('yfi', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  date: timestamp('date', { withTimezone: true, mode: 'string' }),
});

export const constitutiondao = pgTable('constitutiondao', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(14806),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const Zerox = pgTable('0x', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id'),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const aave = pgTable('aave', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7278),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const algorand = pgTable('algorand', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4030),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const amp = pgTable('amp', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6945),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ankr = pgTable('ankr', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3783),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const api3 = pgTable('api3', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7737),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const aptos = pgTable('aptos', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(21794),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const arbitrum = pgTable('arbitrum', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(11841),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const arweave = pgTable('arweave', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5632),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const avalanche = pgTable('avalanche', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5805),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const axie_infinity = pgTable('axie_infinity', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6783),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const balancer = pgTable('balancer', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5728),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const band_protocol = pgTable('band_protocol', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4679),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const basic_attention_token = pgTable('basic_attention_token', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1697),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const beam = pgTable('beam', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3702),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const biconomy = pgTable('biconomy', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(9543),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const bitcoin_cash = pgTable('bitcoin_cash', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1831),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const bitcoin = pgTable('bitcoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const bittorrent = pgTable('bittorrent', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3718),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const cardano = pgTable('cardano', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2010),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const cartesi = pgTable('cartesi', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5444),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const celestia = pgTable('celestia', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(22861),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const celo = pgTable('celo', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5567),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const chainlink = pgTable('chainlink', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1975),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const chiliz = pgTable('chiliz', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4066),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const chromia = pgTable('chromia', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3978),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const coin98 = pgTable('coin98', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(10903),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const compound = pgTable('compound', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5692),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const conflux_network = pgTable('conflux_network', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7334),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const convex_finance = pgTable('convex_finance', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(9903),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const cosmos = pgTable('cosmos', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3794),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const dash = pgTable('dash', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(131),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const decentraland = pgTable('decentraland', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1966),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const decred = pgTable('decred', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1168),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const dexe = pgTable('dexe', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7326),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const dogecoin = pgTable('dogecoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(74),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const eos = pgTable('eos', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1765),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ethereum_classic = pgTable('ethereum_classic', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1321),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ethereum = pgTable('ethereum', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1027),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const fantom = pgTable('fantom', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3513),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const filecoin = pgTable('filecoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2280),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const first_digital_usd = pgTable('first_digital_usd', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(26081),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const flow = pgTable('flow', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4558),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const frax_share = pgTable('frax_share', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6953),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const gains_network = pgTable('gains_network', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(13663),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const gala = pgTable('gala', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7080),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const gmx = pgTable('gmx', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(11857),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const harmony = pgTable('harmony', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3945),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const icon = pgTable('icon', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2099),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const illuvium = pgTable('illuvium', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8719),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const immutable_x = pgTable('immutable_x', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(10603),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const internet_computer = pgTable('internet_computer', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8916),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const iota = pgTable('iota', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1720),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const iotex = pgTable('iotex', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2777),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const jasmy = pgTable('jasmy', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8425),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const just = pgTable('just', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5488),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const kadena = pgTable('kadena', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5647),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const kava = pgTable('kava', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4846),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const klaytn = pgTable('klaytn', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4256),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const kusama = pgTable('kusama', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5034),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const lido_dao = pgTable('lido_dao', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8000),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const litecoin = pgTable('litecoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const livepeer = pgTable('livepeer', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3640),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const loopring = pgTable('loopring', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1934),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const magic = pgTable('magic', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(13037),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const maker = pgTable('maker', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1518),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const mina = pgTable('mina', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8646),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const monero = pgTable('monero', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(328),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const moonbeam = pgTable('moonbeam', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6836),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const moonriver = pgTable('moonriver', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(9285),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const nano = pgTable('nano', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1567),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const near_protocol = pgTable('near_protocol', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6535),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const neo = pgTable('neo', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1376),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const nexo = pgTable('nexo', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2694),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ocean_protocol = pgTable('ocean_protocol', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3911),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ontology = pgTable('ontology', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2566),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const open_campus = pgTable('open_campus', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(24613),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ordi = pgTable('ordi', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(25028),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const osmosis = pgTable('osmosis', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(12220),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const pax_gold = pgTable('pax_gold', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4705),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const pendle = pgTable('pendle', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(9481),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const polygon = pgTable('polygon', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3890),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const polymesh = pgTable('polymesh', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(20362),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const power_ledger = pgTable('power_ledger', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2132),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const qtum = pgTable('qtum', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1684),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const raydium = pgTable('raydium', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8526),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const render = pgTable('render', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5690),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const rocket_pool = pgTable('rocket_pool', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2943),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const safepal = pgTable('safepal', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(8119),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const sei = pgTable('sei', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(23149),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const shiba_inu = pgTable('shiba_inu', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5994),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const siacoin = pgTable('siacoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1042),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const singularitynet = pgTable('singularitynet', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2424),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const solana = pgTable('solana', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5426),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const ssv_network = pgTable('ssv_network', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(12999),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const stacks = pgTable('stacks', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4847),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const status = pgTable('status', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1759),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const stellar = pgTable('stellar', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(512),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const storj = pgTable('storj', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1772),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const stratis = pgTable('stratis', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1343),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const sui = pgTable('sui', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(20947),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const sushiswap = pgTable('sushiswap', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6758),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const synthetix = pgTable('synthetix', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2586),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const tellor = pgTable('tellor', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4944),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const terrausd = pgTable('terrausd', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7129),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const tether = pgTable('tether', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(825),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const tezos = pgTable('tezos', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2011),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const the_graph = pgTable('the_graph', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(6719),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const theta_fuel = pgTable('theta_fuel', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3822),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const thorchain = pgTable('thorchain', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(4157),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const tron = pgTable('tron', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1958),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const trueusd = pgTable('trueusd', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2563),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const uma = pgTable('uma', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(5617),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const uniswap = pgTable('uniswap', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7083),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const vechain = pgTable('vechain', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3077),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const venus = pgTable('venus', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(7288),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const waves = pgTable('waves', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1274),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const wax = pgTable('wax', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2300),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const worldcoin = pgTable('worldcoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(16),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const wrapped_bitcoin = pgTable('wrapped_bitcoin', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(3717),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const xrp = pgTable('xrp', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(52),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const zcash = pgTable('zcash', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(1437),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export const zilliqa = pgTable('zilliqa', {
  id: serial('id').primaryKey().notNull(),
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  real_volume: numeric('real_volume'),
  time_interval: timestamp('time_interval', {
    withTimezone: true,
    mode: 'string',
  }),
  cmc_id: integer('cmc_id').default(2469),
  percent_change_1h: numeric('percent_change_1h'),
  percent_change_24h: numeric('percent_change_24h'),
  percent_change_7d: numeric('percent_change_7d'),
  percent_change_30d: numeric('percent_change_30d'),
  price: numeric('price'),
  volume_24h: numeric('volume_24h'),
  market_cap: numeric('market_cap'),
  total_supply: numeric('total_supply'),
  circulating_supply: numeric('circulating_supply'),
  created_at: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updated_at: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

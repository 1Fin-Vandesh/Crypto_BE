CREATE TABLE IF NOT EXISTS "_crypto_master" (
	"id" bigint PRIMARY KEY NOT NULL,
	"cmc_id" integer NOT NULL,
	"name" varchar,
	"symbol" varchar,
	"slug" varchar,
	"search_count" integer DEFAULT 0,
	"icr_score" integer,
	"updated_price" numeric,
	"is_active" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"category_code" integer,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"percent_change_1year" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	CONSTRAINT "crypto_master_cmc_id" UNIQUE("cmc_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aave" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7278,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "algorand" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4030,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "amp" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6945,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ankr" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3783,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ape" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "api3" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7737,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aptos" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 21794,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aragon_network" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "arbitrum" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 11841,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "arweave" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5632,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "astr" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "audio" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "avalanche" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5805,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "axie_infinity" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6783,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "balancer" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5728,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "band_protocol" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4679,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "basic_attention_token" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1697,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "beam" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3702,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "biconomy" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 9543,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bitcoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bitcoin_cash" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1831,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bittorrent" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3718,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bonk" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cardano" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2010,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cartesi" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5444,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "celestia" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 22861,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "celo" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5567,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chainlink" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1975,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chiliz" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4066,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chromia" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3978,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ckb" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "coin98" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 10903,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "compound" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5692,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "conflux_network" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7334,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "constitutiondao" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 14806,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "convex_finance" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 9903,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cosmos" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3794,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "crypto_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"status_code" integer DEFAULT 1 NOT NULL,
	"code" integer NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "curve" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dai" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dash" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 131,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "decentraland" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1966,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "decred" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1168,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dexe" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7326,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dogecoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 74,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dydx" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "egld" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "elf" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "enj" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ens" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eos" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1765,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ethereum" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1027,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ethereum_classic" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1321,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fantom" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3513,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fet" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "filecoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2280,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "first_digital_usd" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 26081,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "floki" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flow" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4558,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flux" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "frax_share" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6953,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gains_network" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 13663,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gal" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gala" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7080,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gmx" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 11857,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gnosis" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "golem" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "harmony" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3945,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hedera_hashgraph" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "icon" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2099,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "illuvium" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8719,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "immutable_x" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 10603,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "injective_protocol" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "internet_computer" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8916,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iost" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iota" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1720,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iotex" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2777,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "jasmy" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8425,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "jito_governance_token" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "just" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5488,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "kadena" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5647,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "kava" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4846,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "klaytn" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4256,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "kusama" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5034,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lido_dao" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8000,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "litecoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "livepeer" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3640,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "loopring" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1934,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lunc" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "magic" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 13037,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "maker" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1518,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mask" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "memecoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mina" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8646,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "monero" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 328,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moonbeam" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6836,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moonriver" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 9285,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nano" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1567,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "near_protocol" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6535,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "neo" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1376,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "neo_gas" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "neutron_2" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nexo" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2694,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ocean_protocol" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3911,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "1inch" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8104,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ontology" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2566,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "open_campus" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 24613,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "optimism" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ordi" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 25028,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "osmosis" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 12220,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pax_dollar" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pax_gold" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4705,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pendle" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 9481,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "polkadot" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "polygon" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3890,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "polymesh" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 20362,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "power_ledger" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2132,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "qnt" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "qtum" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1684,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "raydium" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8526,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "render" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5690,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rif" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rocket_pool" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2943,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "safepal" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 8119,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sand" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sei" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 23149,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shiba_inu" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5994,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "siacoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1042,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "singularitynet" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2424,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "skl" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "solana" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5426,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ssv_network" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 12999,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4847,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "status" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1759,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stellar" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 512,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stepn" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "storj" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1772,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stratis" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1343,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sui" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 20947,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sushiswap" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6758,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "swipe" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "synthetix" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2586,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tellor" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4944,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "terra" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "terrausd" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7129,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tether" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 825,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tezos" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2011,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "the_graph" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 6719,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "theta" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "theta_fuel" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3822,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "thorchain" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 4157,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "threshold_network" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trader_joe" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tron" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1958,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trueusd" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2563,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "twt" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "uma" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 5617,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "uniswap" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7083,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usdc" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vechain" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3077,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "venus" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 7288,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vtho" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vulcan_forged" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "waves" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1274,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wax" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2300,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "woo" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "worldcoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 16,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wrapped_bitcoin" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 3717,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "xem" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "xrp" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 52,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "yfi" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"date" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "zcash" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 1437,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "0x" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "zilliqa" (
	"id" serial PRIMARY KEY NOT NULL,
	"open" numeric,
	"high" numeric,
	"low" numeric,
	"close" numeric,
	"volume" numeric,
	"real_volume" numeric,
	"time_interval" timestamp with time zone,
	"cmc_id" integer DEFAULT 2469,
	"percent_change_1h" numeric,
	"percent_change_24h" numeric,
	"percent_change_7d" numeric,
	"percent_change_30d" numeric,
	"price" numeric,
	"volume_24h" numeric,
	"market_cap" numeric,
	"total_supply" numeric,
	"circulating_supply" numeric,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "user_profile";--> statement-breakpoint
DROP TABLE "api_exception_logs";--> statement-breakpoint
DROP TABLE "exception_logs";
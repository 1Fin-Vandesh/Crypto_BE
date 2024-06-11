CREATE TABLE IF NOT EXISTS "exception_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"endpoint" text,
	"method" text,
	"body" json,
	"header" json,
	"error" text,
	"message" text,
	"error_code" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"stack_trace" text
);

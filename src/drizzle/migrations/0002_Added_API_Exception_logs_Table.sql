CREATE TABLE IF NOT EXISTS "api_exception_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"endpoint" text,
	"method" text,
	"status_code" text,
	"body" json,
	"header" json,
	"response_data" json,
	"created_at" timestamp with time zone DEFAULT now(),
	"stack_trace" text
);

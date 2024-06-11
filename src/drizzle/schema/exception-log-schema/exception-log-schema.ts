import { pgTable, text, timestamp, serial, json } from "drizzle-orm/pg-core";

export const exception_logs = pgTable("exception_logs", {
    id: serial('id').primaryKey(),
    user_id: text("user_id"),
    endpoint: text("endpoint"),
    method: text("method"),
    body: json("body"),
    header: json("header"),
    error: text("error"),
    message: text("message"),
    error_code: text("error_code"),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    stack_trace: text("stack_trace"),
})

export const api_exception_logs = pgTable("api_exception_logs", {
    id: serial('id').primaryKey(),
    endpoint: text("endpoint"),
    method: text("method"),
    status_code: text("status_code"),
    body: json("body"),
    header: json("header"),
    response_data: json("response_data"),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    stack_trace: text("stack_trace"),
})
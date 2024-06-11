import { pgTable, text, timestamp, uuid, boolean } from "drizzle-orm/pg-core";

export const user_profile = pgTable("user_profile", {
    user_id: uuid("user_id").defaultRandom().primaryKey(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name"),
    email_id: text("email").notNull().unique(),
    // mobile_number: text("mobile_number").unique(),
    password: text("password").notNull(),
    is_active: boolean("is_active").default(true),
    created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updated_at: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

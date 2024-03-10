import {
	pgTable,
	varchar,
	foreignKey,
	serial,
	unique,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const user = pgTable("User", {
	username: varchar("username", { length: 50 }).primaryKey().notNull(),
	name: varchar("name", { length: 100 }),
	email: varchar("email", { length: 100 }),
});

export const userlink = pgTable(
	"userlink",
	{
		linkId: serial("link_id").primaryKey().notNull(),
		userId: varchar("user_id", { length: 50 }).references(() => user.username),
		link: varchar("link", { length: 255 }),
	},
	(t) => ({
		unq: unique().on(t.link, t.userId),
	}),
);

import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config();

export default {
	schema: "drizzle/schema.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString:
			"postgresql://rhithesh:S8q6IazDZWUJ@ep-cold-snowflake-a16kdx7u.ap-southeast-1.aws.neon.tech/nosign?sslmode=true",
	},
} satisfies Config;

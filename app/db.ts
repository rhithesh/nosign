import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
	"postgresql://rhithesh:S8q6IazDZWUJ@ep-cold-snowflake-a16kdx7u.ap-southeast-1.aws.neon.tech/nosign?sslmode=true",
);
const db = drizzle(sql);

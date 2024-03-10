-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "User" (
	"username" varchar(50) PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"email" varchar(100)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userlink" (
	"link_id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(50),
	"link" varchar(255)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userlink" ADD CONSTRAINT "userlink_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("username") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/
ALTER TABLE "userlink" DROP CONSTRAINT "userlink_user_id_fkey";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userlink" ADD CONSTRAINT "userlink_user_id_User_username_fk" FOREIGN KEY ("user_id") REFERENCES "User"("username") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "userlink" ADD CONSTRAINT "userlink_link_user_id_unique" UNIQUE("link","user_id");
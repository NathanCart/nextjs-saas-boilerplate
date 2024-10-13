DO $$ BEGIN
 CREATE TYPE "public"."TeamRole" AS ENUM('OWNER', 'ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

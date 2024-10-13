ALTER TABLE "ConciergeToken" RENAME COLUMN "role" TO "TeamRole";--> statement-breakpoint
ALTER TABLE "TeamMember" RENAME COLUMN "role" TO "TeamRole";--> statement-breakpoint
ALTER TABLE "ConciergeToken" ALTER COLUMN "TeamRole" SET DEFAULT 'USER';
import { InferSelectModel, sql } from 'drizzle-orm';
import { index, pgTable, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const passwordResetToken = pgTable(
	'PasswordResetToken',
	{
		id: text('id')
			.primaryKey()
			.notNull()
			.default(sql`gen_random_uuid()`),
		email: text('email').notNull(),
		token: text('token').notNull(),
		expiresAt: timestamp('expiresAt', { precision: 3, mode: 'date' }).notNull(),
	},
	(table) => {
		return {
			emailTokenIdx: index('PasswordResetToken_email_token_idx').using(
				'btree',
				table.email.asc().nullsLast(),
				table.token.asc().nullsLast()
			),
			emailTokenKey: uniqueIndex('PasswordResetToken_email_token_key').using(
				'btree',
				table.email.asc().nullsLast(),
				table.token.asc().nullsLast()
			),
			tokenKey: uniqueIndex('PasswordResetToken_token_key').using(
				'btree',
				table.token.asc().nullsLast()
			),
		};
	}
);

export type PasswordResetToken = InferSelectModel<typeof passwordResetToken>;

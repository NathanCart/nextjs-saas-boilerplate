'use client';
import { CodeBlock } from '@/components/code-block';
import Image from 'next/image';
import { Documentation } from '@/components/docs/documentation';
import { DocumentationSection } from '@/components/docs/documentation-section';
import { DocumentationTypography } from '@/components/docs/documentation-typography';
import { DocumentationAlert } from '@/components/docs/documentation-alert';
import Link from 'next/link';

export default function Docs() {
	return (
		<>
			<Documentation>
				<DocumentationSection id="introduction">
					<DocumentationTypography variant="h1">Introduction</DocumentationTypography>

					<DocumentationTypography variant="p">
						Welcome to SaaSphere NextJS SaaS Boilerplate
					</DocumentationTypography>

					<DocumentationTypography variant="p">
						SaaSphere is a NextJS SaaS boilerplate that provides a solid foundation for
						building your next SaaS project. It comes with a variety of features out of
						the box, including authentication, user management, subscription management,
						and more. This documentation page will guide you through setting up and
						customizing the boilerplate to fit your needs.
					</DocumentationTypography>
				</DocumentationSection>

				<DocumentationSection id="get-started">
					<DocumentationTypography variant="h2">Get started</DocumentationTypography>
					<DocumentationTypography variant="p">
						To clone the repository and start the development server, follow the steps
						below.
					</DocumentationTypography>

					<ol className="mt-4 list-none flex flex-col gap-4">
						<li>
							<DocumentationTypography variant="p">
								Step 1: Clone the repository
							</DocumentationTypography>
							<CodeBlock code={'git clone'} language="javascript" />
						</li>
						<li>
							<DocumentationTypography variant="p">
								Step 2: Install dependencies
							</DocumentationTypography>
							<CodeBlock code={'npm install'} language="javascript" />
						</li>
						<li>
							<DocumentationTypography variant="p">
								Step 3: Start the development server
							</DocumentationTypography>
							<CodeBlock code={'npm run dev'} language="javascript" />
						</li>
					</ol>
				</DocumentationSection>
				<DocumentationSection id="environment-variables">
					<DocumentationTypography variant="h2">
						Environment variables
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						SaaSphere is built upon a multitude of environments, each serving a
						different purpose. These have been hand picked with scalability in mind to
						ensure your business can grow.
					</DocumentationTypography>

					<DocumentationTypography variant="p">
						To fully setup SaaSphere you will need to create a .env file in the root of
						the project. This file should contain the following variables. Follow this
						page for a step by step guide on how to setup each of these variables.
					</DocumentationTypography>

					<CodeBlock
						language="javascript"
						code={`
# .env file

NEXT_PUBLIC_APP_URL=
AUTH_TRUST_HOST=
NEXTAUTH_URL=

#Authentication and database setup
AUTH_DRIZZLE_URL=
AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

#File management setup using AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=bucket-name

#Email setup using Resend 
RESEND_API_KEY=
RESEND_FROM_EMAIL=

#Payment setup using Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

//Stripe subscription prices, these needed based on what payment plan/model you choose.
//NEXT_PUBLIC_STRIPE_SUB_ONE=
//NEXT_PUBLIC_STRIPE_SUB_TWO=
//NEXT_PUBLIC_STRIPE_SUB_THREE=
//NEXT_PUBLIC_STRIPE_ONE_TIME_ONE=
//NEXT_PUBLIC_STRIPE_ONE_TIME_TWO=

#Optional blog and form environment variables, if you do not require a blog or form integration you can leave these blank and remove the relevant frontend code.
NEXT_PUBLIC_FORM_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
`}
					/>
				</DocumentationSection>

				<DocumentationSection id="environment-variables-core">
					<DocumentationTypography variant="h2">Core ENVs</DocumentationTypography>

					<DocumentationTypography variant="p">
						These are the core environment variables that are required for most
						functions within the app. Add the following ENVs and and put the values as
						the base url of your app, for local, this will be http://localhost:3000, for
						production deployments, this will be the root domain of your app. For
						example, SaaSphere{"'"}s would be{' '}
						<span className="italic  text-primary"> https://saasphere.dev</span>
					</DocumentationTypography>

					<DocumentationAlert title="Why are these repeated?">
						These are repeated to ensure that the app can run in both development and
						production environments. These are relied upon by different aspects within
						internal packages required to function.
					</DocumentationAlert>
					<CodeBlock
						enableLineNumbers
						language="javascript"
						code={`
# .env file
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TRUST_HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
`}
					/>
				</DocumentationSection>

				<DocumentationSection id="environment-variables-auth">
					<DocumentationTypography variant="h2">
						Authentication and database ENVs setup
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						SaaSphere NextJS SaaS Boilerplate uses Postgres for performance and
						scalability.
					</DocumentationTypography>
					<ol className="list-decimal ml-4 flex flex-col gap-2">
						<li>
							Sign up to any Postgres provider. copy and paste the connection string
							into AUTH_DRIZZLE_URL
						</li>
						<li className="mb-2">
							Generate an auth secret and add it to AUTH_SECRET. This can be any
							string. You can run the following command to automatically generate a
							secure key.
						</li>

						<CodeBlock
							language="javascript"
							code={`
npx auth secret
`}
						/>
						<li>
							Run "npx drizzle-kit generate" inside the console, then run "npx
							drizzle-kit push" to push the schemas to your newly created database.
						</li>

						<li>Add your providers</li>
					</ol>
					<DocumentationAlert title="Neon Database">
						A good free service to get started with Postgres is{' '}
						<Link
							className="underline hover:no-underline"
							href="https://neon.tech/"
							target="_blank"
							rel="noopener noreferrer"
						>
							NeonDB
						</Link>{' '}
					</DocumentationAlert>
					<CodeBlock
						enableLineNumbers
						lines={['6:13']}
						language="javascript"
						code={`
# .env file
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TRUST_HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

#Authentication and database setup
AUTH_DRIZZLE_URL=
AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
`}
					/>
					<DocumentationTypography variant="p">
						For a full list of setup steps for available provider, visit{' '}
						<Link
							className="underline hover:no-underline text-primary"
							href="https://authjs.dev/reference/core/providers"
							target="_blank"
							rel="noreferrer noopener"
						>
							this link
						</Link>
					</DocumentationTypography>

					<DocumentationTypography variant="h3">Google setup</DocumentationTypography>
					<DocumentationTypography variant="p">
						If you require Google sign in with your system, follow these steps
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						For official documentation on Google OAuth setup, visit{' '}
						<Link
							className="underline hover:no-underline text-primary"
							href="https://support.google.com/cloud/answer/6158849?hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							this guide
						</Link>
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						Google for "google api console" and click "Google Cloud console", find
						create a new project in the navbar dropdown, name the project whatever you
						desire, press create, select your newly created project, search for "APIs &
						Services" in the search bar, click "OAuth consent screen" on the sidebar,
						check external, press create, fill in name, press save and continue, press
						save and continue, press save and continue, press "Credentials" on the left,
						press "Create Credentials", select OAuth client ID, select web application,
						name it, add "Authorised JavaScript origins" which is the base URL of your
						app, add "Authorised redirect URIs" to the format shown in image.
					</DocumentationTypography>
					<Image
						className="rounded-lg border-2 border-border object-cover"
						src="https://saasphere.s3.us-east-2.amazonaws.com/google-setup.webp"
						alt="Google setup"
						width={500}
						height={500}
					/>
					<DocumentationTypography variant="p">
						Press create, copy client id and secret on the right hand side of the page
						to the variables GOOGLE_CLIENT_ID=, GOOGLE_CLIENT_SECRET=. Ensure the
						providers you have provided keys for are enabled and that the UI is
						displaying then in social.tsx
					</DocumentationTypography>
					<DocumentationTypography variant="h3">Github setup</DocumentationTypography>
					<DocumentationTypography variant="p">
						If you require Github sign in with your system, follow the documentation on
						guide linked below. After this, paste the client id and secret into the
						variables GITHUB_CLIENT_ID= and GITHUB_CLIENT_SECRET=
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						<Link
							className="underline hover:no-underline text-primary"
							href="https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Official documentation on Github OAuth setup
						</Link>
					</DocumentationTypography>
				</DocumentationSection>

				<DocumentationSection id="environment-variables-file-management">
					<DocumentationTypography variant="h2">
						File management ENVs setup
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						SaaSphere NextJS SaaS Boilerplate uses AWS S3 for file management. This is
						an extremely scalable, cheap and reliable service that is used by many large
						companies.
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						Google for{' '}
						<Link
							href="https://aws.amazon.com/s3/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:no-underline text-primary"
						>
							AWS S3
						</Link>{' '}
						create an account, create a new S3 bucket, In Object Ownership, select "ACLs
						enabled" and "Bucket owner prefered" In Block Public Access settings for
						this bucket, uncheck "Block all public access" and check acknowledgement
						box, press create bucket. Click into your new bucket, go to the permissions
						tab, scroll down to bucket policy and select edit, then paste the following
						text inside. This will allow public access to the bucket.
					</DocumentationTypography>
					<DocumentationAlert title="Replace the resource">
						Replace the resource with the identifier of the bucket you have created.
						This is the name you used when creating the bucket.
					</DocumentationAlert>
					<CodeBlock
						enableLineNumbers
						language="json"
						code={`
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::saasphere/*"
		}
	]
}
`}
					/>
					<DocumentationTypography variant="p">
						Set AWS_REGION= AWS_BUCKET_NAME=bucket-name ENVs to your buckets region and
						buckets name. These can be found on the S3 homepage as shown below.
					</DocumentationTypography>
					<Image
						className="rounded-lg border-2 border-border object-cover"
						src="https://saasphere.s3.us-east-2.amazonaws.com/s3-names.webp"
						alt="AWS S3 setup"
						layout="responsive"
						width={0}
						height={0}
					/>
					<DocumentationTypography variant="p">
						Click the top right dropdown and select security credentials, create a new
						access key copy and paste the resulting keys as AWS_ACCESS_KEY_ID= and
						AWS_SECRET_ACCESS_KEY=. Your ENV file should now look something like this.
					</DocumentationTypography>
					<CodeBlock
						enableLineNumbers
						lines={['14:18']}
						language="javascript"
						code={`
# .env file
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TRUST_HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

#Authentication and database setup
AUTH_DRIZZLE_URL=
AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

#File management setup using AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-west-1
AWS_BUCKET_NAME=bucket-name
`}
					/>{' '}
				</DocumentationSection>
				<DocumentationSection id="environment-variables-emails">
					<DocumentationTypography variant="h2">
						Resend email management setup
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						SaaSphere NextJS SaaS Boilerplate uses Resend for email management. This is
						an extremely scalable, cheap and reliable service that is used by many large
						companies. This service is used to send emails for password resets, email
						verification, etc.
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						Signup at{' '}
						<Link
							href="https://resend.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:no-underline text-primary"
						>
							https://resend.com
						</Link>{' '}
						then generate a secret token at{' '}
						<Link
							href="https://resend.com/api-keys"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:no-underline text-primary"
						>
							https://resend.com
						</Link>{' '}
						Ensure you have a verified domain in your Resend account for production
						deployments to allow sending emails to users, if this isn{"'"}t done, only
						the registered accounts email will be able to send and receive emails by
						using the email onboarding@resend.dev. Follow the steps on resend to add a
						domain to your DNS records for production deployments.
					</DocumentationTypography>
					<DocumentationAlert title="Why do I need a verified domain?">
						Resend requires a verified domain to send emails to users. This is a
						security feature to prevent spam and phishing attacks.
					</DocumentationAlert>
					<DocumentationTypography variant="p">
						Copy and paste the API key from Resend into the variables RESEND_API_KEY=,
						and RESEND_FROM_EMAIL=, if you have not verified a domain yet, you can use
						onboarding@resend.dev, but bare in mind this will only be able to send
						emails to the accounts registered email. Your ENV file should now look
						something like this.
					</DocumentationTypography>
					<CodeBlock
						enableLineNumbers
						lines={['20:23']}
						language="javascript"
						code={`
# .env file
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TRUST_HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

#Authentication and database setup
AUTH_DRIZZLE_URL=
AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

#File management setup using AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-west-1
AWS_BUCKET_NAME=bucket-name

#Email setup using Resend 
RESEND_API_KEY=
RESEND_FROM_EMAIL=support@random-saas-project.com 
//use onboarding@resend.dev if you have not verified a domain on Resend
`}
					/>
				</DocumentationSection>

				<DocumentationSection id="environment-variables-payment">
					<DocumentationTypography variant="h2">
						Payment/billing ENVs setup
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						SaaSphere NextJS SaaS Boilerplate uses Stripe for payment management. This
						is used to manage subscriptions, one time payments and more. Follow the
						below steps to setup Stripe.
					</DocumentationTypography>
					<DocumentationAlert title="Stripe environments">
						If you are on a development server, you can use the test keys provided by
						Stripe by pressing the {'"Test Mode"'} toggle on the top right of the
						dashboard. If you are in production, you will need to use the live keys.
					</DocumentationAlert>
					<DocumentationTypography variant="p">
						Go to{' '}
						<Link
							href="https://resend.com/api-keys"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:no-underline text-primary"
						>
							https://dashboard.stripe.com
						</Link>{' '}
						and register an account, setup your payment details. Copy secret key from
						the stripe dashboard homepage and pase into STRIPE_SECRET_KEY env. Then add
						NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as the publishable key code. . You will
						be able to test payments with test keys using card details 424242424242 with
						any date in the future. see{' '}
						<Link
							href="https://docs.stripe.com/testing"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:no-underline text-primary"
						>
							Stripe testing documentation
						</Link>{' '}
						for more details.
					</DocumentationTypography>
					<DocumentationTypography variant="h3">
						Setting up product prices
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						Search the search bar for product catalog in the Stripe dashboard, create a
						new product, and save it. Add all the necessary prices, ensuring you select
						the appropriate options for either one-time payments or subscriptions. Once
						the prices are set, locate and copy the corresponding price IDs into the
						appropriate slots in your environment file.
					</DocumentationTypography>
					<DocumentationTypography variant="p">
						Note this will have to be done for both production and development prices by
						using the Test Mode toggle on the top right of the Stripe dashboard.
					</DocumentationTypography>
					<CodeBlock
						language="javascript"
						code={`
NEXT_PUBLIC_STRIPE_SUB_ONE=
NEXT_PUBLIC_STRIPE_SUB_TWO= 
NEXT_PUBLIC_STRIPE_SUB_THREE=
NEXT_PUBLIC_STRIPE_ONE_TIME_ONE= 
NEXT_PUBLIC_STRIPE_ONE_TIME_TWO=
`}
					/>
					<DocumentationTypography variant="p">
						If you need to add additional payment options, update the plans.ts file. For
						one-time payments, paste the price IDs into the one-time payment ENV fields;
						for subscriptions, paste them into the subscription ENV fields. By default,
						the dashboard is configured for subscription payment types. To ensure
						one-time payments are displayed correctly, follow these steps to adjust the
						components from subscription to one-time models: In app/(public)/page.tsx,
						replace the word "subscription" with "one-time" . In
						app/(protected)/dashboard/teams/[team]/billing/page.tsx, update the wording
						from "subscription" to "one-time" in places of the image shown below.
					</DocumentationTypography>
					<Image
						className="rounded-lg border-2 border-border object-cover"
						src="https://saasphere.s3.us-east-2.amazonaws.com/plan-types.webp"
						alt="AWS S3 setup"
						layout="responsive"
						width={0}
						height={0}
					/>

					<DocumentationTypography variant="p">
						Your ENV file should now look something like this.
					</DocumentationTypography>
					<CodeBlock
						enableLineNumbers
						lines={['25:35']}
						language="javascript"
						code={`
# .env file
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TRUST_HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

#Authentication and database setup
AUTH_DRIZZLE_URL=
AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

#File management setup using AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-west-1
AWS_BUCKET_NAME=bucket-name

#Email setup using Resend 
RESEND_API_KEY=re_9DLWqvYT_A2pjFX8NsxpqeUbJV3oY8tLm
RESEND_FROM_EMAIL=support@random-saas-project.com 
//use onboarding@resend.dev if you have not verified a domain on Resend

#Payment setup using Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

//Stripe subscription prices, these needed based on what payment plan/model you choose.
NEXT_PUBLIC_STRIPE_SUB_ONE=
NEXT_PUBLIC_STRIPE_SUB_TWO=
NEXT_PUBLIC_STRIPE_SUB_THREE=
//NEXT_PUBLIC_STRIPE_ONE_TIME_ONE=
//NEXT_PUBLIC_STRIPE_ONE_TIME_TWO=

`}
					/>
				</DocumentationSection>
			</Documentation>
		</>
	);
}

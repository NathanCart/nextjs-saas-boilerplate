import { Contact } from '@/components/marketing/contact';
import { CallToAction } from '@/components/marketing/call-to-action';
import { Content } from '@/components/marketing/content';
import { FrequentlyAskedQuestions } from '@/components/marketing/frequently-asked-questions';
import { Header } from '@/components/marketing/header';
import { KeyPointList } from '@/components/marketing/key-point-list';
import { MarketingSection } from '@/components/marketing/marketing-section';
import { MarketingSlider } from '@/components/marketing/marketing-slider';
import { MarqueeText } from '@/components/marketing/marquee-text';
import { ParallaxContent } from '@/components/marketing/parallax-content';
import { Pricing } from '@/components/marketing/pricing';
import { Testimonials } from '@/components/marketing/testimonials';
import { Button } from '@/components/ui/button';
import { DUMMY_FAQS, DUMMY_TESTIMONIALS } from '@/lib/dummy-data';
import plans from '@/plans.json';
import { formatDuration, intervalToDuration } from 'date-fns';
import { ChartArea, Fingerprint, Goal, Layers, LayoutDashboard, Pointer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	let duration = intervalToDuration({
		start: new Date(2022, 6, 2, 0, 0, 15),
		end: new Date(),
	});

	const data = formatDuration(duration, {
		delimiter: ', ',
	});

	return (
		<main className="flex h-full flex-col ">
			<MarketingSection className="pb-4 md:pb-8 pt-8 md:pt-16">
				<Header
					title="Bring your SaaS to life in record time with SaaSphere"
					highlighted="record time"
					caption="Ship your SaaS in record time"
					subtitle="The NextJS boilerplate equipped with everything you need to build your SaaS, AI tool, or any web app, and start earning online quickly."
					buttons={
						<>
							<Link className="flex-1 sm:!flex-none" href="/auth/register">
								<Button className="w-full sm:w-fit" size="lg">
									Get started
								</Button>
							</Link>
							<Link className="flex-1 sm:!flex-none" href="/pricing">
								<Button className="w-full sm:w-fit" variant="outline" size="lg">
									See pricing
								</Button>
							</Link>
						</>
					}
				/>
			</MarketingSection>

			<div className={`rounded-2xl  w-full px-4 block md:hidden `}>
				<Image
					priority
					loading="eager"
					className="rounded-xl border-2 border-border"
					src="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp"
					alt="Advanced analytics"
					layout="responsive"
					width={1200}
					height={800}
				/>
			</div>
			<MarketingSection
				disablePaddingTop
				disableContainer
				disablePaddingX
				disablePaddingBottom
			>
				<MarketingSlider
					priority
					basis="basis-full md:basis-1/2"
					options={{
						duration: 100,
						align: 'center',
						startIndex: 0,
					}}
					slides={[
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/invoice-management.webp',
							alt: 'Invoice management',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/auth.webp',
							alt: 'Authentication systems',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp',
							alt: 'Advanced analytics',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/user-management.webp',
							alt: 'User management',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/invoice-management.webp',
							alt: 'Invoice management',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/auth.webp',
							alt: 'Authentication systems',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp',
							alt: 'Advanced analytics',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/user-management.webp',
							alt: 'User management',
						},
					]}
				/>
			</MarketingSection>

			<MarketingSection className="pt-8 md:pt-16" fadeSides>
				<MarqueeText
					text={['Built using', 'NextJS', 'Shadcn/ui', 'Tailwind css']}
					direction="left"
				/>
				<MarqueeText
					text={['Tailwind css', 'Built using', 'NextJS', 'Shadcn/ui']}
					direction="right"
				/>
			</MarketingSection>

			<MarketingSection disablePaddingTop>
				<KeyPointList
					title="Ship your SaaS in weeks, not months or years"
					subtitle="Save up to 200+ hours of development time with SaaSphere, allowing you to focus on building your product and growing your business."
					keyPoints={[
						{
							icon: <LayoutDashboard className="min-w-10 min-h-10  text-primary" />, // Replace with a relevant Lucide icon, e.g., Target, Rocket, ShieldCheck
							point: (
								<div>
									<p className="text-start text-base md:text-xl">
										SaaSphere comes ready with fully integrated{' '}
										<span className="font-bold">
											authentication, user management, and billing systems,
										</span>{' '}
										utilising Stripe for seamless{' '}
										<span className="font-bold">
											one-time and subscription payments
										</span>{' '}
										built in. It also includes a along with a comprehensive{' '}
										<span className="font-bold">admin panel</span> to manage
										users and subscriptions effortlessly.
										<br />
									</p>
									<p className="text-primary text-start mt-2">80+ hours saved</p>
								</div>
							),
						},
						{
							icon: <Layers className="min-w-10 min-h-10 md:size-20 text-primary" />, // Replace with another relevant Lucide icon
							point: (
								<div>
									<p className="text-start text-base md:text-xl">
										SaaSphere includes a fully functional{' '}
										<span className="font-bold">landing page</span> to help you
										get started quickly. It offers optimised{' '}
										<span className="font-bold">SEO and performance</span> using
										tools like Semrush and Lighthouse to ensure app stability.
										It also features a fully{' '}
										<span className="font-bold">integrated CMS-ready blog</span>
										, perfect for launching your content marketing.
									</p>

									<p className="text-primary text-start mt-2">40+ hours saved</p>
								</div>
							),
						},
						{
							icon: (
								<ChartArea className="min-w-10 min-h-10 md:size-20 text-primary" />
							),
							point: (
								<div>
									<p className="text-start text-base md:text-xl">
										Included in SaaSphere are numerous essential features for
										every successful SaaS, such as a{' '}
										<span className="font-bold">
											complete notification system
										</span>{' '}
										with email preferences,{' '}
										<span className="font-bold">
											customizable email templates
										</span>
										, an extensive{' '}
										<span className="font-bold">bug reporting system</span> with
										file uploads and screenshots, and a detailed{' '}
										<span className="font-bold">documentation system</span>.
									</p>
									<p className="text-primary text-start mt-2">40+ hours saved</p>
								</div>
							),
						},
					]}
				/>
			</MarketingSection>

			<MarketingSection className="mt-60 md:mt-40">
				<ParallaxContent
					title="Enter a title for this section, such as 'Advanced Analytics'"
					description="Provide a brief description of the content in this section. This could be a feature, benefit, or use case of your product or service."
					image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp"
					imageCover
				/>
			</MarketingSection>

			<MarketingSection disablePaddingTop>
				<ParallaxContent
					title="Enter a title for this section, such as 'User Management'"
					description="Provide a brief description of the content in this section. This could be a feature, benefit, or use case of your product or service."
					image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp"
					imageCover
					actions={
						<Link href="/docs">
							<Button variant="outline" className="w-fit">
								Read the documentation
							</Button>
						</Link>
					}
				/>
			</MarketingSection>

			<MarketingSection disablePaddingTop>
				<ParallaxContent
					title="Enter a title for this section, such as 'Invoice Management'"
					description="Provide a brief description of the content in this section. This could be a feature, benefit, or use case of your product or service."
					image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp"
					imageCover
					actions={
						<Link href="/auth/register">
							<Button className="w-fit">Start your journey today</Button>
						</Link>
					}
				/>
			</MarketingSection>

			<MarketingSection>
				<Testimonials
					title="Loved by users worldwide"
					description="These testimonials are fake, ensure to replace them with real testimonials from your users."
					testimonials={DUMMY_TESTIMONIALS}
				/>
			</MarketingSection>

			<MarketingSection>
				<Content
					title="Enter an intro for your pricing plans"
					description="Provide a brief description of the pricing plans available. This could include the features, benefits, or value of each plan."
					imageCover
					image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/advanced-analytics.webp"
				/>
			</MarketingSection>

			<MarketingSection disablePaddingTop id="pricing">
				<Pricing
					title="Write a caption to sell your pricing plans"
					caption="Pricing"
					plans={Object.entries(plans)
						?.filter((p) => p[1].type === 'subscription')
						?.map((plan, index) => ({
							features: plan[1].features.map((feature) => ({
								title: feature.feature,
								active: feature.active,
							})),
							name: plan[1].name,
							popular: index === 1,
							price: (
								<p className="flex gap-2 text-xl items-end">
									<span className="line-through text-xl text-muted-foreground">
										£{(plan[1].price * 1.2).toFixed(0)}
									</span>
									<span className="text-4xl font-bold">£{plan[1].price}</span>{' '}
									<span className="text-sm">GBP</span>
								</p>
							),
						}))}
				/>
			</MarketingSection>

			<MarketingSection fadeSides disablePaddingTop disablePaddingBottom>
				<MarqueeText text={['Start', 'Your', 'Journey', 'Today']} direction="left" />
			</MarketingSection>
			<MarketingSection>
				<CallToAction
					title="Call to action title"
					description="Try and convince your visitors to take action. This could be signing up for a free trial, subscribing to a newsletter, or purchasing your product."
				/>
			</MarketingSection>

			<MarketingSection>
				<FrequentlyAskedQuestions
					title="Frequently asked questions"
					description="Provide answers to common questions about your product or service. This can help address any concerns or uncertainties your visitors may have."
					faqs={DUMMY_FAQS}
				/>
			</MarketingSection>

			<MarketingSection className="border-t-2" id="contact">
				<Contact
					title="Contact us"
					description="Get in touch with us for any queries or feedback."
				/>
			</MarketingSection>
		</main>
	);
}

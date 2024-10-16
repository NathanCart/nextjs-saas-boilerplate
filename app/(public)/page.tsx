import { CallToAction } from '@/components/marketing/call-to-action';
import { Contact } from '@/components/marketing/contact';
import { Content } from '@/components/marketing/content';
import { FrequentlyAskedQuestions } from '@/components/marketing/frequently-asked-questions';
import { Header } from '@/components/marketing/header';
import { KeyPointList } from '@/components/marketing/key-point-list';
import { MarketingSection } from '@/components/marketing/marketing-section';
import { MarketingSlider } from '@/components/marketing/marketing-slider';
import { MarqueeText } from '@/components/marketing/marquee-text';
import { ParallaxContent } from '@/components/marketing/parallax-content';
import { Pricing } from '@/components/marketing/pricing';
import { Testimonial } from '@/components/marketing/testimonial';
import { Button } from '@/components/ui/button';
import plans from '@/plans';
import { formatDuration, intervalToDuration } from 'date-fns';
import { ChartArea, Layers, LayoutDashboard } from 'lucide-react';
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
			<div className="bg-gradient-to-b from-background via-primary/10 to-background">
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
								<Link className="flex-1 sm:!flex-none" href="/#pricing">
									<Button className="w-full sm:w-fit" variant="outline" size="lg">
										See pricing
									</Button>
								</Link>
							</>
						}
					/>
				</MarketingSection>
			</div>

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
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/authentication.webp',
							alt: 'Authentication',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/admin-analytics.webp',
							alt: 'Admin panel',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/and-more.webp',
							alt: 'And more',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/authentication.webp',
							alt: 'Authentication',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/admin-analytics.webp',
							alt: 'Admin panel',
						},
						{
							image: 'https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/and-more.webp',
							alt: 'And more',
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
					subtitle="Save up to 200+ hours of development time with SaaSphere NextJS SaaS boilerplate, allowing you to focus on building your product and growing your business."
					keyPoints={[
						{
							icon: <LayoutDashboard className="min-w-10 min-h-10  text-primary" />, // Replace with a relevant Lucide icon, e.g., Target, Rocket, ShieldCheck
							point: (
								<div>
									<p className="text-start text-base md:text-xl">
										SaaSphere NextJS SaaS boilerplate comes ready with fully
										integrated{' '}
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
										SaaSphere NextJS SaaS boilerplate includes a fully
										functional <span className="font-bold">landing page</span>{' '}
										to help you get started quickly. It offers optimised{' '}
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
										Included in SaaSphere NextJS SaaS boilerplate are numerous
										essential features for every successful SaaS, such as a{' '}
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

			<MarketingSection>
				<h2 className="w-full text-start md:text-center font-bold text-2xl md:text-4xl lg:text-5xl lg:text-center text-primary">
					Get setup in 3 easy steps
				</h2>
			</MarketingSection>

			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 from-0% to-background to-80%">
				<MarketingSection className="mt-60 md:mt-40 ">
					<ParallaxContent
						title="Step 1 - Signup to SaaSphere"
						description="Sign up for a SaaSphere account to get started, and then select the plan that fits your needs best."
						image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/signup-to-get-started.svg"
						actions={
							<Link href="/auth/register">
								<Button className="w-fit">Signup to SaaSphere</Button>
							</Link>
						}
					/>
				</MarketingSection>
			</div>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 from-0% to-background to-80%">
				<MarketingSection disablePaddingTop>
					<ParallaxContent
						reverse
						title="Step 2 - Clone your SaaSphere repository"
						description="Follow our step-by-step guide to clone your SaaSphere NextJS SaaS boilerplate and set up your environments. We provide instructions for both local and production setups. It's that simple!"
						image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/clone-your-repo.svg"
						imageCover
						actions={
							<Link href="/docs">
								<Button variant="secondary" className="w-fit">
									Read the documentation
								</Button>
							</Link>
						}
					/>
				</MarketingSection>
			</div>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 from-0% to-background to-80%">
				<MarketingSection disablePaddingTop>
					<ParallaxContent
						title="Step 3 - Ship your SaaS in record time"
						description="
SaaSphere NextJS SaaS boilerplate saves you 200+ hours of development time, letting you focus on your product. Extensive documentation is available for deployment and customization."
						image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/launch.svg"
						imageCover
						actions={
							<div className="flex flex-row gap-4">
								<Link className="w-1/2 sm:w-fit" href="/auth/register">
									<Button className="w-full sm:w-fit">Get started</Button>
								</Link>
								<Link className="w-1/2 sm:w-fit" href="/docs">
									<Button variant="secondary" className="w-full sm:w-fit">
										Read the docs
									</Button>
								</Link>
							</div>
						}
					/>
				</MarketingSection>
			</div>

			<MarketingSection>
				<Testimonial
					title="Hear what our customers have to say"
					description="Read what our customers have to say about their experience with SaaSphere NextJS SaaS boilerplate."
					testimonials={[
						{
							image: 'https://element-landing-tina.s3.eu-west-2.amazonaws.com/Team/LukeBg%20(1).jpeg',
							name: 'Luke Brown',
							subtitle: 'CEO of &Element',
							quote: `"SaaSphere NextJS SaaS boilerplate has saved us countless hours of development time. It's the perfect starting point for any SaaS project."`,
						},
						{
							image: 'https://element-landing-tina.s3.eu-west-2.amazonaws.com/Team/joe-methven.png',
							name: 'Joe Methven',
							subtitle: 'CTO of Merlin Cloud',
							quote: `"Using the SaaSphere NextJS SaaS boilerplate has significantly cut down our development time. It’s the perfect framework to jumpstart any SaaS project."`,
						},
						{
							image: 'https://element-landing-tina.s3.eu-west-2.amazonaws.com/Team/reuben-restrop.png',
							name: 'Reuben Westrop',
							subtitle: 'CEO of Iron Brand',
							quote: `"SaaSphere has streamlined the development of my project, not only providing a solid foundation for my business, but allowing me to focus on managing my business."`,
						},
					]}
				/>
			</MarketingSection>
			<div
				className="bg-gradient-to-b from-background via-primary/10 to-background"
				id="pricing"
			>
				<MarketingSection>
					<Content
						title="Save countless hours of development time"
						description="SaaSphere NextJS SaaS boilerplate is the perfect starting point for any SaaS project. It comes with everything you need to build your SaaS, AI tool, or any web app, and start earning online quickly."
						imageCover
						image="https://nextjs-saas-boilerplate.s3.us-east-2.amazonaws.com/pricing-plans-mage.svg"
					/>
				</MarketingSection>

				<MarketingSection>
					<Pricing
						title="Ship your SaaS now"
						caption="View our pricing plans below"
						plans={Object.entries(plans)
							?.filter((p) => p[1].type === 'one-time')
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
			</div>

			<MarketingSection fadeSides disablePaddingTop disablePaddingBottom>
				<MarqueeText
					text={['Ship', 'Your', 'Next', 'SaaS', 'In', 'Record', 'Time']}
					direction="left"
				/>
			</MarketingSection>
			<MarketingSection>
				<CallToAction
					title="Ready to get started?"
					description="The SaaSphere NextJS SaaS boilerplate is the perfect foundation for any SaaS project. It includes all the essential tools to quickly build and launch your SaaS, AI app, or web platform, helping you start earning online faster."
				/>
			</MarketingSection>

			<MarketingSection>
				<FrequentlyAskedQuestions
					title="Frequently asked questions"
					description="Got a question? We've got answers. If you have any other questions, feel free to get in touch using our contact form below."
					faqs={[
						{
							question: 'What is SaaSphere?',
							answer: 'SaaSphere is a NextJS boilerplate equipped with everything you need to build your SaaS, AI tool, or any web app, and start earning online quickly.',
						},
						{
							question: 'How can I get started with SaaSphere?',
							answer: 'Getting started with SaaSphere is easy. Simply sign up for a SaaSphere account, clone your SaaSphere repository, and follow the step by step setup guide in our documentation.',
						},
						{
							question: 'How can I get in touch with the SaaSphere team?',
							answer: 'You can get in touch with the SaaSphere team by using our contact form below. We aim to respond to all queries within 24 hours.',
						},
						{
							question: 'What payment methods do you accept?',
							answer: 'We accept all major credit and debit cards, including Visa, Mastercard, and American Express.',
						},
						{
							question: 'Are there any hidden fees?',
							answer: 'No, there are no hidden fees. The price you see is the price you pay.',
						},
						{
							question: 'What stack does SaaSphere use?',
							answer: 'SaaSphere is built using NextJS, Shadcn/ui, and Tailwind CSS.',
						},
						{
							question: 'Does SaaSphere include a blog?',
							answer: 'Yes, SaaSphere includes a fully integrated CMS-ready blog to help you launch your content marketing.',
						},
						{
							question: 'What is the SaaSphere documentation like?',
							answer: 'The SaaSphere documentation is extensive and includes detailed guides for local setup, production setup, and customisation.',
						},
						{
							question: 'Why is SaaSphere the best choice for my SaaS project?',
							answer: 'SaaSphere is the best choice for your SaaS project because it saves you up to 200+ hours of development time, allowing you to focus on building your product and growing your business.',
						},
						{
							question: 'Why is SaaSphere cheaper than other SaaS boilerplates?',
							answer: 'SaaSphere is cheaper than other SaaS boilerplates because we believe in providing affordable solutions to help you get started quickly.',
						},
						{
							question: 'Do you have a Discord server?',
							answer: 'Yes, we have a Discord server where you can chat with other SaaSphere users and get support from the SaaSphere team for Full Access members.',
						},
						{
							question: 'Can I upgrade my plan at any time?',
							answer: 'Yes, you can upgrade your plan at any time by simply logging into your SaaSphere account and selecting the plan that best fits your needs. The upgrade will take effect immediately and the old price will be discounted from the new plan.',
						},
					]}
				/>
			</MarketingSection>

			<MarketingSection className="border-t-2" id="contact">
				<Contact
					title="Contact the team"
					description="Got a question? We're here to help. Get in touch with the SaaSphere team."
				/>
			</MarketingSection>
		</main>
	);
}

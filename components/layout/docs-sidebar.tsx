'use client';
import { Sidebar, SidebarGroup, SidebarItem } from '@/components/layout/sidebar';
import {
	AppWindowMac,
	Code,
	Columns2,
	Cuboid,
	File,
	FileScan,
	Lightbulb,
	Lock,
	MenuIcon,
	XIcon,
	Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { NavigationMobileDrawer } from './navigation-mobile-drawer';

export function DocsSidebar() {
	const [currentSection, setCurrentSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY; // Current scroll position
			const sections = document.querySelectorAll('.docs-section'); // Select section headers (modify if needed)

			sections.forEach((section: any) => {
				const sectionOffsetTop = section.offsetTop; // Distance of the section from the top
				const sectionHeight = section.offsetHeight;

				// Check if the current scroll position is within the section's range
				if (
					scrollPosition >= sectionOffsetTop - 10 && // Offset for a smoother transition
					scrollPosition < sectionOffsetTop + sectionHeight
				) {
					setCurrentSection(section.id); // Update state with the current section's ID
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const SIDEBAR_ITEMS = [
		{
			name: 'Essential information',

			items: [
				{
					text: 'Introduction',
					link: '/docs#introduction',
					icon: <Lightbulb size={20} />,
					visible: true,
					active: currentSection === 'introduction',
				},
				{
					text: 'Get started',
					link: '/docs#get-started',
					icon: <Zap size={20} />,
					visible: true,
					active: currentSection === 'get-started',
				},
				{
					text: 'Environment variables',
					link: '/docs#environment-variables',
					icon: <FileScan size={20} />,
					visible: true,
					active: currentSection === 'environment-variables',
					nested: [
						{
							text: 'Core',
							link: '/docs#environment-variables-core',
							visible: true,
							active: currentSection === 'environment-variables-core',
						},
						{
							text: 'Authentication',
							link: '/docs#environment-variables-auth',
							visible: true,
							active: currentSection === 'environment-variables-auth',
						},
						{
							text: 'File management',
							link: '/docs#environment-variables-file-management',
							visible: true,
							active: currentSection === 'environment-variables-file-management',
						},
						{
							text: 'Emails setup',
							link: '/docs#environment-variables-emails',
							visible: true,
							active: currentSection === 'environment-variables-emails',
						},
						{
							text: 'Payment/billing setup',
							link: '/docs#environment-variables-payment',
							visible: true,
							active: currentSection === 'environment-variables-payment',
						},
						{
							text: 'Contact form',
							link: '/docs#environment-variables-contact',
							visible: true,
							active: currentSection === 'environment-variables-contact',
						},
						{
							text: 'Blog',
							link: '/docs#environment-variables-blog',
							visible: true,
							active: currentSection === 'environment-variables-blog',
						},
					],
				},
			],
		},
		{
			name: 'Creating docs',

			items: [
				{
					text: 'Overview',
					link: '/docs/creating-docs#overview',
					icon: <AppWindowMac size={20} />,
					visible: true,
					active: currentSection === 'overview',
				},
				{
					text: 'Sidebar',
					link: '/docs/creating-docs#docs-sidebar',
					icon: <Columns2 size={20} />,
					visible: true,
					active: currentSection === 'docs-sidebar',
				},
				{
					text: 'Code blocks',
					link: '/docs/creating-docs#code-blocks',
					icon: <Code size={20} />,
					visible: true,
					active: currentSection === 'code-blocks',
				},
			],
		},
	];

	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			<div className="py-2 px-4 lg:px-6 absolute">
				<NavigationMobileDrawer
					open={navOpen}
					onOpenChange={(state) => {
						setNavOpen(state);
					}}
					drawerItems={SIDEBAR_ITEMS}
				/>
				<Button
					className="p-0 mr-4 block lg:hidden "
					onClick={() => setNavOpen((prev) => !prev)}
					variant="link"
				>
					{navOpen ? (
						<XIcon className="lg:hidden dark:text-white text-black" size={30} />
					) : (
						<MenuIcon className="lg:hidden dark:text-white text-black" size={30} />
					)}
				</Button>
			</div>
			<Sidebar fixed>
				{SIDEBAR_ITEMS?.map?.((group, index) => {
					return (
						<SidebarGroup key={index} text={group.name} visible={true}>
							{group.items.map((item, index) => {
								if (!item.visible) return null;

								return (
									<SidebarItem
										key={index}
										text={item.text}
										link={item.link}
										icon={item.icon}
										nested={item.nested}
										active={item.active}
									/>
								);
							})}
						</SidebarGroup>
					);
				})}
			</Sidebar>
		</>
	);
}

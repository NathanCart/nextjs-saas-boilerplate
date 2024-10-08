'use client';
import { Sidebar, SidebarGroup, SidebarItem } from '@/components/layout/sidebar';
import { AppWindowMac, Code, Columns2, Lightbulb, MenuIcon, XIcon, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { NavigationMobileDrawer } from './navigation-mobile-drawer';

export function DocsSidebar() {
	const SIDEBAR_ITEMS = [
		{
			name: 'Getting setup',

			items: [
				{
					text: 'Introduction',
					link: '/docs#introduction',
					icon: <Lightbulb size={20} />,
					visible: true,
				},
				{
					text: 'Quick start',
					link: '/docs#quick-start',
					icon: <Zap size={20} />,
					visible: true,
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
				},
				{
					text: 'Sidebar',
					link: '/docs/creating-docs#docs-sidebar',
					icon: <Columns2 size={20} />,
					visible: true,
				},
				{
					text: 'Code blocks',
					link: '/docs/creating-docs#code-blocks',
					icon: <Code size={20} />,
					visible: true,
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
					className="p-0 mr-4 block lg:hidden"
					onClick={() => setNavOpen((prev) => !prev)}
					variant="link"
				>
					{navOpen ? (
						<XIcon className="lg:hidden" size={30} />
					) : (
						<MenuIcon className="lg:hidden" size={30} />
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

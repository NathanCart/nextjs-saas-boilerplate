'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

type SideBarItem =
	| {
			text: string;
			link: string;
			icon?: React.ReactNode;
			visible: boolean;
			children?:
				| {
						text: string;
						link: string;
						icon?: React.ReactNode;
						visible: boolean;
				  }[]
				| undefined;
	  }[]
	| undefined;

export interface SidebarItemProps {
	size?: 'sm' | 'md';
	link: string;
	text: string;
	icon?: React.ReactNode;
	prefetch?: boolean;
	onClick?: () => void;
	children: SideBarItem;
}
export function SidebarItem(props: SidebarItemProps) {
	const { prefetch = true } = props;
	const pathName = usePathname();

	const isActive = pathName === props.link;
	return (
		<div>
			<Link
				href={props.link}
				prefetch={prefetch}
				onClick={() => props?.onClick?.()}
				className="h-9"
			>
				<Button
					size="sm"
					className={`w-full  justify-start px-4 flex items-center gap-2 ${
						isActive && 'font-bold'
					} 
					${props.size === 'sm' ? 'text-[0.8rem] h-7 font-normal' : 'text-sm'}
					`}
					variant={isActive ? 'default' : 'ghost'}
				>
					{props.icon}
					{props.text}
				</Button>
			</Link>
			{props.children && (
				<div className="pl-4">
					{props.children.map((child) => (
						<SidebarItem
							size="sm"
							key={child.link}
							link={child.link}
							text={child.text}
							icon={child.icon}
							children={child.children}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export interface SidebarGroupProps {
	text: string;
	children?: React.ReactNode;
	visible?: boolean;
	mobile?: boolean;
	hideOnMobile?: boolean;
}
export function SidebarGroup(props: SidebarGroupProps) {
	const { visible = true } = props;
	if (!visible) return null;
	return (
		<>
			<Accordion
				defaultChecked
				className={`${
					props.mobile && !props.hideOnMobile ? 'lg:hidden block' : 'hidden lg:block'
				} `}
				type="single"
				defaultValue="item-1"
				collapsible
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-xs py-2 text-muted-foreground font-semibold uppercase">
						{props.text}
					</AccordionTrigger>
					<AccordionContent className="flex flex-col pb-2">
						{props.children}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}

export function Sidebar({ children, fixed }: { children: React.ReactNode; fixed?: boolean }) {
	return (
		<aside
			style={{}}
			className={`w-0 lg:w-[270px]  border-border transition-all px-0 py-3 lg:px-4 lg:border-r`}
		>
			<div
				className={`flex flex-col flex-1 ${
					fixed && 'overflow-auto fixed top-24 left-0 w-0 lg:w-[270px] px-0 py-6 lg:p-4'
				}`}
			>
				{children}
			</div>
		</aside>
	);
}

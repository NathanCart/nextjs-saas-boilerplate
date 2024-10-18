'use client';

import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface DocumentationAlertProps {
	children: React.ReactNode;
	title: string;
	variant?: 'default' | 'destructive' | 'informative';
}

export function DocumentationAlert(props: DocumentationAlertProps) {
	const { variant = 'informative' } = props;
	return (
		<Alert variant={variant} className="my-8">
			<Info className="h-5 w-5" />
			<AlertTitle>{props.title}</AlertTitle>
			<AlertDescription>{props.children}</AlertDescription>
		</Alert>
	);
}

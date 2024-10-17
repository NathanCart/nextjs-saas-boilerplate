'use client';

import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface DocumentationAlertProps {
	children: React.ReactNode;
	title: string;
}

export function DocumentationAlert(props: DocumentationAlertProps) {
	return (
		<Alert variant="informative" className="my-8">
			<Info className="h-5 w-5" />
			<AlertTitle>{props.title}</AlertTitle>
			<AlertDescription>{props.children}</AlertDescription>
		</Alert>
	);
}

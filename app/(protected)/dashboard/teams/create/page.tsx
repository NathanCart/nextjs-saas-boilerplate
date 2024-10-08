import { TeamsForm } from '@/components/forms/teams-form';
import { Separator } from '@/components/ui/separator';

export default async function DashboardPage() {
	return (
		<main className="flex flex-col gap-4 max-w-2xl">
			<div className="">
				<p className="text-xl font-bold">Create a new team</p>
				<p className="text-muted-foreground text-sm">
					Fill in the details below to setup your team
				</p>
			</div>
			<Separator />
			<div className="flex flex-col gap-2">
				<TeamsForm />
			</div>
		</main>
	);
}

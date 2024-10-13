'use client';

import { Quote } from 'lucide-react';

interface TestimonialProps {
	title?: string;
	description?: string;
	testimonials: {
		name: string;
		subtitle: string;
		quote: string;
		image: string;
	}[];
}

export function Testimonial(props: TestimonialProps) {
	//Split the testimonials into three groups

	return (
		<section className="flex flex-col items-start  md:items-center gap-4 md:gap-16 text-start md:text-center">
			<div className="flex md:items-center flex-col">
				{!!props.title ? (
					<h2 className="w-full font-semibold text-2xl md:text-4xl lg:text-5xl max-w-[22ch]">
						{props.title}
					</h2>
				) : null}
				{!!props.description ? (
					<p className="text-base  mt-4 md:text-lg font-normal text-muted-foreground max-w-[65ch]">
						{props.description}
					</p>
				) : null}
			</div>

			<div className="max-w-lg text-start flex flex-col gap-14 lg:gap-24 mt-14 lg:mt-32">
				{props.testimonials?.map((testimonial, index) => {
					return (
						<div key={index} className="flex flex-col gap-4">
							<Quote size={40} className="text-primary " />
							<p className="text-base lg:text-lg">{testimonial.quote}</p>

							<div className="flex flex-row gap-4 items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="size-10 rounded-full"
								/>
								<div>
									<p className="">{testimonial.name}</p>
									<p className="text-sm text-muted-foreground">
										{testimonial.subtitle}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

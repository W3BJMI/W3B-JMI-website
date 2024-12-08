import { Event } from '@/sanity.types';

import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface EventsProps {
	events: Array<
		Pick<Event, 'mainImage' | 'slug' | 'title' | 'location' | 'date'>
	>;
}

export default function Events({ events }: EventsProps) {
	console.log(events);

	return (
		<section className='min-h-svh bg-slate-900 text-white px-5 space-y-20 py-10'>
			<h3 className='uppercase font-unbounded text-3xl leading-8 font-medium text-center pt-10'>
				What&apos;s <br />
				<span className='italic'>Happening?</span>
			</h3>
			<div className='space-y-16 px-2'>
				{events.length > 0 &&
					events.map((event) => (
						<div
							key={event.slug?.current}
							className='relative min-h-[480px] p-8 rounded-3xl rounded-tr-[100px] rounded-bl-[100px] bg-cover bg-center transition-transform duration-300 group-hover:scale-110 overflow-hidden space-y-2'
							style={{
								backgroundImage: `url(${urlFor(event.mainImage!).height(800).width(500).url()})`,
							}}
						>
							{/* Gradient Overlay */}
							<div className='absolute inset-0 bg-gradient-to-br from-black/85 via-transparent to-black/70 pointer-events-none'></div>

							{/* Card Content */}
							<div className='relative z-10'>
								<h4 className='text-3xl font-medium leading-9 text-wrap w-4/5'>
									{event.title}
								</h4>
								<p className='text-lg text-gray-300 font-sans tracking-tight'>
									{event.location}
								</p>
								<p className='text-sm font-medium text-gray-500 font-sans'>
									{event.date
										? new Date(event.date).toLocaleDateString()
										: null}
								</p>
							</div>
							<Link
								className='bg-purple-700 hover:bg-purple-900 p-4 block w-min my-6 rounded-full cursor-pointer transition-all absolute bottom-10'
								href={`/events/${event.slug?.current}`}
							>
								<svg
									width='16'
									height='16'
									viewBox='0 0 27 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M18.8241 0.220689L26.4333 7.76461L26.476 7.80374C26.606 7.93268 26.676 8.0986 26.686 8.26736V8.35654C26.676 8.52531 26.606 8.69122 26.476 8.82016L26.4385 8.85185L18.8241 16.4032C18.5424 16.6826 18.0856 16.6826 17.8038 16.4032C17.5221 16.1238 17.5221 15.6709 17.8038 15.3915L24.306 8.9427L1.42235 8.94327C1.02392 8.94327 0.700928 8.62298 0.700928 8.22788C0.700928 7.83279 1.02392 7.5125 1.42235 7.5125L24.1364 7.51194L17.8038 1.23239C17.5221 0.953017 17.5221 0.500063 17.8038 0.220689C18.0856 -0.0586855 18.5424 -0.0586855 18.8241 0.220689ZM26.0475 8.22728L18.314 15.8974L25.9658 8.3121L25.9658 8.30933L25.9232 8.27051L25.8796 8.22728H26.0475Z'
										fill='#F5F5F5'
									/>
								</svg>
							</Link>
						</div>
					))}
			</div>
		</section>
	);
}

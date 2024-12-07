import { Event } from '@/sanity.types';

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
				What's <br />
				<span className='italic'>Happening?</span>
			</h3>
			<div className='space-y-8'>
				{events.length > 0 &&
					events.map((event) => (
						<div
							key={event.slug?.current}
							className='event-card'
						>
							<h4 className='text-xl font-bold'>{event.title}</h4>
							<p className='text-sm text-gray-300'>{event.location}</p>
							<p className='text-sm text-gray-500'>
								{event.date ? new Date(event.date).toLocaleDateString() : null}
							</p>
							<a
								href={`/events/${event.slug?.current}`}
								className='text-blue-400 hover:underline'
							>
								View Details
							</a>
						</div>
					))}
			</div>
		</section>
	);
}

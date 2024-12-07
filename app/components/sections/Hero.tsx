import Image from 'next/image';
import Link from 'next/link';

import heroImg from './../../../public/hero-img.jpeg';

export default function Hero() {
	return (
		<section className='min-h-svh pt-[3svh] bg-slate-900 text-white px-5 space-y-6'>
			<h1 className='text-3xl font-unbounded font-light pt-36'>
				Empowering <br />
				the Future with
				<br />
				Blockchain and AI
			</h1>
			<p className='font-sans text-xl leading-6'>
				Transforming Ideas <br /> into Impact at Jamia
			</p>
			<div className='pt-2'>
				<Link
					className='py-3.5 px-4 rounded-lg text-sm bg-black uppercase flex w-max items-center tracking-wider gap-5'
					href='#'
				>
					Join Us{' '}
					<svg
						className='block'
						width='27'
						height='17'
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

			<div>
				<div className='relative'>
					<div></div>
					<Image
						src={heroImg}
						alt='Hero Image for W3B'
						className='min-h-[43svh]'
					/>
				</div>
				<h4 className='uppercase font-unbounded text-4xl -top-7 relative leading-8 font-semibold'>
					We <br />
					Are
				</h4>
			</div>
		</section>
	);
}

import '../globals.css';

import type { Metadata } from 'next';
import { toPlainText } from 'next-sanity';
import { Inter, Unbounded, Instrument_Sans } from 'next/font/google';

import * as demo from '@/sanity/lib/demo';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';

export async function generateMetadata(): Promise<Metadata> {
	const settings = await sanityFetch({
		query: settingsQuery,
		// Metadata should never contain stega
		stega: false,
	});
	const title = settings?.title || demo.title;
	const description = settings?.description || demo.description;

	const ogImage = resolveOpenGraphImage(settings?.ogImage);
	let metadataBase: URL | undefined = undefined;
	try {
		metadataBase = settings?.ogImage?.metadataBase
			? new URL(settings.ogImage.metadataBase)
			: undefined;
	} catch {
		// ignore
	}
	return {
		metadataBase,
		title: {
			template: `%s | ${title}`,
			default: title,
		},
		description: toPlainText(description),
		openGraph: {
			images: ogImage ? [ogImage] : [],
		},
	};
}

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

const unbounded = Unbounded({
	variable: '--font-unbounded',
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
});

const instrument_sans = Instrument_Sans({
	variable: '--font-instrument-sans',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head></head>
			<body className={unbounded.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}

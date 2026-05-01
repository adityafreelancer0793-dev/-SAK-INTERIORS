import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'S A K INTERIORS | Premium Interior Designer in Hyderabad',
  description: 'Elevate your living with S A K INTERIORS. Best Interior Designer in Hyderabad, Miyapur & Gachibowli. 12 Years Experience, 4.8★ Rating.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

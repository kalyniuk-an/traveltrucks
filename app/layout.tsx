import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-family',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TravelTrucks — camper rental',
    template: '%s | TravelTrucks',
  },
  description:
    'TravelTrucks is a camper rental service. Find the perfect campervan for your trip: filter by location, body type, engine and transmission.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

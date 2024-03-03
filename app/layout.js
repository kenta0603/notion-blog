import '../styles/globals.css';

import { Inter } from 'next/font/google';
import { SwitchTheme } from '../components/switch-theme';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
export const maxDuration = 5;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SwitchTheme />
    </html>
  );
}

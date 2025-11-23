
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import Header from './component/header';
import './globals.css';

export const metadata: Metadata = { /* ... */ };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
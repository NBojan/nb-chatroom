import './globals.css'
import type { Metadata } from 'next'
import { AppProvider } from "./context";
import { myMetadata } from './utils/helpingHand';
import { Cabin, Quicksand } from 'next/font/google'

const cabin = Cabin({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin" 
});
const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand" 
});

export const metadata: Metadata = myMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cabin.variable} ${quicksand.variable}`}>
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}

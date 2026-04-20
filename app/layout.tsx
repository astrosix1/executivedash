import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExecutiveDash - Your Business Data, One Place",
  description:
    "Stop logging into Salesforce, Stripe, Analytics, and QuickBooks. See what matters in 30 seconds with ExecutiveDash.",
  openGraph: {
    title: "ExecutiveDash - Your Business Data, One Place",
    description:
      "Stop logging into Salesforce, Stripe, Analytics, and QuickBooks. See what matters in 30 seconds with ExecutiveDash.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-50 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

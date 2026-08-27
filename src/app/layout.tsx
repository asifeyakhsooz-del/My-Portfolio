import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asif Ali | Real Estate Bookkeeper & QuickBooks ProAdvisor",
  description:
    "QuickBooks Online ProAdvisor specializing in bookkeeping for property managers, landlords, and real estate investors. Clean up messy books, reconcile accounts, and get accurate financial reports.",
  keywords: [
    "Real Estate Bookkeeper",
    "QuickBooks Online Bookkeeper",
    "Property Management Bookkeeping",
    "Short-Term Rental Bookkeeping",
    "Bookkeeping Cleanup",
    "Bank Reconciliation",
    "AppFolio Bookkeeping",
    "Buildium Bookkeeping",
    "Real Estate Accounting",
    "Property Management Accounting",
    "QuickBooks ProAdvisor",
    "Xero Advisor",
    "Monthly Bookkeeping",
    "Financial Reporting",
    "Month-End Close",
  ],
  authors: [{ name: "Asif Ali" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Asif Ali | Real Estate Bookkeeper & QuickBooks ProAdvisor",
    description:
      "Specialized bookkeeping for property managers, landlords, and real estate investors. Clean books, clear insights, better decisions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Ali | Real Estate Bookkeeper & QuickBooks ProAdvisor",
    description:
      "Specialized bookkeeping for property managers, landlords, and real estate investors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

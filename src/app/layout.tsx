import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F7F3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Fermor — Understand Your Money. Move With Confidence.",
  description:
    "Fermor brings your financial world into one clear, intelligent 3D experience — helping you understand where you are and make better decisions about where you're going.",
  keywords: [
    "fintech",
    "financial clarity",
    "wealth planning",
    "financial universe",
    "cash flow modeling",
    "personal finance",
    "fermor",
  ],
  authors: [{ name: "Fermor Technologies" }],
  openGraph: {
    title: "Fermor — Understand Your Money. Move With Confidence.",
    description:
      "A next-generation 3D financial experience. Connect, model, and grow your wealth with deterministic clarity.",
    url: "https://fermor.app",
    siteName: "Fermor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermor — Understand Your Money. Move With Confidence.",
    description:
      "Financial clarity without the complexity. Experience your financial universe in interactive 3D.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#F7F7F3] text-[#111111] selection:bg-emerald-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

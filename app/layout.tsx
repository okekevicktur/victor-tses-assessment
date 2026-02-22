import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soludesk - Professional Skills Platform",
    template: "%s | Soludesk",
  },
  description:
    "Master any skill with Soludesk's professional training courses. Learn from industry experts and advance your career.",
  keywords: [
    "e-learning",
    "professional skills",
    "online courses",
    "corporate training",
    "skill development",
  ],
  authors: [{ name: "Soludesk Team" }],
  creator: "Soludesk",
  publisher: "Soludesk Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soludesk-platform.vercel.app",
    siteName: "Soludesk",
    title: "Soludesk - Professional Skills Training Platform",
    description:
      "Empower your career with professionally crafted courses on Soludesk.",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Soludesk - Professional Skills Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soludesk - Professional Skills Training Platform",
    description:
      "Empower your career with professionally crafted courses on Soludesk.",
    creator: "@soludesk",
    images: ["/images/thumbnail.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Providers>
          <div className="max-w-[1860px] mx-auto min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

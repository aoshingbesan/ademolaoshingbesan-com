import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ademolaoshingbesan.com"),
  title: "Ademola Oshingbesan",
  description: "Personal site of Ademola Oshingbesan — under construction.",
  openGraph: {
    title: "Ademola Oshingbesan",
    description: "Personal site of Ademola Oshingbesan — under construction.",
    url: "https://ademolaoshingbesan.com",
    siteName: "Ademola Oshingbesan",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

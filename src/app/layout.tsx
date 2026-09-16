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
  description:
    "Ademola Oshingbesan — Design Engineer bridging product design and software engineering.",
  openGraph: {
    title: "Ademola Oshingbesan",
    description:
      "Ademola Oshingbesan — Design Engineer bridging product design and software engineering.",
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
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}

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
  description: "Ademola Oshingbesan — Design Engineer bridging product design and software engineering. Site under construction.",
  openGraph: {
    title: "Ademola Oshingbesan",
    description: "Ademola Oshingbesan — Design Engineer bridging product design and software engineering. Site under construction.",
    url: "https://ademolaoshingbesan.com",
    siteName: "Ademola Oshingbesan",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-[100dvh] flex-col overflow-x-hidden lg:h-[100dvh] lg:overflow-hidden">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=localStorage.getItem('theme')==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

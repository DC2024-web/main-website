import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DC 2024",
  description: "DC 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/DC2024_LOGO.png" type="image/png" />
        <title>DC 2024</title>
        <meta name="description" content="DC 2024" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

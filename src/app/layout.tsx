import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import Header from "./components/Header";

// import Link from "next/link";
import Footer2 from "./components/Footer";
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
  title: "Coffee Shop",
  description: "This is my Coffee Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#fdefdb]">
          <Header />
        </div>
        {children}
        {/* <Footer /> */}
        <Footer2 />
      </body>
    </html>
  );
}

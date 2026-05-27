import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pouria Portfolio",
  description: "Pouria Vojdani's Personal Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}

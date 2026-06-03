import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pouriavojdani.ir"),
  title: "Pouria Vojdani Portfolio",
  description:
    "Portfolio of Pouria Vojdani, Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and React Native.",

  openGraph: {
    title: "Pouria Vojdani Portfolio",
    description:
      "Portfolio of Pouria Vojdani, Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and React Native.",
    url: "https://pouriavojdani.ir",
    siteName: "Pouria Vojdani Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://pouriavojdani.ir",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "J_Lh70Mw7L2hiHPJAfoZNRprpGlhLNkIaI_gisA4bOU",
  },
  authors: [{ name: "Pouria Vojdani" }],
  keywords: [
    "Pouria Vojdani",
    "portfolio",
    "full stack developer",
    "frontend developer",
    "Next.js developer",
    "React developer",
    "JavaScript developer",
    "web developer portfolio",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};
export const viewport: Viewport = {
  themeColor: "#1a1a2a",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

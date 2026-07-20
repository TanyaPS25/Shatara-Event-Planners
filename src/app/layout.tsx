import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Shatara Event Planners",
  description: "Luxury event planning and celebration experiences.",
};

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const utility = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-utility",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${utility.variable} bg-background font-body text-on-surface antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

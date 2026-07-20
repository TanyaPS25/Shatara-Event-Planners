import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Shatara Event Planners",
  description: "Luxury event planning and celebration experiences.",
};

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} bg-[var(--page)] font-body text-[var(--ink)]`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

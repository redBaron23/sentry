import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentrio",
  description: "Todas tus métricas de ciberseguridad en un solor lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/styles/index.scss";
import Noise from "@/components/Noise";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--instrument-serif",
});

export const metadata: Metadata = {
  title: "Jiayi Zhan | Progettazione e sviluppo di siti web",
  description: "Sviluppatore di siti web con sede in provincia di Cuneo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} bg-stone-300 font-inter`}
      >
        <Noise />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

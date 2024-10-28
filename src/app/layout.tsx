import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/styles/index.scss";
import Noise from "@/components/Noise";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--instrument-serif",
});

export const metadata: Metadata = {
  title: "Jiayi Zhan | Design e realizzazione di siti web",
  description:
    "Jiayi Zhan è un programmatore e sviluppatore web, applicazioni e siti web per la tua attività. Sede in provincia di Cuneo.",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

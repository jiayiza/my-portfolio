import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/styles/index.scss";
import Noise from "@/components/Noise";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--instrument-serif",
});

export const metadata: Metadata = {
  title: "JJ",
  description: "",
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
      </body>
    </html>
  );
}

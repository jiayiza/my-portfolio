"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type LenisProps = {
  children: ReactNode;
};

export default function Lenis({ children }: LenisProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}

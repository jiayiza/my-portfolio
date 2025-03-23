"use client";

import Link from "next/link";
import { Light2 } from "./LightEffect";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "chiamata-conoscitiva" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      id="contact"
    >
      <footer className="fixed bottom-0 h-full w-full">
        <Light2 />

        <div className="relative mx-6 flex h-full flex-col items-center justify-center gap-4">
          <div className="mb-6 flex items-center justify-center gap-6">
            <div className="h-px w-16 rounded bg-gradient-to-l from-neutral-500"></div>
            <h4 className="text-center font-instrument-serif text-2xl italic text-neutral-500">
              Al momento disponibile
            </h4>
            <div className="h-px w-16 rounded bg-gradient-to-r from-neutral-500"></div>
          </div>

          <h2 className="text-center font-instrument-serif text-4xl text-white lg:text-6xl">
            Contatti
          </h2>
          <p className="max-w-[550px] text-center text-neutral-500">
            Non esitare a contattarmi per qualsiasi domanda. Sono disponibile
            per nuovi progetti o anche solo per una chiacchierata.
          </p>

          <div className="mx-auto mb-[10vh] mt-6 flex flex-col items-center gap-4 md:flex-row">
            <button
              data-cal-namespace="chiamata-conoscitiva"
              data-cal-link="jiayizhan/chiamata-conoscitiva"
              data-cal-config='{"layout":"month_view"}'
              className="w-fit rounded-full border bg-white px-6 py-3 text-black"
            >
              Fissiamo una chiamata conoscitiva
            </button>

            <Link
              href={"mailto:jiayizhan8@gmail.com"}
              className="arrow-link flex items-center justify-center rounded-full border border-white px-6 py-3 text-white sm:w-fit"
              target="_blank"
            >
              ... preferisco scrivere un{"'"}email
              <svg
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow relative ml-2 inline-block h-[0.65em] w-auto"
              >
                <path
                  d="M144 8V112C144 114.122 143.157 116.157 141.657 117.657C140.157 119.157 138.122 120 136 120C133.878 120 131.843 119.157 130.343 117.657C128.843 116.157 128 114.122 128 112V27.31L13.66 141.66C12.1589 143.161 10.1229 144.004 7.99999 144.004C5.87708 144.004 3.84112 143.161 2.33999 141.66C0.838867 140.159 -0.00445557 138.123 -0.00445557 136C-0.00445557 133.877 0.838867 131.841 2.33999 130.34L116.69 16H32C29.8783 16 27.8434 15.1571 26.3431 13.6569C24.8428 12.1566 24 10.1217 24 8C24 5.87827 24.8428 3.84344 26.3431 2.34315C27.8434 0.842856 29.8783 0 32 0H136C138.122 0 140.157 0.842856 141.657 2.34315C143.157 3.84344 144 5.87827 144 8Z"
                  fill="white"
                  fillOpacity={0.95}
                />
              </svg>
            </Link>
          </div>

          <div className="absolute bottom-8 flex w-full flex-col-reverse items-center justify-between gap-y-4 px-6 text-white md:flex-row md:px-12">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Jiayi Zhan
            </span>

            <div className="flex items-center gap-4 text-sm">
              <Link
                href={"https://www.linkedin.com/in/jiayizhan/"}
                target="_blank"
              >
                Linkedin
              </Link>
              <Link
                href={"https://www.instagram.com/_jiayizhan/"}
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                href={"mailto:jiayizhan8@gmail.com"}
                className="rounded-full border border-zinc-800 px-3 py-1"
                target="_blank"
              >
                jiayizhan8@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

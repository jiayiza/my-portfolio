"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollAnimatedParagraphProps = {
  className?: string;
  children: string;
};

export default function ScrollAnimatedParagraph({
  className,
  children,
}: ScrollAnimatedParagraphProps) {
  const paragraph = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray("span");

      gsap.to(words, {
        opacity: 1,
        stagger: 0.1,

        scrollTrigger: {
          trigger: paragraph.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.1,
        },
      });
    },
    { scope: paragraph },
  );

  return (
    <p className={className} ref={paragraph}>
      {children.split(" ").map((word, index) => {
        return (
          <span key={index} style={{ opacity: 0.2 }}>
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}

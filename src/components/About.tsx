import ScrollAnimatedParagraph from "./ScrollAnimatedParagraph";
import { twMerge } from "tailwind-merge";

export default function About() {
  return (
    <div className="relative mt-40">
      <div className="flex items-center justify-center gap-6">
        <div className="h-px w-16 rounded bg-gradient-to-l from-neutral-600"></div>
        <h4 className="font-instrument-serif text-2xl italic text-neutral-600">
          Ciao!
        </h4>
        <div className="h-px w-16 rounded bg-gradient-to-r from-neutral-600"></div>
      </div>

      <div className="relative mt-8 px-6 md:mt-10 md:px-12">
        <ScrollAnimatedParagraph className="mx-auto w-full text-center font-instrument-serif text-3xl md:max-w-[600px] md:text-4xl md:leading-snug lg:max-w-[780px] lg:text-5xl lg:leading-snug">
          Sviluppo siti web ottimizzati per i motori di ricerca, aiutandoti a
          ottenere maggiore visibilità e attrarre più traffico qualificato.
        </ScrollAnimatedParagraph>

        <div className="mt-10 flex w-full justify-center gap-40 md:absolute md:-top-12 md:left-0 md:gap-[630px] lg:-top-8 lg:gap-[840px]">
          <div className="flex flex-col gap-8 lg:gap-10">
            <SkillBadge className="translate-x-10 rotate-3">Web</SkillBadge>
            <SkillBadge className="translate-x-4 rotate-6">UI / UX</SkillBadge>
            <SkillBadge className="translate-x-12 -rotate-6">
              Ricerca
            </SkillBadge>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10">
            <SkillBadge className="-translate-x-2 -rotate-6">
              Animazioni
            </SkillBadge>
            <SkillBadge className="-translate-x-2 -rotate-6">
              Prototipi
            </SkillBadge>
            <SkillBadge className="-translate-x-10 rotate-12">
              Strategia
            </SkillBadge>
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillBadge = ({
  children,
  className = "",
}: {
  [index: string]: string;
}) => {
  return (
    <p
      className={twMerge(
        "w-fit rounded-full bg-white px-6 py-2 text-black shadow-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

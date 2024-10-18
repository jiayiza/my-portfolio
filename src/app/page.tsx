import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Light1 } from "@/components/LightEffect";
import ProjectCard from "@/components/ProjectCard";
import ScrollAnimatedParagraph from "@/components/ScrollAnimatedParagraph";
import Lenis from "@/components/Lenis";

export default function Home() {
  return (
    <Lenis>
      <main>
        <header className="mb-16 px-6 pt-36 md:px-12 lg:pt-56">
          <Light1 />
          <h1 className="mb-5 text-center font-instrument-serif text-[min(8vw,3rem)] leading-normal md:text-6xl md:leading-tight lg:mb-6 lg:text-7xl">
            <span className="whitespace-nowrap">
              Mi chiamo <em className="text-neutral-500">Jiayi</em>{" "}
              <InlineImage />,
            </span>
            <br />
            <span className="whitespace-nowrap">
              uno <em className="text-neutral-500">sviluppatore</em>
              <InlineImage className="ml-2 mr-1 md:ml-3" />
              web
            </span>
            <br />
            <span className="whitespace-nowrap">
              in provincia di Cuneo
              <InlineImage />.
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-[450px] text-center text-neutral-500 lg:mb-10">
            In 2 anni ho lavorato con attività locali nella creazioni di siti
            intuitive e performanti, risolvendo problemi concreti.
          </p>

          <Link
            href={""}
            className="arrow-link mx-auto flex items-center justify-center rounded-full bg-black px-6 py-3 text-white sm:w-fit"
          >
            Contattami
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
                fillOpacity={0.75}
              />
            </svg>
          </Link>
        </header>

        {/* projects */}
        <div className="grid grid-cols-1 grid-rows-1 gap-8 px-6 md:grid-cols-2 md:px-12 lg:gap-10">
          <ProjectCard
            frontImage="/images/projects/front1.avif"
            backImage="/images/projects/back1.avif"
            title="Remix Supply"
          />

          <ProjectCard
            frontImage="/images/projects/front1.avif"
            backImage="/images/projects/back1.avif"
            title="Remix Supply"
          />

          <ProjectCard
            frontImage="/images/projects/front1.avif"
            backImage="/images/projects/back1.avif"
            title="Remix Supply"
          />

          <ProjectCard
            frontImage="/images/projects/front1.avif"
            backImage="/images/projects/back1.avif"
            title="Remix Supply"
          />

          <ProjectCard
            frontImage="/images/projects/front1.avif"
            backImage="/images/projects/back1.avif"
            title="Remix Supply"
          />
        </div>

        <div className="relative mt-40">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 rounded bg-gradient-to-l from-neutral-600"></div>
            <h4 className="font-instrument-serif text-2xl italic text-neutral-600">
              Ciao!
            </h4>
            <div className="h-px w-16 rounded bg-gradient-to-r from-neutral-600"></div>
          </div>

          <div className="relative mt-8 px-6 md:px-12">
            <ScrollAnimatedParagraph className="mx-auto w-full text-center font-instrument-serif text-3xl md:max-w-[600px] md:text-4xl md:leading-snug lg:max-w-[780px] lg:text-5xl lg:leading-snug">
              I help startups and enterprise to establish an emotional
              connection between their products and happy engaged customers.
            </ScrollAnimatedParagraph>

            <div className="mt-10 flex w-full justify-center gap-40 md:absolute md:-top-12 md:left-0 md:gap-[630px] lg:-top-8 lg:gap-[840px]">
              <div className="flex flex-col gap-8 lg:gap-10">
                <SkillBadge className="translate-x-10 rotate-3">Web</SkillBadge>
                <SkillBadge className="translate-x-4 rotate-6">
                  UI / UX
                </SkillBadge>
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

        <div className="mt-32 pb-14">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 rounded bg-gradient-to-l from-neutral-600"></div>
            <h4 className="font-instrument-serif text-2xl italic text-neutral-600">
              Esperienze
            </h4>
            <div className="h-px w-16 rounded bg-gradient-to-r from-neutral-600"></div>
          </div>

          <div className="mt-8 px-6 md:px-12">
            <ExperienceItem
              role="Sviluppatore Web Freelancer"
              company="Jiayi Zhan"
              duration="2022 → Presente"
              className="pt-0"
            />

            <ExperienceItem
              role="Programmatore Laravel"
              company="Ascensori Rossini"
              duration="Estate 2023"
            />

            <ExperienceItem
              role="Copywriter"
              company="Autonomo"
              duration="2020 - 2022"
              className="border-b-0 pb-0"
            />
          </div>
        </div>
      </main>
    </Lenis>
  );
}

const InlineImage = ({ className = "" }: { className?: string }) => {
  return (
    <span
      className={twMerge(
        `ml-1 inline-block h-[1em] w-[1.4em] rounded-full border-2 border-black bg-red-200 align-middle md:border-4`,
        className,
      )}
    ></span>
  );
};

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

const ExperienceItem = ({
  role,
  company,
  duration,
  className = "",
}: {
  [index: string]: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-1 border-b border-neutral-500 py-6 md:flex-row md:items-center md:justify-between md:gap-0",
        className,
      )}
    >
      <h4 className="text-lg text-neutral-500 md:w-2/5 md:text-xl">{role}</h4>
      <h2 className="text-lg md:flex-1 md:text-xl">{company}</h2>
      <p className="text-base text-neutral-500 md:text-lg">{duration}</p>
    </div>
  );
};

import { twMerge } from "tailwind-merge";

export default function Experiences() {
  return (
    <div className="mx-auto mt-32 max-w-[1290px] pb-20 md:mt-40 md:pb-24">
      <div className="flex items-center justify-center gap-6">
        <div className="h-px w-16 rounded bg-gradient-to-l from-neutral-600"></div>
        <h4 className="font-instrument-serif text-2xl italic text-neutral-600">
          Esperienze
        </h4>
        <div className="h-px w-16 rounded bg-gradient-to-r from-neutral-600"></div>
      </div>

      <div className="mt-8 px-6 md:mt-10 md:px-12">
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
          duration="2020 → 2022"
          className="border-b-0 pb-0"
        />
      </div>
    </div>
  );
}

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
        "flex flex-col gap-1 border-b border-neutral-500 py-6 md:flex-row md:items-center md:justify-between md:gap-0 md:py-10",
        className,
      )}
    >
      <h4 className="text-lg text-neutral-500 md:w-2/5 md:text-xl">{role}</h4>
      <h2 className="text-lg md:flex-1 md:text-xl">{company}</h2>
      <p className="text-base text-neutral-500 md:text-lg">{duration}</p>
    </div>
  );
};

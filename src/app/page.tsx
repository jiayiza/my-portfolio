import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <header className="border border-rose-100 px-6 pt-36 md:px-12 lg:pt-56">
        <h1 className="mb-5 text-center font-instrument-serif text-[min(8vw,3rem)] leading-normal md:text-6xl md:leading-tight lg:text-7xl">
          <span className="whitespace-nowrap">
            Mi chiamo <em className="opacity-50">Jiayi</em> <InlineImage />,
          </span>
          <br />
          <span className="whitespace-nowrap">
            uno <em className="opacity-50">sviluppatore</em>
            <InlineImage className="ml-2 mr-1" />
            web
          </span>
          <br />
          <span className="whitespace-nowrap">
            in provincia di Cuneo
            <InlineImage />.
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-[450px] text-center text-black text-opacity-50">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands
        </p>

        <Link
          href={""}
          className="mx-auto flex items-center justify-center rounded-full bg-black px-6 py-3 text-white sm:w-fit"
        >
          Contattami
        </Link>
      </header>

      <div className="h-[300vh]"></div>
    </main>
  );
}

const InlineImage = ({ className = "" }: { className?: string }) => {
  return (
    <span
      className={twMerge(
        `ml-1 inline-block h-[1em] w-[1.4em] rounded-full border-4 border-black bg-red-200 align-middle`,
        className,
      )}
    ></span>
  );
};

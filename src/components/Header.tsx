import Image from "next/image";
import Link from "next/link";
import { Light1 } from "./LightEffect";
import { twMerge } from "tailwind-merge";

export default function Header() {
  return (
    <header className="mb-16 px-6 pt-36 md:px-12 lg:pt-56">
      <Light1 />
      <h1 className="mb-5 text-center font-instrument-serif text-[min(8vw,3rem)] leading-normal md:text-6xl md:leading-tight lg:mb-6 lg:text-7xl">
        <span className="whitespace-nowrap">
          Mi chiamo <em className="text-neutral-500">Jiayi (JJ)</em>{" "}
          <InlineImage src="/images/jiayi.png" />,
        </span>
        <br />
        <span className="whitespace-nowrap">
          uno <em className="text-neutral-500">sviluppatore</em>
          <InlineImage
            className="ml-2 mr-1 md:ml-3"
            src="/images/web-developer.jpg"
          />
          web
        </span>
        <br />
        <span className="whitespace-nowrap">
          in provincia di Cuneo
          <InlineImage src="/images/cuneo.jpg" />.
        </span>
      </h1>

      <p className="mx-auto mb-8 max-w-[450px] text-center text-neutral-500 lg:mb-10">
        In 2 anni ho lavorato con attività locali nella creazioni di siti
        accattivanti e performanti, risolvendo problemi concreti.
      </p>

      <Link
        href={"#contact"}
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
  );
}

const InlineImage = ({
  className = "",
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <span
      className={twMerge(
        `relative ml-1 inline-block h-[1em] w-[1.4em] overflow-hidden rounded-full border-2 border-black bg-red-200 align-middle md:border-4`,
        className,
      )}
    >
      <Image alt="" src={src} fill objectFit="cover"></Image>
    </span>
  );
};

import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  frontImage: string;
  backImage: string;
  title: string;
  className?: string;
  href?: string;
};

export default function ProjectCard({
  frontImage,
  backImage,
  title,
  className = "",
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href || "/"}
      target={href ? "_blank" : "_self"}
      className={twMerge(
        `project-card flex aspect-[1.4] w-full flex-col gap-4`,
        className,
      )}
    >
      <div className="relative w-full flex-1 overflow-hidden rounded-2xl">
        <Image
          src={backImage}
          loading="lazy"
          fill
          alt=""
          objectFit="cover"
          className="back relative scale-95 opacity-0 transition-all duration-700 ease-out"
        />
        <Image
          src={frontImage}
          fill
          alt=""
          objectFit="cover"
          className="front relative"
        />
      </div>

      <div>
        <h4 className="text-lg">{title}</h4>
      </div>
    </Link>
  );
}

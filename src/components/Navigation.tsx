"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navigation() {
  return (
    <nav className="fixed left-0 top-6 z-40 flex h-10 w-full justify-between px-6 md:px-12">
      <Logo />
      <Menu />
    </nav>
  );
}

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex h-full items-center justify-center rounded-full bg-white px-6 font-instrument-serif text-xl italic hover:bg-opacity-90"
    >
      Jiayi
    </Link>
  );
};

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const burger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      if (!burger.current || !container.current) return;

      const currentBurger = burger.current;
      const currentContainer = container.current;

      const items = gsap.utils.toArray(
        ["li", ".social-link-container"],
        menu.current,
      );

      const openMenu = contextSafe!(() => {
        gsap.from(items, {
          opacity: 0,
          x: "-=20",
          stagger: 0.1,
          overwrite: true,
        });
      });

      const burgerClick = () => {
        if (currentContainer.classList.contains("active")) {
          currentContainer.classList.remove("active");
        } else {
          currentContainer.classList.add("active");
          openMenu();
        }
      };

      currentBurger.addEventListener("click", burgerClick);

      return () => currentBurger.removeEventListener("click", burgerClick);
    },
    { scope: container },
  );

  return (
    /* add active class to toggle menu */
    <div className="menu relative h-full w-fit" ref={container}>
      <button
        className="burger relative flex aspect-square h-full w-auto cursor-pointer items-center justify-center rounded-full bg-white hover:bg-opacity-90"
        ref={burger}
      >
        <span className="absolute inline-block h-px w-4 -translate-y-1 bg-black transition-transform duration-300 ease-out"></span>
        <span className="absolute inline-block h-px w-4 translate-y-1 bg-black transition-transform duration-300 ease-out"></span>
      </button>

      <div
        className="links absolute right-0 top-12 min-w-[200px] rounded-2xl bg-white bg-opacity-90 px-8 py-10 backdrop-blur-sm"
        ref={menu}
      >
        <ul className="flex flex-col gap-6 text-lg">
          <li>
            <Link
              href={"/"}
              className="text-black text-opacity-100 transition-colors duration-300 hover:text-opacity-50"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#portfolio"}
              className="text-black text-opacity-100 transition-colors duration-300 hover:text-opacity-50"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="font-medium text-black text-opacity-100 transition-colors duration-300 hover:text-opacity-50"
            >
              Contatti
            </Link>
          </li>
        </ul>

        <div className="social-link-container mt-8 flex gap-4">
          <Link
            href={"https://www.linkedin.com/in/jiayizhan/"}
            target="_blank"
            className="social-link flex h-10 w-20 justify-center rounded-full border border-black border-opacity-50 py-2"
          >
            <svg
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto"
            >
              <path
                d="M192 0H16C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16V192C0 196.243 1.68571 200.313 4.68629 203.314C7.68687 206.314 11.7565 208 16 208H192C196.243 208 200.313 206.314 203.314 203.314C206.314 200.313 208 196.243 208 192V16C208 11.7565 206.314 7.68687 203.314 4.68629C200.313 1.68571 196.243 0 192 0ZM192 192H16V16H192V192ZM72 88V152C72 154.122 71.1571 156.157 69.6569 157.657C68.1566 159.157 66.1217 160 64 160C61.8783 160 59.8434 159.157 58.3431 157.657C56.8429 156.157 56 154.122 56 152V88C56 85.8783 56.8429 83.8434 58.3431 82.3431C59.8434 80.8429 61.8783 80 64 80C66.1217 80 68.1566 80.8429 69.6569 82.3431C71.1571 83.8434 72 85.8783 72 88ZM160 116V152C160 154.122 159.157 156.157 157.657 157.657C156.157 159.157 154.122 160 152 160C149.878 160 147.843 159.157 146.343 157.657C144.843 156.157 144 154.122 144 152V116C144 110.696 141.893 105.609 138.142 101.858C134.391 98.1071 129.304 96 124 96C118.696 96 113.609 98.1071 109.858 101.858C106.107 105.609 104 110.696 104 116V152C104 154.122 103.157 156.157 101.657 157.657C100.157 159.157 98.1217 160 96 160C93.8783 160 91.8434 159.157 90.3431 157.657C88.8429 156.157 88 154.122 88 152V88C88.0099 86.0404 88.7387 84.1527 90.0481 82.6948C91.3575 81.237 93.1565 80.3104 95.1037 80.0909C97.051 79.8714 99.0111 80.3742 100.612 81.5039C102.213 82.6337 103.344 84.3118 103.79 86.22C109.202 82.5487 115.512 80.421 122.041 80.0652C128.571 79.7094 135.075 81.1391 140.854 84.2006C146.632 87.2622 151.468 91.84 154.841 97.4424C158.214 103.045 159.998 109.46 160 116ZM76 60C76 62.3734 75.2962 64.6934 73.9776 66.6668C72.6591 68.6402 70.7849 70.1783 68.5922 71.0866C66.3995 71.9948 63.9867 72.2324 61.6589 71.7694C59.3311 71.3064 57.1929 70.1635 55.5147 68.4853C53.8365 66.8071 52.6936 64.6689 52.2306 62.3411C51.7676 60.0133 52.0052 57.6005 52.9134 55.4078C53.8217 53.2151 55.3598 51.3409 57.3332 50.0224C59.3066 48.7038 61.6266 48 64 48C67.1826 48 70.2348 49.2643 72.4853 51.5147C74.7357 53.7652 76 56.8174 76 60Z"
                fill="black"
                fillOpacity={0.5}
              />
            </svg>
          </Link>

          <Link
            href={"https://www.instagram.com/_jiayizhan/"}
            target="_blank"
            className="social-link flex h-10 w-20 justify-center rounded-full border border-black border-opacity-50 py-2"
          >
            <svg
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto"
            >
              <path
                d="M104 56C94.5065 56 85.2262 58.8152 77.3326 64.0895C69.4391 69.3638 63.2868 76.8603 59.6538 85.6312C56.0208 94.402 55.0702 104.053 56.9223 113.364C58.7744 122.675 63.346 131.228 70.0589 137.941C76.7718 144.654 85.3246 149.226 94.6357 151.078C103.947 152.93 113.598 151.979 122.369 148.346C131.14 144.713 138.636 138.561 143.911 130.667C149.185 122.774 152 113.494 152 104C151.987 91.2737 146.925 79.0724 137.927 70.0735C128.928 61.0746 116.726 56.0132 104 56ZM104 136C97.671 136 91.4841 134.123 86.2218 130.607C80.9594 127.091 76.8579 122.093 74.4359 116.246C72.0138 110.399 71.3801 103.965 72.6149 97.7571C73.8496 91.5497 76.8973 85.8479 81.3726 81.3726C85.8479 76.8973 91.5497 73.8496 97.7571 72.6149C103.965 71.3801 110.399 72.0138 116.246 74.4359C122.093 76.8579 127.091 80.9594 130.607 86.2218C134.123 91.4841 136 97.671 136 104C136 112.487 132.629 120.626 126.627 126.627C120.626 132.629 112.487 136 104 136ZM152 0H56C41.1528 0.0158823 26.9182 5.92097 16.4196 16.4196C5.92097 26.9182 0.0158823 41.1528 0 56V152C0.0158823 166.847 5.92097 181.082 16.4196 191.58C26.9182 202.079 41.1528 207.984 56 208H152C166.847 207.984 181.082 202.079 191.58 191.58C202.079 181.082 207.984 166.847 208 152V56C207.984 41.1528 202.079 26.9182 191.58 16.4196C181.082 5.92097 166.847 0.0158823 152 0ZM192 152C192 162.609 187.786 172.783 180.284 180.284C172.783 187.786 162.609 192 152 192H56C45.3913 192 35.2172 187.786 27.7157 180.284C20.2143 172.783 16 162.609 16 152V56C16 45.3913 20.2143 35.2172 27.7157 27.7157C35.2172 20.2143 45.3913 16 56 16H152C162.609 16 172.783 20.2143 180.284 27.7157C187.786 35.2172 192 45.3913 192 56V152ZM168 52C168 54.3734 167.296 56.6934 165.978 58.6668C164.659 60.6402 162.785 62.1783 160.592 63.0866C158.399 63.9948 155.987 64.2324 153.659 63.7694C151.331 63.3064 149.193 62.1635 147.515 60.4853C145.836 58.8071 144.694 56.6689 144.231 54.3411C143.768 52.0133 144.005 49.6005 144.913 47.4078C145.822 45.2151 147.36 43.3409 149.333 42.0224C151.307 40.7038 153.627 40 156 40C159.183 40 162.235 41.2643 164.485 43.5147C166.736 45.7652 168 48.8174 168 52Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

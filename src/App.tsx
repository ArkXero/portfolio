import type { ReactNode } from "react";
import perseusImage from "../image_202669_105547.png";
import civicCycleIcon from "../favicon.png";

const links = {
  civicCycle: "https://civiccycle.net",
  ariadne: "https://github.com/ArkXero/Ariadne",
  github: "https://github.com/ArkXero",
  discord: "https://discord.com",
  linkedin: "https://www.linkedin.com/in/ronit-singh-7b8011397",
};

function AriadneMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-[54%] w-[54%]"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 49.5 31.8 12l20.2 37.5M20 36h24"
        stroke="currentColor"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19.5c7-7.8 14.7 3 21.8-2.8 7.1-5.9 12.9-2.4 21.2 4.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      <circle cx="9.5" cy="19.5" r="2.7" fill="currentColor" />
      <circle cx="52.5" cy="21.5" r="2.7" fill="currentColor" />
    </svg>
  );
}

function ProjectOrb({
  className,
  href,
  label,
  children,
}: {
  className: string;
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      className={`group absolute grid aspect-square w-[clamp(5rem,7.2vw,7.5rem)] place-items-center rounded-full border border-[#303330] bg-[#151715] text-[#babdb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-[7px] after:rounded-[inherit] after:border after:border-white/[0.025] after:content-[''] hover:scale-[1.06] hover:-rotate-3 hover:border-[#484c48] hover:bg-[#1b1e1b] active:scale-[0.98] max-[520px]:w-[4.5rem] ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
      <span className="absolute top-[calc(100%+0.8rem)] left-1/2 w-max max-w-44 -translate-x-1/2 translate-y-1.5 text-[0.52rem] tracking-[0.04em] text-[#858984] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-[520px]:hidden">
        {label}
      </span>
    </a>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 1024 1024" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      viewBox="0 0 256 199"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="currentColor"
        d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="currentColor"
        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-[1.1rem] w-[1.1rem] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      className="relative grid min-h-[100dvh] grid-cols-[minmax(0,1.16fr)_minmax(23rem,0.84fr)] max-[900px]:grid-cols-1 max-[900px]:pb-[5.5rem]"
      aria-labelledby="intro-title"
    >
      <div className="flex min-w-0 items-end pt-[clamp(1rem,1.75vw,2rem)] pl-[clamp(1rem,1.75vw,2rem)] max-[900px]:min-h-[52dvh] max-[900px]:p-3 max-[520px]:min-h-[47dvh]">
        <div className="figure-frame relative aspect-square max-h-[calc(100dvh-clamp(5.5rem,9vw,9rem))] w-full overflow-hidden bg-[#060706] max-[900px]:max-h-none">
          <img
            src={perseusImage}
            alt="Halftone sculpture of Perseus"
            className="animate-figure-enter h-full w-full object-contain object-left-bottom"
          />
        </div>
      </div>

      <div className="relative grid min-h-full place-items-center px-[clamp(2.5rem,5vw,7rem)] py-[clamp(8rem,14vw,14rem)] max-[900px]:min-h-[42dvh] max-[900px]:place-items-start max-[900px]:px-5 max-[900px]:pt-[4.5rem] max-[900px]:pb-28 max-[520px]:min-h-[48dvh] max-[520px]:pt-20">
        <ProjectOrb
          className="animate-orb-float top-[clamp(14rem,34vh,24rem)] right-[clamp(2rem,7vw,8rem)] max-[900px]:top-0 max-[900px]:right-5"
          href={links.civicCycle}
          label="Open Civic Cycle"
        >
          <img
            src={civicCycleIcon}
            alt=""
            className="h-[58%] w-[58%] object-contain"
          />
        </ProjectOrb>

        <div className="w-full max-w-[33rem] text-left max-[900px]:max-w-none">
          <h1
            id="intro-title"
            className="animate-copy-enter m-0 text-[clamp(1.3rem,1.7vw,2rem)] leading-[1.1] font-medium tracking-[-0.055em] [animation-delay:250ms]"
          >
            Ronit Singh
          </h1>
          <p className="animate-copy-enter mt-3 mb-0 text-[clamp(0.75rem,0.85vw,0.95rem)] leading-[1.55] text-[#a6a8a5] [animation-delay:360ms]">
            TJHSST
            <br />
            c/o ’28
          </p>
          <p className="animate-copy-enter mt-[clamp(2.1rem,3.3vw,3.7rem)] mb-0 text-[clamp(1.15rem,1.65vw,1.85rem)] leading-[1.42] tracking-[-0.055em] text-[#e5e6e1] [animation-delay:480ms] max-[900px]:max-w-[27rem]">
            Building{" "}
            <em className="font-['Didot','Bodoni_72','Bodoni_MT',serif] text-[1.18em] font-normal tracking-[-0.02em] text-[#f4f3ed]">
              useful
            </em>{" "}
            software
            <br />
            for users, devs, and myself
          </p>
        </div>

        <ProjectOrb
          className="animate-orb-float-reverse right-[clamp(1.5rem,3.2vw,3.8rem)] bottom-[clamp(8.5rem,12vw,12rem)] max-[900px]:right-5 max-[900px]:bottom-2"
          href={links.ariadne}
          label="Open Ariadne on GitHub"
        >
          <AriadneMark />
        </ProjectOrb>
      </div>

      <div
        className="animate-copy-enter absolute bottom-[clamp(1.4rem,2.5vw,2.6rem)] left-1/2 flex -translate-x-1/2 items-center gap-4 [animation-delay:620ms] max-[900px]:left-5 max-[900px]:translate-x-0"
        aria-label="Social links"
      >
        <a
          className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-[#515451] transition-[color,transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#2c302c] hover:text-[#d4d6d0] focus-visible:-translate-y-1 focus-visible:border-[#2c302c] focus-visible:text-[#d4d6d0] active:-translate-y-px active:scale-[0.97] [&_svg]:h-[1.05rem] [&_svg]:w-[1.05rem]"
          href={links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-[#515451] transition-[color,transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#2c302c] hover:text-[#d4d6d0] focus-visible:-translate-y-1 focus-visible:border-[#2c302c] focus-visible:text-[#d4d6d0] active:-translate-y-px active:scale-[0.97] [&_svg]:h-[1.05rem] [&_svg]:w-[1.05rem]"
          href={links.discord}
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
        >
          <DiscordIcon />
        </a>
        <a
          className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-[#515451] transition-[color,transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#2c302c] hover:text-[#d4d6d0] focus-visible:-translate-y-1 focus-visible:border-[#2c302c] focus-visible:text-[#d4d6d0] active:-translate-y-px active:scale-[0.97] [&_svg]:h-[1.05rem] [&_svg]:w-[1.05rem]"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>

      <a
        className="absolute right-[clamp(1rem,1.8vw,2rem)] bottom-[clamp(1.5rem,2.8vw,3rem)] flex items-center gap-2 text-[0.55rem] tracking-[0.08em] text-[#454845] uppercase max-[900px]:hidden"
        href="#work"
        aria-label="Scroll to selected work"
      >
        <span>work</span>
        <span className="scroll-line block h-px w-10 overflow-hidden bg-[#222522]" />
      </a>
    </section>
  );
}

const projectClass =
  "group relative grid grid-cols-[2.2rem_minmax(0,1fr)_2rem] gap-[clamp(0.8rem,2vw,2rem)] border-t border-[#222522] py-[clamp(1.75rem,3vw,3rem)] transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] last:border-b hover:translate-x-2.5 hover:border-[#414641] focus-visible:translate-x-2.5 focus-visible:border-[#414641] focus-visible:outline-none active:translate-x-1 active:scale-[0.995] max-[900px]:grid-cols-[1.6rem_minmax(0,1fr)_1rem] max-[900px]:gap-2.5";

function Work() {
  return (
    <section
      id="work"
      className="relative grid min-h-[100dvh] content-start px-[clamp(1.2rem,18vw,24rem)] py-[clamp(6rem,14vw,14rem)] max-[900px]:px-5 max-[900px]:pt-24 max-[900px]:pb-28"
      aria-labelledby="work-title"
    >
      <div
        className="mb-[clamp(2.5rem,5vw,5rem)] text-[0.57rem] tracking-[0.08em] text-[#4d514d] uppercase"
        aria-hidden="true"
      >
        01—02 / selected work
      </div>
      <h2 id="work-title" className="sr-only">
        Selected work
      </h2>

      <div className="w-full max-w-6xl">
        <a
          className={`${projectClass} project-civic`}
          href={links.civicCycle}
          target="_blank"
          rel="noreferrer"
        >
          <span className="pt-1 text-[0.57rem] text-[#474b47]">01</span>
          <span className="flex flex-col gap-3">
            <span className="gradient-civic w-fit text-[clamp(1.45rem,2.7vw,3.1rem)] leading-none font-medium tracking-[-0.075em] text-[#e7e8e3]">
              Civic Cycle
            </span>
            <span className="max-w-[61ch] text-[clamp(0.77rem,1vw,1rem)] leading-[1.65] tracking-[-0.025em] text-[#9b9f99] transition-colors duration-300 group-hover:text-[#c2c5bf]">
              Summarizes hours-long school board meetings for free use and email
              summaries
            </span>
          </span>
          <span className="justify-self-end text-[#454945] transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d3d5cf]">
            <ArrowIcon />
          </span>
        </a>

        <a
          className={`${projectClass} project-ariadne`}
          href={links.ariadne}
          target="_blank"
          rel="noreferrer"
        >
          <span className="pt-1 text-[0.57rem] text-[#474b47]">02</span>
          <span className="flex flex-col gap-3">
            <span className="gradient-ariadne w-fit text-[clamp(1.45rem,2.7vw,3.1rem)] leading-none font-medium tracking-[-0.075em] text-[#e7e8e3]">
              Ariadne
            </span>
            <span className="max-w-[61ch] text-[clamp(0.77rem,1vw,1rem)] leading-[1.65] tracking-[-0.025em] text-[#9b9f99] transition-colors duration-300 group-hover:text-[#c2c5bf]">
              A CLI tool to test, benchmark, and compare AI agents with prompts
              and tasks specific to your codebase
            </span>
          </span>
          <span className="justify-self-end text-[#454945] transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d3d5cf]">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="grain relative m-0.5 overflow-clip border border-[#242624] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] max-[520px]:m-0 max-[520px]:border-x-0">
      <Hero />
      <Work />
    </main>
  );
}

import { CMS_NAME, CMS_URL } from "../lib/constants";
import ThemeToggler from "./themetoggler/ThemeToggler";

export default function Intro() {
  return (
    <div className={'flex flex-col justify-center mt-16'}>
    <ThemeToggler />
    <section className="flex-col flex items-center md:justify-between mt-6 mb-6 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {`${CMS_NAME}`}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
    </div>
  )
};

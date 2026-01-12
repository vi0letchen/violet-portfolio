import Image from "next/image";
import { BookText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-12 md:gap-16">
        {/* Self Introduction */}
        <div className="flex flex-col gap-6 justify-between">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hello, I'm Violet!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to my personal website! I'm a passionate developer who loves
            creating beautiful and functional web applications. Explore my
            projects and get to know more about me.
          </p>
        </div>
        {/* Links */}

        <div className="flex flex-col sm:flex-row items-start gap-4 text-base font-medium ">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookText size={20} />
            View Resume
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="mailto:violetchenbusiness@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
                    <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="mailto:violetchenbusiness@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        {/* Education */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50">
            Education
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-medium leading-7 text-zinc-900 dark:text-zinc-100">
                Bachelor of Science (Computer Science & Information and
                Technology management)
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                University of Auckland - 2022 to 2025
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50">
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-medium leading-7 text-zinc-900 dark:text-zinc-100">
                Software Developer
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                University of Auckland - April 2025 to October 2025
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Volunteered in a team of six (with two tech leaders) to
                  develop a website for Rainbow Engineering, providing
                  registration and club information.
                </li>
                <li>
                  Followed client requirements from the design stage through to
                  implementation.
                </li>
                <li>
                  Attended regular team meetings focused on collaboration,
                  productivity, and engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50">
            Selected Projects
          </h2>
          <div className="flex flex-col gap-4">
            <article className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">CoLab</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Sep 2025
                </p>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Fullstack web app for the UoA Chemistry Department
              </p>
              <ul className="list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-400">
                <li>
                  Worked with five teammates to build a website that helps the
                  department share and trade laboratory reagents more easily.
                </li>
                <li>
                  Planned and led meetings, making sure everyone stayed on track
                  and supported.
                </li>
                <li>
                  Contributed across the stack from design through
                  implementation to deliver a polished product.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

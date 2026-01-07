import Image from "next/image";
import { BookText } from 'lucide-react'

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
            Welcome to my personal website! I'm a passionate developer
            who loves creating beautiful and functional web applications. Explore my
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
        </div>
      {/* Experience */}
      
      </main>
    </div>
  );
}

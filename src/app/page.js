"use client";

import Image from "next/image";
import { BookText } from "lucide-react";
import Navbar from "./components/navbar";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col">
        {/* Self Introduction */}
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
        className="flex min-h-[calc(100vh-40px)] items-center">
          <div className="flex flex-col gap-6 justify-between w-full">
            <h1 className="max-w text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hello, I'm Violet!
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Welcome to my personal website! I'm a passionate developer who
              loves creating beautiful and functional web applications. Explore
              my projects and get to know more about me.
            </p>
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
                href="https://github.com/vi0letchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="https://www.linkedin.com/in/hongjin-chen-103a46280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="mailto:violetchenbusiness@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me!
              </a>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <div className="flex flex-col gap-6 mb-12 md:mb-80">
          <h2 className="text-5xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50 flex justify-center">
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
            <div>
              <h3 className="text-xl font-medium leading-7 text-zinc-900 dark:text-zinc-100">
                NCEA Level 1 - Level 3
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Mount Roskill Grammar School - 2018 to 2021
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-6 mb-12 md:mb-80">
          <h2 className="flex justify-center text-5xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50">
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
          <h2 className="flex justify-center text-5xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50">
            Selected Projects
          </h2>
          <div className="flex flex-col gap-4">
            <article className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">Rainbow Engineering</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  April 2025
                </p>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Fullstack web app for the UoA Rainbow Engineering Club
              </p>
              <div className="pl-4 text-zinc-600 dark:text-zinc-400">
                Rainbow Engineering is an infomation website made for the club
                Rainbow Engineering at the University of Auckland. Managed and
                built through the Web Development and Consulting Club. The
                website provides a platform for the club to manage registrations
                and share information about the events. It supports users to
                sign up for events from a Google Form and clients to edit
                website content through Payload CMS.
                <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  #Next.js #React #TailwindCSS #MongoDb #PayloadCMS
                </div>
              </div>
              <a
                href="https://rainbowengineering.wdcc.co.nz/"
                className="flex h-8 w-full items-center justify-center rounded-lg
               border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[120px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project
              </a>
            </article>

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
              <div className="pl-4 text-zinc-600 dark:text-zinc-400">
                CoLab is a collaborative platform designed for New Zealand
                institutions' Chemistry Departments. It aims to prevent wastes
                of expired reagents and promote sustainable practices in
                chemistry labs. It provides a space for students and educators
                to share chemical products. Users can create profiles, upload
                products with detailed information, and explore contributions
                from others.
                <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  #Next.js #React #TailwindCSS #Firebase #TSOA
                </div>
              </div>
              <a
                href="https://colab.exchange/"
                className="flex h-8 w-full items-center justify-center rounded-lg
               border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[120px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project
              </a>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">PartScanner</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Jul 2025
                </p>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Product for 2025 Partly x WDCC Hackathon
              </p>
              <div className="pl-4 text-zinc-600 dark:text-zinc-400">
                PartScanner is a vehicle assessment tool built with Tkinter for
                vehicle part identification. It allows users to select parts of
                the vehicle from different angles and those data are sent to a
                backend server provided by Partly for analysis. The tool then
                provides feedback on the condition of the parts, helping users
                to identify potential issues.
                <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  #Tkinter #Python
                </div>
              </div>
              <a
                href="https://github.com/saikam2003/wdcc-team-teletubbies"
                className="flex h-8 w-full items-center justify-center rounded-lg
               border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[120px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">SpacePlates</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Apr 2024
                </p>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Product for 2024 SESA x WDCC Hackathon
              </p>
              <div className="pl-4 text-zinc-600 dark:text-zinc-400">
                SpacePlates is a vanilla based food delivery platform to help
                aliens across different planets under the 2024 SESA x WDCC
                Hackathon theme "Escape from Earth". It contains a Tinder like
                swiping system for users to select their preferred food options,
                for aliens to find their ideal food quickly, including ordering
                and payment system.
                <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  #JavaScript #HTML #CSS
                </div>
              </div>
              <a
                href="https://github.com/saikam2003/wdcc-team-teletubbies"
                className="flex h-8 w-full items-center justify-center rounded-lg
               border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[120px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

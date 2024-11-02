import { allProjects } from "@/.contentlayer/generated";

import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { skillset } from "@/content/skillset";

export default function Home() {
  return (
    <div className="prose dark:prose-invert flex flex-col gap-10">
      <section className="flex flex-col-reverse gap-6 sm:flex-row sm:justify-between sm:items-start sm:text-left">
        <div>
          <h1 className="mb-2">Ayoub Bigharassine</h1>
          <p className="text-xl opacity-90 m-0">Software Developer</p>
          <p className="mt-4">
            Specializing in building full-stack web applications, turning
            concepts into functional and user-friendly digital experiences.
          </p>
        </div>
        <Image
          src="/pic.jpeg"
          alt="Picture of me"
          width={180}
          height={180}
          className="rounded-full mt-0 mb-2 w-20 h-20 sm:m-0 sm:w-[180px] sm:h-[180px]"
        />
      </section>
      <hr className="m-0 sm:hidden" />
      <section>
        <h2 className="my-4">My Skillset</h2>
        <p className="mb-3">
          In the course of my software development journey, I&apos;ve acquired a
          robust set of technical skills. These include
        </p>
        <div>
          {Object.entries(skillset).map(([category, technologies]) => (
            <div key={category}>
              <span>{category}: </span>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-neutral-100 text-neutral-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="mb-2 mt-4">Featured Projects</h2>
        {allProjects.map((project) => (
          <article
            key={project._id}
            className="flex flex-col gap-3 sm:flex-row sm:gap-6"
          >
            <div className="shrink-0">
              <Image
                src={project.thumbnail}
                alt={`Screenshot of ${project.title} - ${project.description}`}
                height={208}
                width={320}
                className="object-cover h-auto w-full m-0 sm:h-52 sm:w-80"
              />
            </div>
            <div>
              <h3 className="mt-2 mb-1">
                <Link
                  href={project.slug}
                  className="no-underline hover:underline font-semibold"
                >
                  {project.title}
                </Link>
              </h3>

              <p className="mb-3 text-sm opacity-90">{project.description}</p>
              <div>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-neutral-100 text-neutral-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section>
        <h2 className="my-4">Say, Hello!</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-3">
          <div className="flex gap-3">
            <p className="my-1">Email:</p>
            <Link
              href="mailto:ayoub.bigharassine@gmail.com"
              className="flex gap-2 items-center opacity-80 hover:opacity-100"
            >
              <Icons.email className="h-4 w-4" />
              ayoub.bigharassine@gmail.com
            </Link>
          </div>
          <div className="flex gap-3">
            <p className="my-1">LinkedIn:</p>
            <Link
              href="https://www.linkedin.com/in/ayoub-bigharassine/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center opacity-80 hover:opacity-100"
            >
              <Icons.linkedIn className="h-4 w-4" />
              ayoub-bigharassine
            </Link>
          </div>
          <div className="flex gap-3">
            <p className="my-1">GitHub:</p>
            <Link
              href="https://github.com/ayyyub777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center opacity-80 hover:opacity-100"
            >
              <Icons.gitHub className="h-4 w-4" />
              ayyyub777
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

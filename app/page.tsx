import { allProjects } from "@/.contentlayer/generated";
import { allSideProjects } from "@/.contentlayer/generated";
import { allExperiences } from "@/.contentlayer/generated";
import { allEducation } from "@/.contentlayer/generated";

import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { skillset } from "@/content/skillset";

export default function Home() {
  const experiences = allExperiences.sort((a, b) => a.order - b.order);
  const education = allEducation.sort((a, b) => a.order - b.order);
  
  return (
    <div className="prose dark:prose-invert flex flex-col gap-12">
      <section className="flex flex-col-reverse gap-6 sm:flex-row sm:justify-between sm:items-start sm:text-left">
        <div>
          <h1 className="mb-2">Ayoub Bigharassine</h1>
          <p className="text-xl opacity-90 m-0">Full-Stack Developer</p>
          <p className="mt-4">
            I build production-ready web applications with modern technologies.
            From marketplace platforms to SaaS tools, I focus on clean code,
            scalable architecture, and exceptional user experiences.
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
      <section>
        <h2 className="my-4">Core Competencies</h2>
        <p className="mb-3">
          Technologies and tools I use to build modern web applications:
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
      <section>
        <h2 className="my-6">Featured Projects</h2>
        <div className="space-y-8 md:space-y-4">
          {allProjects.map((project) => (
            <article
              key={project._id}
              className="flex flex-col gap-3 sm:flex-row sm:gap-6"
            >
              <div className="shrink-0">
                <Image
                  src={project.thumbnail}
                  alt={`Screenshot of ${project.title} - ${project.description}`}
                  height={600}
                  width={924}
                  className="object-cover h-auto w-full m-0 sm:h-52 sm:w-80"
                />
              </div>
              <div>
                <h3 className="mt-0 mb-1">
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
                <div className="mt-3">
                  <Link
                    href={project.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center opacity-80 hover:opacity-100"
                  >
                    <Icons.demo className="h-4 w-4" />
                    View Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="my-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={exp._id} className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              {/* <div className="shrink-0">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  height={56}
                  width={56}
                  className="object-contain size-14 m-0 rounded-lg"
                />
              </div> */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <h3 className="mt-0 mb-0 font-semibold">{exp.position}</h3>
                    <p className="text-base opacity-90 m-0">{exp.company}</p>
                  </div>
                  <p className="text-sm opacity-70 m-0">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </p>
                </div>
                <p className="text-sm opacity-90 mb-2">{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="text-sm space-y-1 mb-0">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="opacity-80">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
            <section>
        <h2 className="my-6">Side Projects</h2>
        <div className="space-y-8 md:space-y-4">
          {allSideProjects.map((project) => (
            <article
              key={project._id}
              className="flex flex-col gap-3 sm:flex-row sm:gap-6"
            >
              <div className="shrink-0">
                <Image
                  src={project.thumbnail}
                  alt={`Screenshot of ${project.title} - ${project.description}`}
                  height={600}
                  width={924}
                  className="object-cover h-auto w-full m-0 sm:h-52 sm:w-80"
                />
              </div>
              <div>
                <h3 className="mt-0 mb-1 font-semibold">{project.title}</h3>

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
                <div className="flex mt-3 gap-5">
                  {project?.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center opacity-80 hover:opacity-100"
                    >
                      <Icons.demo className="h-4 w-4" />
                      Demo
                    </Link>
                  )}
                  {project?.source_code && (
                    <Link
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center opacity-80 hover:opacity-100"
                    >
                      <Icons.code className="h-4 w-4" />
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* <section>
        <h2 className="my-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <article key={edu._id} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="mt-0 mb-0 font-semibold">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-base opacity-90 m-0">{edu.institution}</p>
                </div>
                <p className="text-sm opacity-70 m-0">
                  {edu.startDate} - {edu.endDate || "Present"}
                </p>
              </div>
              {edu.description && (
                <p className="text-sm opacity-80 m-0">{edu.description}</p>
              )}
            </article>
          ))}
        </div>
      </section> */}
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

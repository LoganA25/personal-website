import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { type project, type MDXEntry, loadProjects } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

function Projects({ projects }: { projects: Array<MDXEntry<project>> }) {
  return (
    <>
      <SectionIntro
        title="Projects"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8 shadow-md border-neutral-950 border">
                <h3>
                  <Link href={project.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {/* Produces logo for Projects */}
                    <Image
                      src={project.logo}
                      alt={project.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {project.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {project.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Info() {
  return (
    <>
      <SectionIntro
        eyebrow="What I do"
        title="I currently work in data and enjoy working on other projects in my free time."
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Data Analaysis & Engineering">
              In my current position, I dive into multiple areas of data. That
              includes database management, analysis, and pipeline devlopment.
              This knowledge goes beyond our tech stack which includes
              Snowflake, Python, SQL, and Dagster. From structuring and
              analyzing data for insights, or designing and maintaining data
              piplines, I&apos;m able to adapt and ensure effective outcomes.
            </ListItem>
            <ListItem title="Software Development">
              My foundation in software development is broad, encompassing a
              variety of languages as well as essential concepts. From
              developing back-end processes, building web services, or
              automating work flows, my goal is to produce sustainable and
              functional code.
            </ListItem>
            <ListItem title="Continuous Learning">
              My self-drive fuels my continuous learning, which is essential in
              the ever-evolving tech landscape. I enjoy mastering new
              technologies and leveraging them to create innovative solutions.
              This passion for learning and innovation drives my contributions
              to the field, ensuring I always bring fresh ideas to the table.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default async function Home() {
  let projects = (await loadProjects()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Data & Software Engineer
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            As a data engineer and software engineer, I&apos;m focused on
            building solutions that not only meet user needs but are also robust
            and reliable, ensuring they deliver value and functionality. My work
            in data revolves around extracting meaningful insights from complex
            data sets and designing systems that are both efficient and
            scalable. Beyond these technical skills, my commitment to continuous
            learning is fundamental, driving me to constantly update my
            knowledge and adapt to new challenges, keeping my approach fresh and
            effective.
          </p>
        </FadeIn>
      </Container>

      <Projects projects={projects} />

      <Info />

      <ContactSection />
    </>
  )
}

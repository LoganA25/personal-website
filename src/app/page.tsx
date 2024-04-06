import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { type project, type MDXEntry, loadProjects } from '@/lib/mdx'

function Projects({
  projects,
}: {
  projects: Array<MDXEntry<project>>
}) {
  return (
    <>
      <SectionIntro
        title="Projects coming soon!"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      {/* <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={project.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {/* Produces logo for Projects */}
                    {/* <Image
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
      </Container> */}
    </>
  )
}

function Services() {
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
              I delve deep into data spans across database management, analysis,
              and pipeline development, grounded in a foundational understanding
              that goes beyond specific tools like Snowflake, Python, SQL, or
              Dagster. This deep comprehension of data principles enables me to
              adeptly navigate and optimize any data environment. Whether it's
              structuring and analyzing data for strategic insights or designing
              and maintaining robust data pipelines, I adapt and utilize the
              most fitting technologies to ensure effective and insightful
              outcomes, driving strategic data-driven decisions.
            </ListItem>
            <ListItem title="Software Development">
              My foundation in software development is broad, encompassing a
              variety of languages and paradigms.Whether it’s developing
              back-end processes, crafting web services, or automating
              workflows, my goal is to create software that is both functional
              and sustainable. Embracing best practices in software development,
              I am committed to code quality, performance optimization, and
              leveraging the full potential of modern programming to deliver
              exceptional results.
            </ListItem>
            <ListItem title="Continuous Learning">
              I am dedicated to continuous learning, which equips me to navigate
              the rapidly evolving tech landscape. My capability to promptly
              understand and apply new languages, frameworks, and methodologies
              demonstrates my adaptability and commitment. This flexible
              approach ensures I can effectively engage with a variety of tools
              and technologies, adapting to whatever the project requires to
              achieve successful outcomes.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let projects = (await loadProjects()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Software Developer and Data Enthusiast
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            As a software developer and data enthusiast, I'm focused on
            building solutions that not only meet user needs but are also robust
            and reliable, ensuring they deliver value and functionality. My work
            in data analysis/engineering revolves around extracting
            meaningful insights from complex data sets and designing systems
            that are both efficient and scalable. Beyond these technical skills,
            my commitment to continuous learning is fundamental, driving me to
            constantly update my knowledge and adapt to new challenges, keeping
            my approach fresh and effective.
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <Projects projects={projects} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}

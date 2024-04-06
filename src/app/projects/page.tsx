import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// import ProjectImage from '@/components/ProjectImage'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
// import { formatDate } from '@/lib/formatDate'
import { type project, type MDXEntry, loadProjects } from '@/lib/mdx'
import { Blockquote } from '@/components/Blockquote'

function Projects({
  projects,
}: {
  projects: Array<MDXEntry<project>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {projects.map((project) => (
          <FadeIn key={project.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={project.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {project.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {project.service}
                    </p>
                    {/* <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={project.date}>
                        {formatDate(project.date)}
                      </time>
                    </p> */}
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={project.href}>{project.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {project.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={project.href}
                      aria-label={`Read case study: ${project.client}`}
                    >
                      Read case study
                    </Button>
                    {/* <Blockquote
                      className="mt-12"
                    >
                      {project.testimonial.content}
                    </Blockquote> */}
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Bright Path', logoBrightPath],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

// export default async function Work() {
//   let projects = await loadProjects()

//   return (
//     <>
//       <PageIntro
//         eyebrow="Our work"
//         title="Proven solutions for real-world problems."
//       >
//         <p>
//           We believe in efficiency and maximizing our resources to provide the
//           best value to our clients. The primary way we do that is by re-using
//           the same five projects we’ve been developing for the past decade.
//         </p>
//       </PageIntro>

//       <Projects projects={projects} />

//       <Testimonial
//         className="mt-24 sm:mt-32 lg:mt-40"
//         client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
//       >
//         We approached <em>Studio</em> because we loved their past work. They
//         delivered something remarkably similar in record time.
//       </Testimonial>

//       <Clients />

//       <ContactSection />
//     </>
//   )
// }

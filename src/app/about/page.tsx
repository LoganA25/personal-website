import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'About Me',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <FadeIn>
        <PageIntro eyebrow="" title="Who am I?">
          <div className="mt-10 max-w-2xl space-y-6 text-base">
            <p>
              I&apos;m a data analyst/engineer at a small health facility where
              I specialize in building systems that transform complex data into
              clear insights. When I&apos;m not at work, I love learning new
              things in software development and taking on new
              challenges. One of my favorite things to do is collaborate with
              people on projects!
            </p>
            <p>
              Outside of work and learning, I&apos;m a big fan of video games. I
              spend some of my downtime playing with friends. It&apos;s my
              favorite way to relax and have fun!
            </p>
            <p>
              At home, I&apos;m kept company by two dogs and a cat, and
              supported by my wonderful wife. An interesting fact about me, I
              always sneeze twice!
            </p>
            <p>
              Thanks for stopping by! I&apos;m always open to discussing
              technology, gaming, or anything else you might find interesting!
            </p>
          </div>
        </PageIntro>

        <ContactSection />
      </FadeIn>
    </>
  )
}

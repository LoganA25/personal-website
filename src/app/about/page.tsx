import { type Metadata } from 'next'

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
          <div className="mt-10 max-w-2xl space-y-6 pb-6 text-base sm:pb-14">
            <p>
              My names Logan, and currently I&apos;m a data analyst/engineer at a
              small health facility where I specialize in building systems that
              transform complex data into clear insights. When I&apos;m not at
              work, I love learning new things in software development and
              taking on new challenges. One of my favorite things to do is
              collaborate with people on projects!
            </p>
            <p>
              Outside of work and learning, I&apos;m a huge sports fan, especially 
              when it comes to the NFL. While I love following the league as a whole, 
              I&apos;m a proud Saints fan at heart—who dat! I enjoy keeping up with the 
              latest stats, watching games, and diving into everything football-related.
            </p>
            <p>
              In my downtime, I&apos;m also a big fan of video games, and I love 
              playing with friends as a way to relax and have fun. 
            </p>
            <p>
              At home, I&apos;m kept company by two dogs and a cat, and
              supported by my wonderful wife. An interesting fact about me, I
              always sneeze twice!
            </p>
            <p>
              Thanks for stopping by! I&apos;m always open to discussing
              technology, gaming, or anything else you might find interesting.
              Feel free to reach out!
            </p>
          </div>
        </PageIntro>
      </FadeIn>
    </>
  )
}

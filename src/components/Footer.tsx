import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
// import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    links: [
      { title: 'Projects', href: '/project-list' },
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  // {
  //   title: 'About',
  //   links: [
  //     { title: 'About', href: '/about' },
  //     { title: 'Contact', href: '/contact' },
  //   ],
  // },
  // {
  //   title: 'Connect',
  //   links: socialMediaProfiles,
  // },
]

function Navigation() {
  return (
    <nav className="mt-auto flex justify-center">
      <div className="flex gap-x-14">
        {navigation.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-col md:flex-row md:items-center"
          >
            {/* <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 mr-4">
              {section.title}
            </div> */}
            <div className="mt-4 flex flex-col font-display text-sm font-semibold tracking-wider text-neutral-950 md:mt-0 md:flex-row md:gap-x-14">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="mt-4 text-sm text-neutral-700 transition hover:text-neutral-950 md:mt-0"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="w-full">
      <FadeIn>
        <div className="flex flex-col gap-y-8 md:flex-row items-center justify-between border-t border-neutral-950/10 py-4 md:py-12">
          <Navigation />
          <p className="flex justify-center sm:justify-end text-neutral-700">
           <Link href='/'> © Logan Allen {new Date().getFullYear()} </Link>
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}


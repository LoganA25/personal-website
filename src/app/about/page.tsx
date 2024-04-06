import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

// const team = [
//   {
//     title: 'Leadership',
//     people: [
//       {
//         name: 'Leslie Alexander',
//         role: 'Co-Founder / CEO',
//         image: { src: imageLeslieAlexander },
//       },
//       {
//         name: 'Michael Foster',
//         role: 'Co-Founder / CTO',
//         image: { src: imageMichaelFoster },
//       },
//       {
//         name: 'Dries Vincent',
//         role: 'Partner & Business Relations',
//         image: { src: imageDriesVincent },
//       },
//     ],
//   },
//   {
//     title: 'Team',
//     people: [
//       {
//         name: 'Chelsea Hagon',
//         role: 'Senior Developer',
//         image: { src: imageChelseaHagon },
//       },
//       {
//         name: 'Emma Dorsey',
//         role: 'Senior Designer',
//         image: { src: imageEmmaDorsey },
//       },
//       {
//         name: 'Leonard Krasner',
//         role: 'VP, User Experience',
//         image: { src: imageLeonardKrasner },
//       },
//       {
//         name: 'Blake Reid',
//         role: 'Junior Copywriter',
//         image: { src: imageBlakeReid },
//       },
//       {
//         name: 'Kathryn Murphy',
//         role: 'VP, Human Resources',
//         image: { src: imageKathrynMurphy },
//       },
//       {
//         name: 'Whitney Francis',
//         role: 'Content Specialist',
//         image: { src: imageWhitneyFrancis },
//       },
//       {
//         name: 'Jeffrey Webb',
//         role: 'Account Coordinator',
//         image: { src: imageJeffreyWebb },
//       },
//       {
//         name: 'Benjamin Russel',
//         role: 'Senior Developer',
//         image: { src: imageBenjaminRussel },
//       },
//       {
//         name: 'Angela Fisher',
//         role: 'Front-end Developer',
//         image: { src: imageAngelaFisher },
//       },
//     ],
//   },
// ]

// function Team() {
//   return (
//     <Container className="mt-24 sm:mt-32 lg:mt-40">
//       <div className="space-y-24">
//         {team.map((group) => (
//           <FadeInStagger key={group.title}>
//             <Border as={FadeIn} />
//             <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
//               <FadeIn>
//                 <h2 className="font-display text-2xl font-semibold text-neutral-950">
//                   {group.title}
//                 </h2>
//               </FadeIn>
//               <div className="lg:col-span-3">
//                 <ul
//                   role="list"
//                   className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
//                 >
//                   {group.people.map((person) => (
//                     <li key={person.name}>
//                       <FadeIn>
//                         <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
//                           <Image
//                             alt=""
//                             {...person.image}
//                             className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
//                           />
//                           <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
//                             <p className="font-display text-base/6 font-semibold tracking-wide text-white">
//                               {person.name}
//                             </p>
//                             <p className="mt-2 text-sm text-white">
//                               {person.role}
//                             </p>
//                           </div>
//                         </div>
//                       </FadeIn>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </FadeInStagger>
//         ))}
//       </div>
//     </Container>
//   )
// }

export const metadata: Metadata = {
  title: 'About Me',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Me" title="Placeholder text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          placeat voluptates quo modi ipsam ullam nesciunt rerum praesentium
          sapiente natus distinctio nisi, ipsa alias eos explicabo vero
          provident commodi dignissimos?
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            consectetur officia! Voluptates iure perspiciatis, expedita
            voluptatibus, iste laborum earum facilis quo deleniti dolore
            provident beatae reiciendis ratione eaque architecto maxime!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid eveniet, facere doloremque perspiciatis
            voluptatibus ipsa! Recusandae magni amet, fugiat voluptatum beatae
            in possimus nostrum tenetur ea fuga reprehenderit quibusdam.
          </p>
        </div>
      </PageIntro>

      {/* <Team /> */}

      <ContactSection />
    </>
  )
}
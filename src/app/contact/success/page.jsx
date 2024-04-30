import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'


export default function Success() {
  return (
    <Container className="mt-40 flex">
      <FadeIn>
        <div className="my-6 border-2 rounded-md">
          Yay it worked!
        </div>
      </FadeIn>
    </Container>
  )
}


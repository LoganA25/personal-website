import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadProjects } from '@/lib/mdx'

function Projects({ projects }) {
  return (
    <Container className="mt-40 flex">
      <FadeIn>
        <div className="my-6 border-2 rounded-md">
          <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-xl rounded-md text-[#333] font-[sans-serif]">
            <div>
              <h1 className="text-3xl font-extrabold">Let's Talk</h1>
              <p className="text-sm text-gray-400 mt-3">If you have something you'd like to speak about or would just like to get in touch, feel free to reach out! I look foward to getting to know you!</p>
              <div className="mt-12">
                <h2 className="text-lg font-extrabold">Email</h2>
                <ul className="mt-3">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000000'
                        viewBox="0 0 479.058 479.058">
                        <path
                          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                          data-original="#000000" />
                      </svg>
                    </div>
                    <Link href='' className="text-[#000000] text-sm ml-3">
                      <small className="block">Mail</small>
                      <strong>loganallendev@gmail.com</strong>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h2 className="text-lg font-extrabold">Socials</h2>
                <ul className="flex mt-3 space-x-4">
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href='https://www.linkedin.com/in/logan-allen-a2213817a/'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000000'
                        viewBox="0 0 511 512">
                        <path
                          d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                          data-original="#000000" />
                      </svg>
                    </Link>
                  </li>
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href='https://github.com/LoganA25'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000000' viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <form className="ml-auo space-y-4">
              <input type='text' placeholder='Name'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000]" />
              <input type='email' placeholder='Email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000]" />
              <input type='text' placeholder='Subject'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000]" />
              <textarea placeholder='Message' rows="6" maxLength={1000}
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#000000]"></textarea>
              <button
                className="text-white bg-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] border hover:outline-[#00000] font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
            </form>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default async function Work() {
  let projects = await loadProjects()

  return (
    <>
      {/* <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro> */}

      <Projects projects={projects} />

      {/* <ContactSection /> */}
    </>
  )
}

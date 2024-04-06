import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

// import { Border } from '@/components/Border'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

function BlockquoteWithImage({
  children,
  className,
  image,
}: {
  children: React.ReactNode
  className?: string
  image: ImagePropsWithOptionalAlt
}) {
  return (
    <figure
      className={clsx(
        'flex flex-col items-center',
        className,
      )}
    >
      <div className="w-full overflow-hidden bg-neutral-100 rounded-t-xl sm:rounded-xl">
        <Image
          alt=""
          {...image}
          sizes="(min-width: 1024px) 100%, (min-width: 768px) 100%, (min-width: 640px) 100vw, 100%"
          className="object-cover sm:h-auto sm:w-full"
        />
      </div>
      <blockquote className="w-full text-xl text-neutral-600 sm:text-2xl">
        {typeof children === 'string' ? <p className="px-4 sm:px-6 lg:px-8">{children}</p> : children}
      </blockquote>
    </figure>
  )
}



// function BlockquoteWithoutImage({
//   children,
//   className,
// }: {
//   children: React.ReactNode
//   className?: string
// }) {
//   return (
//     <Border position="left" className={clsx('pl-8', className)}>
//       <figure className="text-sm">
//         <blockquote className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
//           {typeof children === 'string' ? <p>{children}</p> : children}
//         </blockquote>
//       </figure>
//     </Border>
//   )
// }

export function Blockquote(
  props:
    | React.ComponentPropsWithoutRef<typeof BlockquoteWithImage>
) {
  if (props.image) {
    return <BlockquoteWithImage {...props} />
  }
}

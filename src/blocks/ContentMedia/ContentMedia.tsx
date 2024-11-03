import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

type LinkType = {
  text: string
  url: string
  newWindow: boolean
  appearance: 'link' | 'default' | 'outline'
}

type ContentMediaProps = {
  layout?: 'imageLeft' | 'imageRight'
  content: {
    heading: string
    body_html: string
    buttons?: { button: LinkType }[]
  }
  image: {
    url: string
    alt: string
    filename?: string
    width?: number
    height?: number
  }
  theme?: 'light' | 'dark'
  className?: string
}

export const ContentMediaBlock: React.FC<ContentMediaProps> = ({
  layout = 'imageRight',
  content,
  image,
  theme = 'light',
  className,
}) => {
  const isImageRight = layout === 'imageRight'
  const isDark = theme === 'dark'

  return (
    <section className={className}>
      <div className="container mx-auto my-4 max-w-6xl">
        <div className={cn(
          "grid lg:grid-cols-2 items-stretch",
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        )}>
          {/* Image Side - Always first on mobile */}
          <div className={cn(
            "relative aspect-[4/3]",
            isImageRight ? 'lg:order-2' : 'lg:order-1'
          )}>
            <Image
              src={image.url}
              alt={image.alt || ''}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className={cn(
            "p-12 flex items-center",
            isImageRight ? 'lg:order-1' : 'lg:order-2'
          )}>
            <div>
              <h2 className={cn(
                "text-3xl font-bold tracking-tighter sm:text-4xl",
                isDark ? 'text-white' : 'text-gray-900'
              )}>
                {content.heading}
              </h2>
              
              <div 
                className={cn(
                  "prose max-w-none mt-6",
                  isDark ? 'prose-invert text-gray-300' : 'text-gray-600'
                )}
                dangerouslySetInnerHTML={{ __html: content.body_html }}
              />

              {content.buttons && content.buttons.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {content.buttons.map(({ button }, index) => (
                    <Link
                      key={index}
                      href={button.url}
                      target={button.newWindow ? '_blank' : undefined}
                    >
                      <Button
                        variant={button.appearance === 'outline' ? 'outline' : 'default'}
                        className={cn(
                          isDark && button.appearance === 'outline' && 
                          'border-white text-white hover:bg-white hover:text-gray-900'
                        )}
                      >
                        {button.text}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
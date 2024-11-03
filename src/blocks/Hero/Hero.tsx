import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

type LinkType = {
  text: string
  url: string
  newWindow: boolean
  appearance: 'link' | 'button' | 'button-outline'
}

const getLinkStyles = (appearance: LinkType['appearance']) => {
  switch (appearance) {
    case 'button':
      return <Button size="lg" className="h-12 px-6" />
    case 'button-outline':
      return <Button variant="outline" size="lg" className="h-12 px-6" />
    case 'link':
      return <Button variant="link" />
    default:
      return <Button size="lg" className="h-12 px-6" />
  }
}

export const HeroBlock: React.FC<{
  heading?: string
  subheading?: string
  eyebrow?: string
  buttons?: { heroButton: LinkType }[]
  className?: string
}> = ({ heading, subheading, eyebrow, buttons, className }) => {
  return (
    <section className={cn(
      "relative py-32 bg-gray-50",
      className
    )}>
      <div className="container relative px-4 md:px-6 mx-auto">
        {(heading || subheading || eyebrow) && (
          <div className="flex flex-col items-center space-y-8 text-center">
            {(heading || subheading || eyebrow) && (
              <div className="space-y-6">
                {eyebrow && (
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600 ring-1 ring-inset ring-gray-200">
                    <p className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      {eyebrow}
                    </p>
                  </div>
                )}
                {(heading || subheading) && (
                  <div className="space-y-4">
                    {heading && (
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 max-w-3xl mx-auto">
                        {heading}
                      </h1>
                    )}
                    {subheading && (
                      <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl">
                        {subheading}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4">
                {buttons.map(({ heroButton }, index) => (
                  <Link 
                    key={index}
                    href={heroButton.url}
                    target={heroButton.newWindow ? '_blank' : undefined}
                  >
                    {React.cloneElement(
                      getLinkStyles(heroButton.appearance),
                      { children: heroButton.text }
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

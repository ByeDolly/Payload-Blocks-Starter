import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import type { HeroBlock as HeroBlockType } from "../../../payload-types"

export const HeroBlock: React.FC<HeroBlockType & {
}> = (props) => {
  return (
    <section className={cn(
      "relative py-32 bg-gray-50",
      `mt-${props.marginTop}`,
      `mb-${props.marginBottom}`
    )}>
      <div className="container relative px-4 md:px-6 mx-auto">
        {(props.heading || props.subheading || props.eyebrow) && (
          <div className="flex flex-col items-center space-y-8 text-center">
            {(props.heading || props.subheading || props.eyebrow) && (
              <div className="space-y-6">
                {props.eyebrow && (
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600 ring-1 ring-inset ring-gray-200">
                    <p className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      {props.eyebrow}
                    </p>
                  </div>
                )}
                {(props.heading || props.subheading) && (
                  <div className="space-y-4">
                    {props.heading && (
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 max-w-3xl mx-auto">
                        {props.heading}
                      </h1>
                    )}
                    {props.subheading && (
                      <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl">
                        {props.subheading}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {props.buttons && props.buttons.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4">
                {props.buttons.map(({ heroButton }, index) => (
                  <Link 
                    key={index}
                    href={heroButton.url}
                    target={heroButton.newWindow ? '_blank' : undefined}
                  >
                    <Button variant={heroButton.appearance}>
                      {heroButton.text}
                    </Button>
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

import React from 'react'
import { cn } from "@/lib/utils"
import type { SectionIntroBlock as SectionIntroBlockType } from "../../../payload-types"

export const SectionIntroBlock: React.FC<SectionIntroBlockType & {
}> = (props) => {
  return (
    <section className={cn(
      "container relative px-4 md:px-6 mx-auto max-w-6xl",
      `mt-${props.marginTop}`,
      `mb-${props.marginBottom}`
    )}>
      <div className={cn(
        "max-w-3xl",
        props.alignment === 'center' ? 'mx-auto text-center' : 'text-left'
      )}>
        {props.heading && (
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            {props.heading}
          </h2>
        )}
        {props.subheading && (
          <p className="text-xl sm:text-2xl text-gray-600 mt-2">
            {props.subheading}
          </p>
        )}
        {props.text && (
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {props.text}
          </p>
        )}
      </div>
    </section>
  )
}

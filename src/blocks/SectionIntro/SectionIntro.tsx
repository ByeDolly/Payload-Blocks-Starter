import React from 'react'
import { cn } from "@/lib/utils"

export const SectionIntroBlock: React.FC<{
  heading?: string
  subheading?: string
  text?: string
  alignment?: 'center' | 'left'
  className?: string
}> = ({ heading, subheading, text, alignment = 'left', className }) => {
  return (
    <section className={cn(
      "relative bg-white",
      className
    )}>
      <div className="container relative px-4 md:px-6 mx-auto max-w-6xl mt-24 mb-2">
        <div className={cn(
          "max-w-3xl",
          alignment === 'center' ? 'mx-auto text-center' : 'text-left'
        )}>
          {heading && (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-xl sm:text-2xl text-gray-600 mt-2">
              {subheading}
            </p>
          )}
          {text && (
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {text}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

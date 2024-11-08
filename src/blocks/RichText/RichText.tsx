import React from 'react'
import { cn } from "@/lib/utils"
import type { RichTextBlock as RichTextBlockType } from "../../../payload-types"

export const RichTextBlock: React.FC<RichTextBlockType & {
}> = (props) => {
  const maxWidth = {
    narrow: 'max-w-2xl',
    default: 'max-w-4xl',
    wide: 'max-w-6xl',
  }[props.width || 'default']

  return (
    <section className={cn(
      "container mx-auto px-4 md:px-6 py-12",
      `mt-${props.marginTop}`,
      `mb-${props.marginBottom}`
    )}>
      <div 
        className={cn("prose-lg mx-auto", maxWidth)} 
        dangerouslySetInnerHTML={{ __html: props.content_html }} 
      />
    </section>
  )
} 
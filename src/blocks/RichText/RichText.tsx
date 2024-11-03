import React from 'react'
import { cn } from "@/lib/utils"

type RichTextProps = {
  content_html: string
  width?: 'narrow' | 'default' | 'wide'
  className?: string
}

export const RichTextBlock: React.FC<RichTextProps> = ({
  content_html,
  width = 'default',
  className,
}) => {
  const maxWidth = {
    narrow: 'max-w-2xl',
    default: 'max-w-4xl',
    wide: 'max-w-6xl',
  }[width]

  return (
    <div className={cn("container mx-auto px-4 md:px-6 py-12", className)}>
        <div className={cn("prose-lg mx-auto", maxWidth)} dangerouslySetInnerHTML={{ __html: content_html }} />
    </div>
  )
} 
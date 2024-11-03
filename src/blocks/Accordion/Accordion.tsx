import React from 'react'
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type AccordionItem = {
  content_html: ReactNode
  heading: string
  content: any
}

export const AccordionBlock: React.FC<{
  items: AccordionItem[]
  className?: string
}> = ({ items, className }) => {
  if (!items?.length) return null

  return (
    <div className={cn(
      "container px-4 md:px-6 py-12 mx-auto max-w-5xl",
      className
    )}>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-lg font-medium">
              {item.heading}
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: item.content_html }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
} 
import React from 'react'
import { cn } from "@/utilities/tailwindMerge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import type { AccordionBlock as AccordionBlockType } from "../../../payload-types"

export const AccordionBlock: React.FC<AccordionBlockType & {
}> = (props) => {
    if (!props.items?.length) return null

    return (
        <section className={cn(
            "container mx-auto max-w-5xl px-4 md:px-6", 
            `mt-${props.marginTop}`,
            `mb-${props.marginBottom}`
        )}>
            <Accordion type="single" collapsible className="w-full">
                {props.items.map((item, i) => (
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
        </section>
    )
} 
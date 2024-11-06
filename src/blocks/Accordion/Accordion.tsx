import React from 'react'
import { cn } from "@/lib/utils"
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
            "container mx-auto max-w-5xl", 
            props.marginTop ? `mt-${props.marginTop}` : "mt-8",
            props.marginBottom ? `mb-${props.marginBottom}` : "mb-8"
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
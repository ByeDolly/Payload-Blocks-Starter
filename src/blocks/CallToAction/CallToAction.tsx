import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import type { CallToActionBlock as CallToActionBlockType } from "../../../payload-types"

export const CallToActionBlock: React.FC<CallToActionBlockType & {
}> = (props) => {
    const isDark = props.theme === 'dark';

    return (
        <section className={cn(
            "relative py-24",
            `mt-${props.marginTop}`,
            `mb-${props.marginBottom}`,
            isDark ? 'bg-gray-900' : 'bg-gray-50'
        )}>
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    {props.heading && (
                        <h2 className={cn(
                            "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",
                            isDark ? 'text-white' : 'text-gray-900'
                        )}>
                            {props.heading}
                        </h2>
                    )}
                    {props.subheading && (
                        <p className={cn(
                            "mt-4 text-lg md:text-xl",
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            {props.subheading}
                        </p>
                    )}

                    {props.buttons && props.buttons.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            {props.buttons.map(({ ctaButton }, index) => (
                                <Link
                                    key={index}
                                    href={ctaButton.url}
                                    target={ctaButton.newWindow ? '_blank' : undefined}
                                >
                                    <Button variant={ctaButton.appearance} theme={props.theme}>
                                        {ctaButton.text}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
} 
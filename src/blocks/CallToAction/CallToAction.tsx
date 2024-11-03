import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

type LinkType = {
    text: string
    url: string
    newWindow: boolean
    appearance: 'link' | 'default' | 'outline'
}

const getLinkStyles = (appearance: LinkType['appearance'], theme: 'light' | 'dark') => {
    switch (appearance) {
        case 'default':
            return <Button
                size="lg"
                className={cn(
                    "h-12 px-6",
                    theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : ''
                )}
            />
        case 'outline':
            return <Button
                variant="outline"
                size="lg"
                className={cn(
                    "h-12 px-6",
                    theme === 'dark' ? 'bg-transparent border-white text-white hover:bg-white hover:text-gray-900' : ''
                )}
            />
        case 'link':
            return <Button
                variant="link"
                className={cn(
                    theme === 'dark' ? 'text-white' : ''
                )}
            />
        default:
            return <Button size="lg" className="h-12 px-6" />
    }
}

export const CallToActionBlock: React.FC<{
    heading?: string
    subheading?: string
    buttons?: { ctaButton: LinkType }[]
    theme?: 'light' | 'dark'
    className?: string
}> = ({ heading, subheading, buttons, theme = 'light', className }) => {
    return (
        <section className={cn(
            "relative py-24 my-4",
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
            className
        )}>
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    {heading && (
                        <h2 className={cn(
                            "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        )}>
                            {heading}
                        </h2>
                    )}
                    {subheading && (
                        <p className={cn(
                            "mt-4 text-lg md:text-xl",
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            {subheading}
                        </p>
                    )}

                    {buttons && buttons.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            {buttons.map(({ ctaButton }, index) => (
                                <Link
                                    key={index}
                                    href={ctaButton.url}
                                    target={ctaButton.newWindow ? '_blank' : undefined}
                                >
                                    {React.cloneElement(
                                        getLinkStyles(ctaButton.appearance, theme),
                                        { children: ctaButton.text }
                                    )}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
} 
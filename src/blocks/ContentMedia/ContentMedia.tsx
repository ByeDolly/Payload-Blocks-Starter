import React from "react";
import { cn } from "@/utilities/tailwindMerge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { ContentMediaBlock as ContentMediaBlockType } from "../../../payload-types";

export const ContentMediaBlock: React.FC<ContentMediaBlockType & {
}> = (props) => { 
    const isImageRight = props.layout === "imageRight";
    const isDark = props.theme === "dark";

    return (
        <section className={cn(
            "container mx-auto max-w-6xl", 
            `mt-${props.marginTop}`,
            `mb-${props.marginBottom}`
        )}>
            <div className={cn("grid lg:grid-cols-2 items-stretch", isDark ? "bg-gray-900" : "bg-gray-50")}>
                {/* Image Side - Always first on mobile */}
                <div className={cn("relative aspect-[4/3]", isImageRight ? "lg:order-2" : "lg:order-1")}>
                    <Image src={props.image.url || ""} alt={props.image.alt || ""} fill className="object-cover" />
                </div>

                {/* Content Side */}
                <div className={cn("p-12 flex flex-col justify-center", isImageRight ? "lg:order-1" : "lg:order-2")}>
                    <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl", isDark ? "text-white" : "text-gray-900")}>{props.heading}</h2>

                    <div className={cn("prose max-w-none mt-6", isDark ? "prose-invert text-gray-300" : "text-gray-600")} dangerouslySetInnerHTML={{ __html: props.body_html || '' }} />

                    {props.buttons && props.buttons.length > 0 && (
                        <div className="flex flex-wrap gap-4 mt-8">
                            {props.buttons.map(({ button }, index) => (
                                <Link key={index} href={button.url}>
                                    <Button variant={button.appearance} theme={props.theme}>{button.text}</Button>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

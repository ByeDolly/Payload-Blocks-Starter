import React from 'react'
import { cn } from "@/utilities/tailwindMerge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import type { CardGridBlock as CardGridBlockType } from "../../../payload-types"

export const CardGridBlock: React.FC<CardGridBlockType & {
}> = (props) => {
  if (!props.cards?.length) return null

  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }[props.columns || '2']

  return (
    <section className={cn(
      "relative py-24 bg-white",
      `mt-${props.marginTop}`,
      `mb-${props.marginBottom}`
    )}>
      <div className="container relative px-4 md:px-6 mx-auto max-w-6xl">
        <div className={cn(
          "grid grid-cols-1 gap-6",
          gridCols
        )}>
          {props.cards.map((card, i) => (
            <Card key={i} className="overflow-hidden">
              {card.image && (
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={card.image.url}
                    alt={card.image.alt || card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                {card.description && (
                  <CardDescription>{card.description}</CardDescription>
                )}
              </CardHeader>
              {card.cardLink?.url && (
                <CardFooter>
                  <Link 
                    href={card.cardLink.url}
                    target={card.cardLink.newWindow ? '_blank' : undefined}
                  >
                    <Button variant={card.cardLink.appearance}>
                      {card.cardLink.text}
                    </Button>
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
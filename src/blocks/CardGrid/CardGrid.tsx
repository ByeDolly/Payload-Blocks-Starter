import React from 'react'
import { cn } from "@/lib/utils"
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

type LinkType = {
  text: string
  url: string
  newWindow: boolean
  appearance: 'link' | 'button' | 'button-outline'
}

type CardType = {
  image?: {
    url: string
    alt: string
  }
  title: string
  description?: string
  cardLink?: LinkType
}

export const CardGridBlock: React.FC<{
  cards?: CardType[]
  columns?: '2' | '3' | '4'
  className?: string
}> = ({ cards, columns = '3', className }) => {
  if (!cards?.length) return null

  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={cn("relative py-24 bg-white", className)}>
      <div className="container relative px-4 md:px-6 mx-auto max-w-6xl">
        <div className={cn(
          "grid grid-cols-1 gap-6",
          gridCols[columns]
        )}>
          {cards.map((card, i) => (
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
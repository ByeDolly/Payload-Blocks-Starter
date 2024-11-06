import React, { Fragment } from 'react'

import type { Page } from '../../payload-types'

import { HeroBlock } from './Hero/Hero'
import { AccordionBlock } from './Accordion/Accordion'
import { SectionIntroBlock } from './SectionIntro/SectionIntro'
import { CallToActionBlock } from './CallToAction/CallToAction'
import { CardGridBlock } from './CardGrid/CardGrid'
import { ContentMediaBlock } from './ContentMedia/ContentMedia'
import { RichTextBlock } from './RichText/RichText'

const blockComponents = {
  Accordion: AccordionBlock,
  Hero: HeroBlock,
  SectionIntro: SectionIntroBlock,
  CallToAction: CallToActionBlock,
  CardGrid: CardGridBlock,
  ContentMedia: ContentMediaBlock,
  RichText: RichTextBlock
}
export const RenderBlocks: React.FC<{
    blocks: Page['pageBlocks'][0][]
  }> = (props) => {
    const { blocks } = props
  
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  
    if (hasBlocks) {
      return (
        <Fragment>
          {blocks.map((block, index) => {
            const { blockType } = block
  
            if (blockType && blockType in blockComponents) {
              const Block = blockComponents[blockType]
  
              if (Block) {
                return (
                  <Block {...block} key={index} />
                )
              }
            }
            return null
          })}
        </Fragment>
      )
    }
  
    return null
  }
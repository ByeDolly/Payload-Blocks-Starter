import React from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { ReusableBlock } from '@/payload-types'

type ReusableBlocksBlockProps = {
  reusableBlock: ReusableBlock | string
}

export const ReusableBlocksBlock: React.FC<ReusableBlocksBlockProps> = ({ reusableBlock }) => {
  // If the block is not populated/found, don't render anything
  if (!reusableBlock || typeof reusableBlock === 'string') {
    return null
  }

  // Safely render the blocks from the reusable block
  return (
    <>
      {reusableBlock.blocks && (
        <RenderBlocks blocks={reusableBlock.blocks} />
      )}
    </>
  )
}
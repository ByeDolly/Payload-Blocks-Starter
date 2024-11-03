import { Block } from 'payload/types'

export const ReusableBlocksBlock: Block = {
  slug: 'ReusableBlocksBlock',
  labels: {
    singular: 'Reusable Block',
    plural: 'Reusable Blocks',
  },
  fields: [
    {
      name: 'reusableBlock',
      type: 'relationship',
      relationTo: 'reusable-blocks',
      required: true,
      admin: {
        description: 'Select a reusable block to include'
      }
    }
  ],
} 
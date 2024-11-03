import { Block } from 'payload'
import { linkField } from '@/fields/link'

export const Hero: Block = {
    slug: 'Hero',
    interfaceName: 'Hero',
    fields: [
      {
        name: 'eyebrow',
        type: 'text',
        label: 'Eyebrow Text',
        admin: {
          description: 'Small text that appears above the heading'
        }
      },
      {
        name: 'heading',
        type: 'text',
        label: 'Heading',
        required: true,
      },
      {
        name: 'subheading',
        type: 'text',
        label: 'Subheading',
      },
      {
        name: 'buttons',
        type: 'array',
        label: 'Buttons',
        maxRows: 3,
        fields: [
          linkField({
            name: 'heroButton',
            label: 'Button',
            required: true,
          })
        ]
      }
    ],
  }
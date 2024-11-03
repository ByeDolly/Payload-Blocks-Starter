import { Block } from 'payload'
import { linkField } from '@/fields/link'

export const CallToAction: Block = {
  slug: 'CallToAction',
  interfaceName: 'CallToAction',
  fields: [
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
      maxRows: 2,
      fields: [
        linkField({
          name: 'ctaButton',
          label: 'Button',
          required: true,
        })
      ]
    },
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'light',
      options: [
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
      ],
    }
  ],
} 
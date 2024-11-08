import { Block } from 'payload'
import { linkField } from '@/fields/link'
import { blockSpacingFields } from "@/fields/blockSpacingFields";

export const CallToAction: Block = {
  slug: 'CallToAction',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
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
          ],
        },
        {
          label: "Style",
          fields: [
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
            },
            ...blockSpacingFields({ marginTop: 4, marginBottom: 4 }),
          ],
        },
      ],
    },
  ],
} 
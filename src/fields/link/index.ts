import type { Field } from 'payload'

export type LinkAppearances = 'link' | 'button' | 'button-outline'

const appearanceOptions = [
  {
    label: 'Text Link',
    value: 'link', 
  }, 
  {
    label: 'Button',
    value: 'default',
  },
  {
    label: 'Button Outline',
    value: 'outline',
  },
]

type LinkFieldOptions = {
  name?: string
  label?: string
  required?: boolean
}

export const linkField = ({
  name = 'link',
  label = 'Link',
  required = false
}: LinkFieldOptions = {}): Field => ({
  name,
  label,
  type: 'group',
  required,
  admin: {
    hideGutter: true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required,
          admin: {
            width: '50%',
          }
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required,
          admin: {
            width: '50%',
          }
        },
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'newWindow',
          type: 'checkbox',
          label: 'Open in New Window',
          defaultValue: false,
          admin: {
            width: '50%',
          }
        },
        {
          name: 'appearance',
          type: 'select',
          label: 'Appearance',
          defaultValue: 'link',
          options: appearanceOptions,
          admin: {
            width: '50%',
          }
        }
      ]
    }
  ]
})

import type { Field } from 'payload'

export const blockSpacingFields: Field[] = [
  {
    name: "marginTop",
    type: "number",
    label: "Margin Top",
    min: 0,
    max: 32,
    defaultValue: null,
    admin: {
      description: "Space above the block (0-32)",
    },
  },
  {
    name: "marginBottom",
    type: "number",
    label: "Margin Bottom",
    min: 0,
    max: 32,
    defaultValue: null,
    admin: {
      description: "Space below the block (0-32)",
    },
  },
] as const; 
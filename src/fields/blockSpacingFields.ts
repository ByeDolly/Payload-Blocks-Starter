import type { Field } from 'payload'

type SpacingDefaults = {
  marginTop?: number;
  marginBottom?: number;
}

export const blockSpacingFields = ({ marginTop = null, marginBottom = null }: SpacingDefaults = {}): Field[] => [
  {
    name: "marginTop",
    type: "number",
    label: "Margin Top",
    min: 0,
    max: 32,
    defaultValue: marginTop,
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
    defaultValue: marginBottom,
    admin: {
      description: "Space below the block (0-32)",
    },
  },
]; 
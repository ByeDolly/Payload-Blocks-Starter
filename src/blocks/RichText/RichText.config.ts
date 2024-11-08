import { Block } from "payload";
import { blockSpacingFields } from "@/fields/blockSpacingFields";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const RichText: Block = {
  slug: "RichText",
  interfaceName: "RichTextBlock",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "content",
              type: "richText",
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  HTMLConverterFeature({}),
                ],
              }),
            },
            lexicalHTML('content', { name: 'content_html' }),
          ],
        },
        {
          label: "Style",
          fields: [
            {
              name: "width",
              type: "select",
              defaultValue: "default",
              options: [
                {
                  label: "Narrow",
                  value: "narrow",
                },
                {
                  label: "Default",
                  value: "default",
                },
                {
                  label: "Wide",
                  value: "wide",
                },
              ],
            },
            ...blockSpacingFields({ marginTop: 4, marginBottom: 4 }),
          ],
        },
      ],
    },
  ],
}; 
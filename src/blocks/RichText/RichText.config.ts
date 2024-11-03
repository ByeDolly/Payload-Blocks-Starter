import { Block } from "payload";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const RichText: Block = {
  slug: "RichText",
  interfaceName: "RichTextBlock",
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
  ],
}; 
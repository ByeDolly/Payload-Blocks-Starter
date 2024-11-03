import { Block } from "payload";
import { linkField } from "@/fields/link";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const ContentMedia: Block = {
  slug: "ContentMedia",
  interfaceName: "ContentMediaBlock",
  fields: [
    {
      name: "layout",
      type: "select",
      defaultValue: "imageRight",
      options: [
        {
          label: "Image Right",
          value: "imageRight",
        },
        {
          label: "Image Left",
          value: "imageLeft",
        },
      ],
    },
    {
      name: "content",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              HTMLConverterFeature({}),
            ],
          }),
        },
        lexicalHTML('body', { name: 'body_html' }),
        {
          name: "buttons",
          type: "array",
          maxRows: 2,
          fields: [
            linkField({
              name: "button",
              required: true,
            }),
          ],
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "theme",
      type: "select",
      defaultValue: "light",
      options: [
        {
          label: "Light",
          value: "light",
        },
        {
          label: "Dark",
          value: "dark",
        },
      ],
    },
  ],
};
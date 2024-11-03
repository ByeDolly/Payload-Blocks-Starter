import type { CollectionConfig } from "payload";
import { Hero } from "@/blocks/Hero/Hero.config";
import { Accordion } from "@/blocks/Accordion/Accordion.config";
import { SectionIntro } from "@/blocks/SectionIntro/SectionIntro.config";
import { CallToAction } from "@/blocks/CallToAction/CallToAction.config";
import { CardGrid } from "@/blocks/CardGrid/CardGrid.config";
import { ContentMedia } from "@/blocks/ContentMedia/ContentMedia.config";
import { RichText } from "@/blocks/RichText/RichText.config";
import { slugField } from "@/fields/slug";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";

export const Pages: CollectionConfig = {
	slug: "pages",
	fields: [
		{
			name: "title",
			type: "text",
		},
		{
			name: "pageBlocks",
			type: "blocks",
			blocks: [
				Accordion,
				Hero,
				SectionIntro,
				CallToAction,
				CardGrid,
				ContentMedia,
				RichText,
			],
		},
		...slugField(),
	],
	versions: {
		drafts: {
			autosave: {
				interval: 375,
			},
		},
	},
    admin: {
        defaultColumns: ['title', 'slug', 'createdAt', 'status'],
        livePreview: {
            url: ({ data }) => {
              const path = generatePreviewPath({
                slug: typeof data?.slug === 'string' ? data.slug : '',
                collection: 'pages',
              })
      
              return `${process.env.PAYLOAD_PUBLIC_URL}${path}`
            },
          },
      },
};

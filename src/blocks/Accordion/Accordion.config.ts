import { Block } from "payload";
import { blockSpacingFields } from "@/fields/blockSpacingFields";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const Accordion: Block = {
	slug: "Accordion",
	interfaceName: "AccordionBlock",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "items",
							type: "array",
							required: true,
							minRows: 1,
							admin: {
								description: "Add one or more accordion items",
							},
							fields: [
								{
									name: "heading",
									type: "text",
									required: true,
								},
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
					],
				},
				{
					label: "Style",
					fields: [
						...blockSpacingFields,
					],
				},
			],
		},
	],
};

import { Block } from "payload";
import { linkField } from "@/fields/link";
import { blockSpacingFields } from "@/fields/blockSpacingFields";

export const CardGrid: Block = {
	slug: "CardGrid",
	interfaceName: "CardGridBlock",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "cards",
							type: "array",
							label: "Cards",
							minRows: 1,
							maxRows: 6,
							fields: [
								{
									name: "image",
									type: "upload",
									label: "Image",
									relationTo: "media",
								},
								{
									name: "title",
									type: "text",
									label: "Title",
									required: true,
								},
								{
									name: "description",
									type: "textarea",
									label: "Description",
								},
								linkField({
									name: "cardLink",
									label: "Card Link",
								}),
							],
						},
					],
				},
				{
					label: "Style",
					fields: [
						{
							name: "columns",
							type: "select",
							defaultValue: "3",
							options: [
								{
									label: "2 Columns",
									value: "2",
								},
								{
									label: "3 Columns",
									value: "3",
								},
								{
									label: "4 Columns",
									value: "4",
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

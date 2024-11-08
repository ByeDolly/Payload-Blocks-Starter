import { Block } from "payload";
import { blockSpacingFields } from "@/fields/blockSpacingFields";

export const SectionIntro: Block = {
	slug: "SectionIntro",
	interfaceName: "SectionIntroBlock",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "heading",
							type: "text",
							label: "Heading",
							required: true,
						},
						{
							name: "subheading",
							type: "text",
							label: "Subheading",
						},
						{
							name: "text",
							type: "textarea",
							label: "Intro Text",
						},
					],
				},
				{
					label: "Style",
					fields: [
						{
							name: "alignment",
							type: "select",
							defaultValue: "left",
							options: [
								{
									label: "Left",
									value: "left",
								},
								{
									label: "Center",
									value: "center",
								},
							],
						},
						...blockSpacingFields({ marginTop: 24, marginBottom: 2 }),
					],
				},
			],
		},
	],
};

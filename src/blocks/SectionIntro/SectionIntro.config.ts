import { Block } from "payload";

export const SectionIntro: Block = {
	slug: "SectionIntro",
	interfaceName: "SectionIntro",
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
	],
};

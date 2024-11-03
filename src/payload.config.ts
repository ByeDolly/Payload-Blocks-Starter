import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
// import { postgresAdapter } from "@payloadcms/db-postgres";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import Users from "./collections/Users";

export default buildConfig({
	// Define and configure your collections in this array
	collections: [
        Pages, 
        Media, 
        Users
    ],

	// If you'd like to use Rich Text, pass your editor here
	editor: lexicalEditor(),

	// Your Payload secret - should be a complex and secure string, unguessable
	secret: process.env.PAYLOAD_SECRET || "",

	// Whichever Database Adapter you're using should go here
	//   db: postgresAdapter({
	//     pool: {
	//       connectionString: process.env.DATABASE_URL,
	//     },
	//   }),

	db: mongooseAdapter({
		url: process.env.DATABASE_URL || "",
	}),

	// If you want to resize images, crop, set focal point, etc.
	// This is optional - if you don't need to do these things,
	sharp,

	// Adjust admin dashboard
	admin: {
		avatar: "default",
		livePreview: {
			breakpoints: [
				{
					label: "Mobile",
					name: "mobile",
					width: 375,
					height: 667,
				},
				{
					label: "Tablet",
					name: "tablet",
					width: 768,
					height: 1024,
				},
				{
					label: "Desktop",
					name: "desktop",
					width: 1440,
					height: 900,
				},
			],
		},
	},

	globals: [],
});

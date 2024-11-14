import { buildConfig } from "payload";
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";

import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Media } from "./collections/Media";
import Users from "./collections/Users";

export default buildConfig({
  collections: [Pages, Posts, Media, Users],

  plugins: [
    seoPlugin({
      collections: [],
      uploadsCollection: "media",
      tabbedUI: true,
      generateTitle: ({ doc }) => `${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
  ],

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.DATABASE_URL,
  }),

  sharp,

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

  secret: process.env.PAYLOAD_SECRET || "",
}); 
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
import { revalidatePage } from "./hooks/revalidatePage";
import { authenticated } from '@/access/authenticated'
import { published } from '@/access/published'
import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig = {
    slug: "pages",
   
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
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
                    ],
                },
                {
                    name: 'meta',
                    label: 'SEO',
                    fields: [
                        OverviewField({
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                            imagePath: 'meta.image',
                        }),
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaDescriptionField({}),
                        MetaImageField({
                            relationTo: 'media',
                        }),
                        PreviewField({
                            hasGenerateFn: true,
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                        }),
                    ],
                },
            ],
        },
        ...slugField(),
    ],
   
    // access: {
    //     create: authenticated, // Must be logged in to create Pages
    //     delete: authenticated, // Must be logged in to delete Pages
    //     read: published, // Only published Pages are visible
    //     update: authenticated, // Must be logged in to edit Pages
    // },

    versions: {
        drafts: {
            autosave: {
                interval: 500,
            },
        },
    },
    
    admin: {
        group: "Content",
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
        preview: (data) => {
            const path = generatePreviewPath({
                slug: typeof data?.slug === 'string' ? data.slug : '',
                collection: 'pages',
            })

            return `${process.env.PAYLOAD_PUBLIC_URL}${path}`
        },
    },

    hooks: {
        afterChange: [revalidatePage],
    },
};

import type { CollectionConfig } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import { authenticated } from '@/access/authenticated'
import { published } from '@/access/published'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidatePost } from './hooks/revalidatePost'
import { slugField } from '@/fields/slug'
import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Posts: CollectionConfig = {
    slug: 'posts',

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [  
                        {
                            name: 'content',
                            type: 'richText',
                            required: true,
                            label: false,
                            editor: lexicalEditor({
                                features: ({ defaultFeatures }) => [
                                    ...defaultFeatures,
                                    HTMLConverterFeature({}),
                                ],
                            }),
                        },
                        lexicalHTML('content', { name: 'content_html' }),
                        {
                            name: 'excerpt',
                            type: 'textarea',
                        },
                        {
                            name: 'featuredImage',
                            type: 'upload',
                            relationTo: 'media',
                        },
                    ],
                },
                {
                    name: 'meta',
                    label: 'SEO',
                    fields: [
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaDescriptionField({}),
                        MetaImageField({
                            relationTo: 'media',
                        }),
                        PreviewField({
                            // if the `generateUrl` function is configured
                            hasGenerateFn: true,

                            // field paths to match the target field for data
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                        }),
                    ],
                },
            ],
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
                position: 'sidebar',
            },
            hooks: {
                beforeChange: [
                    ({ siblingData, value }) => {
                        if (siblingData._status === 'published' && !value) {
                            return new Date()
                        }
                        return value
                    },
                ],
            },
        },
        {
            name: 'authors',
            type: 'relationship',
            admin: {
                position: 'sidebar',
            },
            hasMany: true,
            relationTo: 'users',
        },
        // This field is only used to populate the user data via the `populateAuthors` hook
        // This is because the `user` collection has access control locked to protect user privacy
        // GraphQL will also not return mutated user data that differs from the underlying schema
        {
            name: 'populatedAuthors',
            type: 'array',
            access: {
                update: () => false,
            },
            admin: {
                disabled: true,
                readOnly: true,
            },
            fields: [
                {
                    name: 'id',
                    type: 'text',
                },
                {
                    name: 'name',
                    type: 'text',
                },
            ],
        },
        ...slugField(),
    ],

    access: {
        create: authenticated,
        delete: authenticated,
        read: published,
        update: authenticated,
    },

    versions: {
        drafts: {
            autosave: {
                interval: 100, // We set this interval for optimal live preview
            },
        },
        maxPerDoc: 50,
    },

    admin: {
        group: "Content",
        defaultColumns: ['title', 'slug', 'updatedAt'],
        livePreview: {
            url: ({ data }) => {
                const path = generatePreviewPath({
                    slug: typeof data?.slug === 'string' ? data.slug : '',
                    collection: 'posts',
                    prefix: '/posts'
                })

                return `${process.env.NEXT_PUBLIC_URL}${path}`
            },
        },
        preview: (data) => {
            const path = generatePreviewPath({
                slug: typeof data?.slug === 'string' ? data.slug : '',
                collection: 'posts',
            })

            return `${process.env.NEXT_PUBLIC_URL}${path}`
        },
        useAsTitle: 'title',
    },

    hooks: {
        afterChange: [revalidatePost],
        afterRead: [populateAuthors],
    },

}
import type { Metadata } from 'next'
import React, { cache } from 'react'
import { draftMode } from 'next/headers'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMetadata'

/**
 * This function fetches a single page from Payload CMS.
 * - Uses React's cache to prevent duplicate requests
 * - Returns null if page is not found
 * - Pages are pre-rendered at build time for optimal performance
 */

const getPage = cache(async (slug: string) => {
    // Check if we're in draft mode (preview mode)
    const { isEnabled: draft } = await draftMode()
    
    // Initialize Payload with HMR support
    const payload = await getPayloadHMR({ config: configPromise })

    // Query the 'pages' collection
    const result = await payload.find({
        collection: 'pages',
        draft,                    
        limit: 1,                 
        overrideAccess: true,     // Bypass access control for public pages
        where: {
            slug: { equals: slug },  // Find page by slug
        },
    })

    // Return the first page found or null
    return result.docs?.[0] || null
})

// Generate static paths at build time
export async function generateStaticParams() {
    const payload = await getPayloadHMR({ config: configPromise })
    const pages = await payload.find({
        collection: 'pages',
        draft: false,
        limit: 1000,
        overrideAccess: true,
    })

    return pages.docs?.map(({ slug }) => ({ slug })) || []
}

// Generate metadata for the page
export async function generateMetadata({
    params: paramsPromise
}: {
    params: Promise<{ slug?: string }>
}): Promise<Metadata> {
    const { slug = 'home' } = await paramsPromise
    const page = await getPage(slug)
    return generateMeta(page)
}

// Page component
export default async function Page({
    params: paramsPromise
}: {
    params: Promise<{ slug?: string }>
}) {
    const { slug = 'home' } = await paramsPromise
    const page = await getPage(slug)

    if (!page) return null

    return (
        <article>
            <RenderBlocks blocks={page.pageBlocks} />
        </article>
    )
}

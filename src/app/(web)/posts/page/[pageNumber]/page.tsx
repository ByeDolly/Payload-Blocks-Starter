import type { Metadata } from 'next/types'
import { PostArchive } from '@/components/PostArchive'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import { notFound } from 'next/navigation'

export const revalidate = 600

type Args = {
    params: Promise<{
        pageNumber: string
    }>
}

export default async function Page({ params: paramsPromise }: Args) {
    const { pageNumber } = await paramsPromise
    const payload = await getPayloadHMR({ config: configPromise })

    const sanitizedPageNumber = Number(pageNumber)

    if (!Number.isInteger(sanitizedPageNumber)) notFound()

    const posts = await payload.find({
        collection: 'posts',
        depth: 1,
        limit: 12,
        page: sanitizedPageNumber,
        overrideAccess: false,
    })

    return (
        <div className="pt-24 pb-24">
            <div className="container max-w-screen-xl mx-auto px-5 mb-16">
                <div className="prose max-w-none text-center">
                    <h1>Posts</h1>
                </div>
            </div>

            <div className="container max-w-screen-xl mx-auto px-5 mb-8">
                <PostArchive posts={posts.docs} />

                <div className="container max-w-screen-xl mx-auto px-5">
                    {posts.totalPages > 1 && posts.page && (
                        <Pagination page={posts.page} totalPages={posts.totalPages} />
                    )}
                </div>
            </div>
        </div>
    )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { pageNumber } = await paramsPromise
    return {
        title: `Payload Website Template Posts Page ${pageNumber || ''}`,
    }
}

export async function generateStaticParams() {
    const payload = await getPayloadHMR({ config: configPromise })
    const posts = await payload.find({
        collection: 'posts',
        depth: 0,
        limit: 12,
        draft: false,
        overrideAccess: false,
    })

    const pages: { pageNumber: string }[] = []

    for (let i = 1; i <= posts.totalPages; i++) {
        pages.push({ pageNumber: String(i) })
    }

    return pages
}

import type { Metadata } from 'next/types'

import { PostArchive } from '@/components/PostArchive'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
    const payload = await getPayloadHMR({ config: configPromise })

    const posts = await payload.find({
        collection: 'posts',
        depth: 1,
        limit: 12,
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

export function generateMetadata(): Metadata {
    return {
        title: `Payload Website Template Posts`,
    }
}

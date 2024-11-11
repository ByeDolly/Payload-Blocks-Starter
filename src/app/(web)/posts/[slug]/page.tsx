import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Post } from '../../../../../payload-types'

import { generateMeta } from '@/utilities/generateMetadata'

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return (
    <article className="py-16">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <header className="text-center mb-12 prose max-w-none">
          <h1 className="mb-4">
            {post?.title}
          </h1>
          {post?.populatedAuthors && post.populatedAuthors.length > 0 && (
            <p className="text-gray-600">
              By {post.populatedAuthors.map(author => author.name).join(', ')} on{' '}
              {new Date(post.publishedAt || '').toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          )}
        </header>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content_html }}
        />
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta(post)
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

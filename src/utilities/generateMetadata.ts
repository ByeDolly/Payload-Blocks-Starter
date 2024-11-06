import type { Metadata } from 'next'

type PayloadMetaField = {
  meta?: {
    title?: string | null
    description?: string | null
    image?: any
  } | null
  slug?: string | null
}

export const generateMeta = (doc: PayloadMetaField): Metadata => {
  const ogImage = doc?.meta?.image?.url
    ? `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`
    : `${process.env.NEXT_PUBLIC_SERVER_URL || ''}/website-template-OG.webp`

  return {
    title: doc?.meta?.title || 'Payload Website Template',
    description: doc?.meta?.description || 'An open-source website built with Payload and Next.js.',
    openGraph: {
      type: 'website',
      siteName: 'Payload Website Template',
      description: doc?.meta?.description || 'An open-source website built with Payload and Next.js.',
      images: [{ url: ogImage }],
      url: doc?.slug || '/',
    },
  }
}
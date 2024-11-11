type Props = {
  slug: string
  collection: string
  prefix?: string
}

export const generatePreviewPath = ({ collection, slug, prefix = '' }: Props) => {
  const path = `${prefix}/${slug}`.replace(/\/+/g, '/')  // Handles cases where prefix might be empty

  const params = {
    slug,
    collection,
    path,
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  return `/preview/?${encodedParams.toString()}`
}
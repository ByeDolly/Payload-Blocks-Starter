import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Post } from '../../payload-types' // Assuming you have generated types
import Image from 'next/image'

interface PostArchiveProps {
  posts: Post[]
}

export function PostArchive({ posts }: PostArchiveProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
          <Link href={`/posts/${post.slug}`} className="flex flex-col flex-1">
            {post.featuredImage && (
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                <Image
                  src={typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage?.url || ''}
                  alt={typeof post.featuredImage === 'string' ? '' : post.featuredImage?.filename || ''}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <CardHeader>
              <div className="text-sm text-muted-foreground">
                {/* {post.publishedAt && formatDate(post.publishedAt)} */}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mt-2">
                {post.title}
              </h3>
            </CardHeader>

            <CardContent>
              {post.excerpt && (
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </CardContent>

            <CardFooter className="mt-auto">
              <span className="text-sm font-medium text-primary hover:underline">
                Read more →
              </span>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}

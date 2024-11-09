'use client'

import { useRouter } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave"

interface PageClientProps {
    page: {
        pageBlocks: any[] // Replace 'any' with your actual blocks type
    }
}

export default function PageClient({ page }: PageClientProps) {
    const router = useRouter()

    return (
        <article>
            <RefreshRouteOnSave
                refresh={router.refresh}
                serverURL={process.env.NEXT_PUBLIC_SERVER_URL}
            />
            <RenderBlocks blocks={page.pageBlocks} />
        </article>
    )
}
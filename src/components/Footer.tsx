import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 md:h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          Built by{' '}
          <Link 
            href="https://twitter.com" 
            className="font-medium underline underline-offset-4"
          >
            your-name
          </Link>
          .{' '}
          The source code is available on{' '}
          <Link 
            href="https://github.com" 
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </div>
      </div>
    </footer>
  )
}

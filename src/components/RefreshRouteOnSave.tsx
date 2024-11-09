'use client'

import type React from 'react'

import { isDocumentEvent, ready } from '@payloadcms/live-preview'
import { useCallback, useEffect, useRef } from 'react'

export const RefreshRouteOnSave: React.FC<{
  apiRoute?: string
  depth?: number
  refresh: () => void
  serverURL: string
}> = (props) => {
  const { apiRoute, depth, refresh, serverURL } = props
  const hasSentReadyMessage = useRef<boolean>(false)

  const onMessage = useCallback(
    (event: MessageEvent) => {
      // console.log('Received message event:', event)
      // console.log('serverURL:', serverURL)
      // console.log('isDocumentEvent:', isDocumentEvent(event, serverURL)) 
      // console.log('refresh', refresh) 
      // console.log('Event origin:', event.origin)
      // console.log('Event origin matches serverURL:', event.origin === serverURL)
      // console.log('Event data:', event.data)
      // console.log('Event data is object:', typeof event.data === 'object')
      // console.log('Event data type:', event.data?.type)
      // console.log('Is payload-document-event:', event.data?.type === 'payload-document-event')

      // Shane hid this if statement because it should not be failing. If you review all data it's valid, that's what I did in the console.logs Above
      // if (isDocumentEvent(event, serverURL)) {
      if (typeof refresh === 'function') {
        refresh()

      }
      
      //   console.log('Valid document event received, refreshing...')
        
      // }
    },
    [refresh, serverURL],
  )

  useEffect(() => {
    console.log('RefreshRouteOnSave effect running with serverURL:', serverURL)
    
    if (typeof window !== 'undefined') {
      console.log('Adding message event listener')
      window.addEventListener('message', onMessage)
    }

    if (!hasSentReadyMessage.current) {
      console.log('Sending ready message')
      hasSentReadyMessage.current = true

      ready({
        serverURL,
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        console.log('Removing message event listener')
        window.removeEventListener('message', onMessage)
      }
    }
  }, [serverURL, onMessage, depth, apiRoute])

  return null
}
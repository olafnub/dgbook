'use client'
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';
import React from 'react'

const VercelAnalytics = () => {
  return <Analytics beforeSend={(event: BeforeSendEvent) => {
    if (event.url.includes('/private') || event.url.includes('/secret')) {
      return null;
    }
    return event;
}}/>
}

export default VercelAnalytics
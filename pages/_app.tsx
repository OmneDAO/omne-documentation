import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isInternal = router.query.internal === '1'
  const [isCookieInternal, setIsCookieInternal] = useState(false)

  // Check for the IP-based internal traffic cookie set by Caddy
  useEffect(() => {
    if (document.cookie.includes('omne_internal=1')) {
      setIsCookieInternal(true)
    }
  }, [])

  // Skip Umami for internal traffic (query param or IP-based cookie)
  const skipTracking = isInternal || isCookieInternal

  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && !skipTracking && (
        <Script
          src="https://analytics.omne.foundation/script.js"
          data-website-id="663bd659-97ea-4b47-ac0e-fb9efd3c34f6"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}

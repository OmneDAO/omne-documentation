import '@fontsource-variable/source-serif-4'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

import '../styles/tailwind.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className="bg-primary min-h-screen">
  <Component {...pageProps} />
  </div>
  )
}

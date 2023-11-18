import { ThemeProvider } from '@material-tailwind/react'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

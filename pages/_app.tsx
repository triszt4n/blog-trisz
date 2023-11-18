import { ThemeProvider } from '@material-tailwind/react'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${inter.className} bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

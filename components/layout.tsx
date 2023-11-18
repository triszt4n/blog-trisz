import Footer from './footer'
import Meta from './meta'
import { SimpleNavbar } from './navbar/navbar'
import ScrollButton from './scroll-button'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <SimpleNavbar />
        <main>{children}</main>
        <ScrollButton />
      </div>
      <Footer />
    </>
  )
}

export default Layout

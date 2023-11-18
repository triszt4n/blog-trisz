import Footer from './footer'
import Meta from './meta'
import { SimpleNavbar } from './navbar/navbar'

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
      </div>
      <Footer />
    </>
  )
}

export default Layout

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'
import { NAV_ITEMS } from './config'

function NavList() {
  return (
    <ul className="my-2 font-bold flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NAV_ITEMS.map((item) => (
        <Typography key={item.label} as="li" variant="lead" color="blue-gray" className="p-1">
          <Link href={item.path} className="flex items-center hover:text-blue-500 transition-colors">
            {item.label}
          </Link>
        </Typography>
      ))}
    </ul>
  )
}

export function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}
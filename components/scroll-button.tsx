import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [fromTop, setFromTop] = useState(0)
  const [fromBottom, setFromBottom] = useState(0)

  const onScroll = () => {
    setFromTop(window.scrollY)
    setFromBottom(document.body.offsetHeight - window.innerHeight - window.scrollY)
    setVisible(fromTop > 200 && fromBottom > 200)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <Button
      className={`p-0 text-center fixed bottom-${
        visible ? '6' : '2'
      } right-10 h-10 w-10 shadow-lg transition-all opacity-${visible ? '100' : '0'}`}
      color="deep-purple"
      onClick={scrollToTop}
    >
      <span style={{ display: 'inline-block' }}>🔝</span>
    </Button>
  )
}

export default ScrollButton

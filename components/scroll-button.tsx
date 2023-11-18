import { ArrowSmallUpIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [fromTop, setFromTop] = useState(0)

  const scrollToTop = (): void => {
    console.log('scrolling to top')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const onScroll = () => {
    setFromTop(window.scrollY)
    setVisible(fromTop > 200)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return (
    <button
      className={`p-0 rounded-lg text-white bg-deep-purple-800 text-center fixed bottom-6 right-10 h-10 w-10 shadow-lg transition-all ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <ArrowSmallUpIcon className="h-6 w-6 inline-block" />
    </button>
  )
}

export default ScrollButton

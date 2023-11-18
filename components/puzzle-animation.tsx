import { motion } from 'framer-motion'
import React from 'react'
import { PuzzleIcon1, PuzzleIcon2, PuzzleIcon3, PuzzleIcon4 } from './puzzle-icons'

type Props = {
  text?: string
}

const PuzzleAnimation: React.FC<Props> = ({ text }) => {
  const transition = {
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1
  }
  const animation = {
    opacity: [1, 0, 1]
  }

  return (
    <div className="flex items-center flex-col mt-8">
      {text && <div>⚠️ {text}</div>}
      <div>
        <div className="flex">
          <motion.div animate={animation} transition={{ ...transition, duration: 2 + Math.random() * 3 }}>
            <PuzzleIcon1 className="w-[8rem] h-[8rem] text-purple-300" />
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 3 }}
          >
            <PuzzleIcon2 className="w-[8rem] h-[8rem] text-indigo-400 ml-[-3.75rem]" />
          </motion.div>
        </div>
        <div className="flex">
          <motion.div
            animate={animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
          >
            <PuzzleIcon3 className="w-[8rem] h-[8rem] text-deep-purple-800 mt-[-3.75rem]" />
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 4 }}
          >
            <PuzzleIcon4 className="w-[8rem] h-[8rem] text-deep-purple-400 mt-[-3.75rem] ml-[-3.6rem]" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PuzzleAnimation

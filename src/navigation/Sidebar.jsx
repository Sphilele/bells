import { useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiSettings, FiShoppingCart } from 'react-icons/fi'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-zinc-800 rounded-xl"
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 backdrop-blur-sm bg-green"
              style={{ backgroundColor: 'rgba(0, 255, 0, 0.2)' }}

            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-cream"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800"> 
                 <Link to='/newlogin'><span>Login</span></Link>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-zinc-800 rounded-xl"
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, to, Icon } = item
                  return (
                    <li key={title}>
                      <NavLink 
                        onClick={toggleSidebar}
                        to={to}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-[#EABE7C] border-zinc-800"
                      >
                        <motion.span {...framerText(idx)}>{title}</motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-2xl" />
                        </motion.div>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const items = [
  { title: 'Home', Icon: BiHomeSmile, to: '/' },
  { title: 'About', Icon: BiUser, to: '/story' },
  { title: 'Quiz', Icon: HiOutlineChatBubbleBottomCenterText, to: '/quiz' },
  { title: 'Login', Icon: FiSettings, to: '/login' },
  { title: 'Upload', Icon: FiShoppingCart, to: '/upload' },
]

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
}

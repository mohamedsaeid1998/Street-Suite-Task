import { profileImg, streetSuiteLogo } from '@/Assets'
import { FaArrowUpRightDots, FaBell, FaFolderOpen, FaGears, FaGraduationCap } from "react-icons/fa6";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import NavigationLink from "./NavigationLink";
import { useEffect, useState } from "react";
const SideBar = () => {

  const navItems = [
    { icon: <FaGears size={20} />, title: "Automation" },
    { icon: <FaFolderOpen size={20} />, title: "Portfolio" },
    { icon: <FaArrowUpRightDots size={20} />, title: "Trading" },
  ]

  const sidebarShrink = {
    open: { width: "11rem", },
    close: { width: "4rem", transition: { damping: 15 } },
  };
  const sidebarIcons = {
    openIcon: {
      y: ["2rem", "1rem"],
      transition: { type: "spring", damping: 15, duration: 0.5 },
    },
    closeIcon: {
      y: ["2rem", "4rem"],
      transition: { type: "spring", damping: 15, duration: 0.5 },
    },
  };
  const textAvatar = {
    openIcon: {
      opacity: [0.25, 0.5, 0.75, 1],
      transition: { type: "spring", damping: 15, duration: 0.5 },
    },
    closeIcon: {
      opacity: [0.1, 0],
      transition: { type: "spring", damping: 15, duration: 0.5 },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const sidebarShrinkIcons = useAnimationControls();
  const textAvatarSidebar = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      sidebarShrinkIcons.start("openIcon");
      textAvatarSidebar.start("closeIcon");
    } else {
      containerControls.start("close");
      sidebarShrinkIcons.start("closeIcon");
      textAvatarSidebar.start("closeIcon");
    }
  }, [isOpen]);
  const handelOpenClose = (status: any) => {
    setIsOpen(status);
  };

  return <>

    <motion.aside variants={sidebarShrink} initial="close" animate={containerControls} onMouseEnter={() => handelOpenClose(true)} onMouseLeave={() => handelOpenClose(false)} transition={{ type: "tween", stiffness: 500, damping: 300, ease: [0.17, 0.67, 0.83, 0.67]}} className={`bg-mainBg flex flex-col p-2 pt-4 h-screen duration-500`}>
      <figure className=' flex justify-center mb-8'>
        <img className='min-w-10' src={streetSuiteLogo} alt="Logo" />
      </figure>

      <motion.div className='flex flex-col justify-between h-[90vh] pb-10 overflow-hidden '>
        <nav className='text-white flex flex-col justify-between mx-auto ms-4 overflow-hidden '>
          <div className='flex flex-col'>
            <NavigationLink name="Alerts" classes='text-white hover:text-sky-300'  >
              <FaBell size={20} />
            </NavigationLink>
            <NavigationLink name="Training" classes='text-white hover:text-sky-300' >
              <FaGraduationCap size={20} />
            </NavigationLink>

            <ul className='flex flex-col justify-center gap-2'>
              {navItems?.map(({ icon, title }) => (
                <li key={title}>
                  <div className="relative">
                    <NavigationLink name={title} classes='text-stone-600'>{icon}</NavigationLink>
                    <AnimatePresence>
                      <motion.div whileHover={{ opacity: isOpen ? 1 : 0, transition: { delay: 0.2, duration: 0.1, type: "spring" } }} className="wrapper absolute top-2 left-0 right-0  opacity-0 cursor-pointer">
                        <div className="background absolute bg-sky-900 text-center p-3 w-full h-full " style={{ filter: "blur(6px)" }}></div>
                        <div className="foreground m-auto flex justify-center" style={{ backdropFilter: " blur(5px)" }}>  compting soon </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </li>))}
            </ul>

          </div>
        </nav>

        <AnimatePresence>
          <motion.div
            variants={sidebarIcons}
            animate={sidebarShrinkIcons}
            initial="closeIcon"
            className="flex flex-col ">
            <div className={`flex ${!isOpen && " "} m-auto `}>
              <AnimatePresence>
                <img src={profileImg} alt="profile-Img" />
                <motion.div variants={textAvatar} animate={sidebarShrinkIcons} initial="closeIcon" layoutId="underline">
                  <div className="flex flex-col">
                    <p className="mx-2 text-white text-base text-nowrap font-semibold ">
                      Moni Roy
                    </p>
                    <p className="mx-2 text-[#979797] text-xs font-semibold">
                      Beginner
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.span className={`text-[#424242] text-sm opacity-0 mt-4 mx-auto`} initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0, transition: { delay: 0.4 }, }}>
              Street Suite. 2.0
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.aside>
  </>
}

export default SideBar
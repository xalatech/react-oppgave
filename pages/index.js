import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageTransition = {
    full: {
      scale: 3,
    },
    small: {
      scale: .7
    }
  }

  const overlayTransition = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      bounce: 2
    }
  }

  return (
    <div className={styles.container}>
  
    <div className={styles.fullscreen_container}>
      <main className={styles.main}>
        <motion.p className={styles.heading}>
          <b>Shared by</b> you
        </motion.p>
        
        <motion.img className={styles.image} src="./image.jpg"
         animate={isFullScreen ? "full" : "small"}
         variants={imageTransition}
         transition={{ duration: .2 }}/>
      
        <motion.a className={styles.close_button}
        onClick={() => setIsFullScreen(!isFullScreen)}
        animate={isFullScreen ? "visible" : "hidden"}
        variants={overlayTransition}
        transition={{ duration: .5 }}
        initial="hidden"><span aria-hidden>X</span></motion.a>
        
        <motion.h1 className={styles.fullscreen_title}
        animate={isFullScreen ? "visible" : "hidden"}
        variants={overlayTransition}
        transition={{ duration: .5 }}
        initial="hidden">Lost in Tokyo</motion.h1>

        <motion.p className={styles.fullscreen_subtitle}
        animate={isFullScreen ? "visible" : "hidden"}
        variants={overlayTransition}
        transition={{ duration: .5 }}
        initial="hidden">By Joahanathan Vik</motion.p>
    
        <motion.h1 className={styles.title}>Lost in Toxkyo</motion.h1>

        <motion.p className={styles.description}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
          </motion.p>  
     </main>
    </div>

    <button onClick={() => setIsFullScreen(!isFullScreen)}>Animate</button>
    </div>
  )
}

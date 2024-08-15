import { elementFromRightToLeft, elementUp } from '../animations/element'
import { motion } from 'framer-motion'

const ProfileHeader = () => {
  return (
    <div className='title-section'>
      <motion.div 
        variants={elementUp} 
        initial="init" 
        animate="anim"  
      >
        <h1>Casper Wernersson</h1>
      </motion.div>
      <motion.div 
        variants={elementFromRightToLeft} 
        initial="init" 
        animate="anim"
      >
        <p>Web Developer / Visual Designer</p>
      </motion.div>
    </div>
  )
}

export default ProfileHeader

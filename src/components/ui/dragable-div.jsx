import { motion } from 'framer-motion'
import React from 'react'

export default function Dragablediv() {
  return (
    <motion.div drag style={box}>

    </motion.div>
  )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#2f7cf8",
    borderRadius: 10,
}
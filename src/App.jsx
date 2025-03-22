import { Outlet } from 'react-router'
import './App.css'
import BackgroundView from './components/BackgroundView/BackgroundView'
import { motion } from "motion/react";


function App() {

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <BackgroundView />
      <Outlet />
    </motion.div>
  )
}

export default App





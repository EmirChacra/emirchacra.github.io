import {useLocation, Outlet} from 'react-router'
import { AnimatePresence, motion } from "motion/react";
import './App.css'
import BackgroundView from './components/BackgroundView/BackgroundView'
import Breadcrumb from './components/Breadcrumb/Breadcrumb';


function App() {

  const paths = useLocation();

  return (
    <AnimatePresence mode="wait">
    <motion.div
    key={paths.pathname}
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration: 1}} >
      <BackgroundView />
      <Breadcrumb />
      <Outlet/>
    </motion.div>
    </AnimatePresence>
  )
}

export default App





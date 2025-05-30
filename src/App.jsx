import {useLocation, Outlet} from 'react-router'
import './App.css'
import BackgroundView from './components/BackgroundView/BackgroundView'
import Breadcrumb from './components/Breadcrumb/Breadcrumb';


function App() {

  const paths = useLocation();

  return (
    <div>
      <BackgroundView />
      <Breadcrumb />
      <Outlet/>
    </div>
  )
}

export default App





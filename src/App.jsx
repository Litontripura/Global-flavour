import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ClipLoader } from 'react-spinners'

function App() {
  const navigation = useNavigation()

  return (
    <div>
      <Header></Header>
      <div className="loading-container">
        {navigation.state === 'loading' && <ClipLoader size={50} color="#123abc" />}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App

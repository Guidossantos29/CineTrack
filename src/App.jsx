import { ToastContainer } from 'react-toastify'
import './App.css'
import RoutesApp from './routes'


function App() {


  return (
    <>
      <div>
        <ToastContainer autoClose={3000}/> 
        <RoutesApp />
      </div>
    </>
  )
}

export default App

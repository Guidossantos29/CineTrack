import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Film from './pages/Films'
import Header from './components/Header'
import Error from './pages/Error'
import Favoritos from './pages/Favoritos'




function RoutesApp() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/films/:id' element={<Film />} />
                <Route path='/films/favoritos' element={<Favoritos />} />


                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
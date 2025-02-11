import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Home from './pages/Home'
import Film from './pages/Films'
import Header from './components/Header'
import api from './api'
import { useState,useEffect } from 'react'



function RoutesApp() {

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/films/:id' element={<Film/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
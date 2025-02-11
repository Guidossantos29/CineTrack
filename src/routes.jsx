import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Home from './pages/Home'
import Film from './pages/Film'
import Header from './components/Header'
import api from './api'
import { useState,useEffect } from 'react'



function RoutesApp() {
    const [film,setFilm] = useState([]);

    useEffect(() => {

        async function loadFilmes()  {
            const response = await api.get('movie/now_playing',{
                params: {
                    api_key:'956aa39c15a2fca19258140a1832df8e',
                    language:'pt-BR',
                    page: 1
                }
            })

            console.log(response);
        }

        loadFilmes();

        
        

    },[])

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
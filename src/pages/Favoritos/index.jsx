import { useState, useEffect } from 'react'
import './style.css'
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


export function Favoritos() {
    const [films, setFilms] = useState([])

    useEffect(() => {

        const mylist = localStorage.getItem("@cineTrack")

        setFilms(JSON.parse(mylist))

    }, [])

    function excluirFilme(id) {

        let FilterFilms = films.filter((film) => {
            return (
                film.id !== id
            )
        })

        setFilms(FilterFilms)
        localStorage.setItem("@cineTrack",JSON.stringify(FilterFilms))
        toast.success("Filme excluido com sucesso")
        
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>
            {films.length === 0 && <span>Voce não tem filmes salvos</span>}
              
            
            <ul>
                {films.map((film) => {
                    return (
                        <li key={film.id}>
                            <span>{film.title}</span>

                            <div>
                                <Link to={`/films/${film.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(film.id)}>Excluir</button>
                            </div>

                        </li>


                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos
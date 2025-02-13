import { useState, useEffect } from 'react'
import './style.css'
import { Link } from "react-router-dom"


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
    }

    return (
        <div className='meus-filmes'>
            <ul>
                {films.map((film) => {
                    return (
                        <li key={film.id}>
                            <span>{film.title}</span>

                            <div>
                                <Link to="/films/favoritos">Ver detalhes</Link>
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
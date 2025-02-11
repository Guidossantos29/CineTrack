import { useState, useEffect } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import "./style.css"

function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '956aa39c15a2fca19258140a1832df8e',
                    language: 'pt-BR',
                    page: 1
                }
            })
            console.log(response.data.results.slice(0, 10))
            setFilms(response.data.results.slice(0, 10))
        }

        loadFilmes();




    }, [])

    return (
        <div className="container">
            <div className="lista-filmes">
                {films.map((film) => {
                    return (
                        <article key={films.id}>
                            <strong>{film.title}</strong>
                            <img src={`http://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                            <Link to={`/filme/${film.id}`} >Veja mais</Link>
                        </article>
                    )
                })}
            </div>

        </div>

    )

}
export default Home;

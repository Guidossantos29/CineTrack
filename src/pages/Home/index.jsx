import { useState, useEffect } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import "./style.css"

function Home() {
    const [films, setFilms] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '956aa39c15a2fca19258140a1832df8e',
                    language: 'pt-BR',
                    page: 1
                }
            })
            
            setFilms(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes();
      

    }, [])

    if(loading) {
        return(
        <div className="loading">
            <h2>carregando...</h2>
        </div>
        )
    }


    return (
        <div className="container">
            <div className="lista-filmes">
                {films.map((film) => {
                    return (
                        <article key={film.id}>
                            <strong>{film.title}</strong>
                            <img src={`http://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />
                            <Link to={`/films/${film.id}`} >Veja mais</Link>
                        </article>
                    )
                })}
            </div>

        </div>

    )

}
export default Home;

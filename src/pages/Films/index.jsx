import { replace, useNavigate, useParams } from "react-router-dom"
import api from "../../api"
import { useState, useEffect, } from "react"
import './styles.css'
import { toast } from "react-toastify"


export function Film() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [film, setFilme] = useState({});
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        async function loadFilms() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '956aa39c15a2fca19258140a1832df8e',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false)

                })
                .catch(() => {
                    console.log('filme não encontrado!');
                    navigate('/', { replace: true })
                    return

                })


        }

        loadFilms()
    }, [navigate, id])


    function SalvarFilme() {
        const mylist = localStorage.getItem("@cineTrack")

        let filmsSalvos = JSON.parse(mylist) || [];

        const hasFilm = filmsSalvos.some((filmsSalvo => filmsSalvo.id === film.id))

        if (hasFilm) {
            toast.warn("este filme ja esta na sua lista")
            return
        }

        filmsSalvos.push(film)
        localStorage.setItem("@cineTrack", JSON.stringify(filmsSalvos))
        toast.success("Filme salvo com sucesso")
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>carregando detalhes do filme...</h1>
            </div>
        )
    }



    return (
        <div key={film.id} className="filme-info">
            <h1>{film.title}</h1>

            <img src={`http://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />
            <h3>Sinopse</h3>
            <span>{film.overview}</span>
            <strong>Avaliação {film.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={SalvarFilme}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${film.title} Trailer`}>Trailer</a>
                </button>
            </div>

        </div>


    )

}

export default Film
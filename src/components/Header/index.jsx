import { Link } from "react-router-dom"
import './style.css'



function Header() {
    return(
        <header className="headerContainer">
            <Link to='/' className="logo">CineTrack</Link>
            <Link to='/films/favoritos' className="favoritosButton">Meus Filmes</Link>
        </header>
    )
}

export default Header
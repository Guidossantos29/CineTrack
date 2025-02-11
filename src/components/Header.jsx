import { Link } from "react-router-dom"



function Header() {
    return(
        <header className="headerContainer">
            <Link to='/' className="logo">CineTrack</Link>
            <Link to='/favoritos' className="favoritosButton">Meus Filmes</Link>
        </header>
    )
}

export default Header
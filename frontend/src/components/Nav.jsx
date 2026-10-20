import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav-kontener">
            <Link to="/">Főoldal</Link>
            <Link to="/animals">Eladó állatok</Link>
            <Link to="/free-animals">Ingyen elvihető állatok</Link>
            <Link to="/login">Bejelentkezés</Link>
            <Link to="/register">Regisztráció</Link>
            <Link to="/upload">Állat feltöltés</Link>
        </nav>
    );
};

export default Nav;
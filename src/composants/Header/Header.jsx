import './header.css';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return (
        <header>
            <h1>Cindy SCHAAL - Portfolio</h1>
            <nav>
                <HashLink 
                    smooth to="/Projet-8/#ancre-realisations"
                    className="menu"
                >
                    Réalisations
                </HashLink>
                <HashLink 
                    smooth to="/Projet-8/#ancre-competences" 
                    className="menu"
                >
                    Compétences
                </HashLink>
                <HashLink 
                    smooth to="/Projet-8/#ancre-a-propos" 
                    className="menu"
                >
                    A propos
                </HashLink>
                <HashLink 
                    smooth to="/Projet-8/#ancre-contact" 
                    className="menu"
                >
                    Contact
                </HashLink>
            </nav>
        </header>
    )
}
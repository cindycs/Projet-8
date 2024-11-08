import './header.css';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/**
 * Le composant `Header` représente l'en-tête principal de l'application, incluant le nom du portfolio
 * et une navigation avec des liens pour accéder aux différentes sections de la page (Réalisations, Compétences, A propos, Contact).
 * Il inclut également un menu mobile qui peut être ouvert et fermé en cliquant sur une icône.
 *
 * @returns {JSX.Element} Un élément JSX représentant l'en-tête avec navigation, adapté pour bureau et mobile.
 */

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <header>
            <h1>Cindy SCHAAL - Portfolio</h1>
            <nav>
                <div className='nav'>
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
                </div>
                <div className="nav-mobile" onClick={toggleMenu}>
                    <span className='trigger'><FontAwesomeIcon icon={faBars} /></span>
                    <div className={`nav-list-mobile ${isOpen ? "is-open" : ""}`}>
                        <HashLink 
                            smooth to="/Projet-8/#ancre-realisations"
                            className="menu-mobile"
                        >
                            Réalisations
                        </HashLink>
                        <HashLink 
                            smooth to="/Projet-8/#ancre-competences" 
                            className="menu-mobile"
                        >
                            Compétences
                        </HashLink>
                        <HashLink 
                            smooth to="/Projet-8/#ancre-a-propos" 
                            className="menu-mobile"
                        >
                            A propos
                        </HashLink>
                        <HashLink 
                            smooth to="/Projet-8/#ancre-contact" 
                            className="menu-mobile"
                        >
                            Contact
                        </HashLink>
                    </div>
                </div>
            </nav>
            
        </header>
    )
}
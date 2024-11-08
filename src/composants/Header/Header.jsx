import './header.css';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
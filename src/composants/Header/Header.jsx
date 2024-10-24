import { NavLink } from 'react-router-dom'; //Extension de Link
import './header.css';

export default function Header() {
    return (
        <header>
            <h1>Cindy SCHAAL - Portfolio</h1>
            <nav>
                <NavLink 
                    to="#ancre-realisations" 
                    className="menu"
                >
                    Réalisations
                </NavLink>
                <NavLink 
                    to="#ancre-a-propos" 
                    className="menu"
                >
                    A propos
                </NavLink>
                <NavLink 
                    to="#ancre-contact" 
                    className="menu"
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}
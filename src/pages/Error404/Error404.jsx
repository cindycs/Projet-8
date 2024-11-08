import { NavLink } from 'react-router-dom';
import './error404.css';


export default function Error() {

    return (
        <div className="error-404">
            <h2>Erreur 404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p><NavLink 
                    to="/Projet-8" 
                    end //s'assure que la classe active est appliqué uniquement lorsque la correspond exactement a /
                > 
                    Retourner sur la page d'accueil
                </NavLink>
            </p>
        </div>
    )
}

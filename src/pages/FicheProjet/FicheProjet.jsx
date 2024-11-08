import realisationsList from "../../data/realisations.json";
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import './ficheProjet.css';
import image from "../../assets/realisations/kasa.jpg";
export default function FicheProjet() {

    const { id } = useParams(); 
    const real = realisationsList.find(real => real.id === id);

    return (
        <div className="background-fiche">
            <div className="wrapper">
            <HashLink 
                    smooth to="/Projet-8/#ancre-realisations">
                <button className="btn-nav">Retour</button>
            </HashLink>
                <section className="projet">
                    <div className="img-projet">
                        <img 
                            src={real.imagePath} 
                            alt={real.title} 
                        />
                    </div>
                    <div className="desc-projet">
                        <h3>{real.title}</h3>
                        <h4>Description :</h4>
                        <p>{real.desc}</p>
                        <h4>Difficultées rencontrées :</h4>
                        <p>{real.difficulte}</p>
                        <ul className="list-badge">
                            {real.badges.map((badge, index) => 
                                <li className="badge" key={index}>
                                    {badge}
                                </li>
                            )}
                        </ul>
                        <Link to={real.link}> <button className="btn-nav">Lien vers le projet</button></Link>
                    </div> 
                </section>
            </div>
        </div>
    )
}

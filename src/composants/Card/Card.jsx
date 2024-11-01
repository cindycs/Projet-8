import './card.css';
import { Link } from "react-router-dom";
import lateliermiewl from "../../assets/realisations/latelier_miewl.jpg";
import giteLeopoldine from "../../assets/realisations/gite_leopoldine.jpg";
import realisationsList from "../../data/realisations.json";




export default function Card() {
    return (
        <section className="realisations" id="ancre-realisations">
            <div className="list-card">
                {realisationsList.map((realisation) => (
                    <div className="card-real" key={ realisation.id }>
                        <Link to={`/Projet-8/fiche-projet/${realisation.id}`}>
                            <img 
                                src={realisation.imagePath} 
                                alt="aperçu du site de l'atelier Miewl" 
                                className='img-real' 
                            />
                            <p>{realisation.title}</p>
                        </Link>
                    </div>
                ))}
                
            </div>
        </section>
    )
}
import realisationsList from "../../data/realisations.json";
import { useParams } from "react-router-dom";
import './ficheProjet.css';
import image from "../../assets/realisations/kasa.jpg";
export default function FicheProjet() {

    const { id } = useParams(); 
    const real = realisationsList.find(real => real.id === id);

    return (
        <div className="background-fiche">
            <div className="wrapper">
                <button className="btn-return">Retour</button>
                <section className="projet">
                    <div className="img-projet">
                        <img 
                            src={image} 
                            alt="" 
                        />
                    </div>
                    <div className="desc-projet">
                        <h3>{real.title}</h3>
                        <h4>Description :</h4>
                        <p>{real.desc}</p>
                        <h4>Difficultés rencontrées :</h4>
                        <p>{real.difficulte}</p>
                    </div> 
                </section>
            </div>
        </div>
    )
}

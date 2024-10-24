import './banner.css';
import fond from '../../assets/banner/fond.png';
import nuage from '../../assets/banner/nuage.png';


export default function Banner() {
    return (
        <section className="banniere">
             <img src={fond} alt="Description de l'image" />
             <img src={nuage} alt="Description de l'image" id="cloud"/>
        </section>
    )
}
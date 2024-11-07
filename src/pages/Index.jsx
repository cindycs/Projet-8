import photo from "../assets/photo.png";
import Banner from "../composants/Banner/Banner";
import Card from "../composants/Card/Card";
import Contact from "../composants/Contact/Contact";
import Skill from "../composants/Skill/Skill";
import "./index.css";

export default function Index() {
    return (
        <>
            <Banner />
            <section className="realisations" id="ancre-realisations">
                <h2>mes réalisations</h2>
                <Card />
            </section>
            <section className="competences" id="ancre-competences">
                <div className="wrapper">
                    <h2>mes compétences</h2>
                    <Skill />
                </div>
            </section>
            <section className="a-propos" id="ancre-a-propos">
                    <div className="wrapper">
                        <h2>à propos</h2>
                        <div className="presentation">
                            <div className="photo">
                                <img src={photo} alt="photo de Cindy" />
                            </div>
                            <div className="description">
                                <p>Bienvenue dans mon jardin où j’expose toutes mes réalisations qui ont poussé au fil du temps. Le fil qui m’animait autrefois dans mon métier de couturière est aujourd’hui une toile numérique où je tisse des sites web.</p>
                                <p>Après mes études dans le web, je me suis tourné vers la couture, une passion que j’ai explorée pendant plusieurs années. Cette expérience m’a enrichie sur le plan créatif et artisanal. Plus récemment, j’ai décidé de revenir au web et ai suivi une formation avec OpenClassrooms pour actualiser mes compétences. Aujourd'hui, je suis prête à apporter une perspective originale et polyvalente à mes projets dans le web. </p>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="contact" id="ancre-contact">
                <div className="wrapper">
                    <h2>contact</h2>
                    <Contact />
                </div>
            </section>
        </>
    )
}
import photo from "../assets/photo.png";
import Banner from "../composants/Banner/Banner";
import Card from "../composants/Card/Card";
import Contact from "../composants/Contact/Contact";
import "./index.css";

export default function Index() {
    return (
        <>
            <Banner />
            <section className="realisations" id="ancre-realisations">
                <h2>mes réalisations</h2>
                <Card />
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
                                <p>Praesent malesuada sed nisi ut placerat. Nam sollicitudin elit eu augue varius auctor. Phasellus luctus, elit ut fringilla interdum, ipsum nisi auctor nibh, molestie dapibus massa felis vel nulla.</p>
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
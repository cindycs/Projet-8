import './banner.css';
import fond from '../../assets/banner/fond.png';
import nuage from '../../assets/banner/nuage.png';
import soleil from '../../assets/banner/soleil.png'
import { ParallaxProvider, Parallax } from "react-scroll-parallax";


export default function Banner() {
    /*
    <section className="banniere">
                <img src={fond} alt="Description de l'image" />
                <img src={nuage} alt="Description de l'image" id="cloud"/>
            </section> 
    */
    return (
        <ParallaxProvider className="bg-parallax">
             <section className="banniere">
             <img className="bg-banner" src={fond} alt="Description de l'image" />

             <Parallax
                translateY={[-90, 100]} 
                className="sun-parallax"
            >
             <img src={soleil} alt="Description de l'image" id="soleil"/>
            </Parallax>
             <Parallax
                translateX={[10, -10]} 
                className="cloud-parallax"
            >
                <img src={nuage} alt="Description de l'image" id="cloud"/>
                </Parallax>
            </section> 
            
        </ParallaxProvider>
    )
}
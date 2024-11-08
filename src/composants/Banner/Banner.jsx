import './banner.css';
import fond from '../../assets/banner/fond.png';
import nuage from '../../assets/banner/nuage.png';
import brume from '../../assets/banner/brume.png';
import soleil from '../../assets/banner/soleil.png'
import { ParallaxProvider, Parallax } from "react-scroll-parallax";


/**
 * Le composant `Banner` représente une bannière avec des effets de parallaxe appliqués à plusieurs éléments visuels,
 * comme un fond, et des nuages.
 *
 * @returns {JSX.Element} Un élément JSX représentant la bannière avec des effets de parallaxe.
 */
export default function Banner() {

    return (
        <ParallaxProvider className="bg-parallax">
             <section className="banniere">
                <img src={soleil} alt="Description de l'image" id="soleil"/>
                <img className="bg-banner" src={fond} alt="Description de l'image" />      
                <Parallax
                    translateX={[10, -20]} 
                    className="cloud-parallax"
                >
                    <img src={nuage} alt="Description de l'image" id="cloud"/>
                </Parallax>
                <Parallax
                    translateX={[5, -10]} 
                    className="brume-parallax"
                >
                    <img src={brume} alt="Description de l'image" id="brume"/>
                </Parallax>
            </section> 
            
        </ParallaxProvider>
    )
}
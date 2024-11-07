import './banner.css';
import fond from '../../assets/banner/fond.png';
import nuage from '../../assets/banner/nuage.png';
import brume from '../../assets/banner/brume.png';
import soleil from '../../assets/banner/soleil.png'
import { ParallaxProvider, Parallax } from "react-scroll-parallax";


export default function Banner() {

    return (
        <ParallaxProvider className="bg-parallax">
             <section className="banniere">
                <Parallax
                    translateY={[0, 0]} 
                    className="sun-parallax"
                >
                    <img src={soleil} alt="Description de l'image" id="soleil"/>
                </Parallax>
                <img className="bg-banner" src={fond} alt="Description de l'image" />      
                <Parallax
                    translateX={[20, -20]} 
                    className="cloud-parallax"
                >
                    <img src={nuage} alt="Description de l'image" id="cloud"/>
                </Parallax>
                <Parallax
                    translateX={[15, -5]} 
                    className="brume-parallax"
                >
                    <img src={brume} alt="Description de l'image" id="brume"/>
                </Parallax>
            </section> 
            
        </ParallaxProvider>
    )
}
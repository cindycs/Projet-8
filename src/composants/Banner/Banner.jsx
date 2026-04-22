import './banner.css';
import { FaChevronDown } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';


/**
 * Le composant `Banner` représente une bannière avec des effets de parallaxe appliqués à plusieurs éléments visuels,
 * comme un fond, et des nuages.
 *
 * @returns {JSX.Element} Un élément JSX représentant la bannière avec des effets de parallaxe.
 */
export default function Banner() {

    return (

        <section className='banner'>
             <div className='window'>
                    <div className='window-top'>
                    <div className='dots'>
                        <span className='dot red'></span>
                        <span className='dot orange'></span>
                        <span className='dot blue'></span>
                    </div>
                    <p className='window-title'> &gt;_  Developer.java</p>
                    </div>
                    <div className='window-content'>
                        <p className='code'><span className='red-code'>String</span> <span className='blue-code'> greeting = </span><span className='green-code'>"Bonjour"</span><span className='blue-code'>;</span></p>
                        <p className='code'><span className='red-code'>public class </span><span className='blue-code'>Developer &#123;</span> <br />
                            <span className='big-line'><span className='red-code'>String </span><span className='white-code'>role = </span> <span className='blue-code'>"Développeur Full Stack"</span></span>< br/>
                            <span className='blue-code'>&#125;</span>
                        </p>
                        <p className='comment white-code'> // Je transforme vos idées en applications modernes.</p>
                        <HashLink
                        smooth to="/Projet-8/#ancre-realisations"
                        className="project-btn"
                            >
                        viewProjects()
                        </HashLink>
                    </div>
             </div>
             <div className='scroll-arrow'><FaChevronDown /></div>
        </section> 
            

    )
}
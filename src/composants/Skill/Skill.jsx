import './skill.css';
import { Link } from "react-router-dom";
import frontEnd from "../../assets/competences/competences_front.png";
import backEnd from "../../assets/competences/competences_back.png";
import framework from "../../assets/competences/competences_framework.png";

/**
 * Le composant `Skill` affiche une liste de compétences techniques organisées en catégories (front-end, back-end, framework),
 * ainsi qu'un lien vers une mind-map externe pour explorer les compétences en détail..
 *
 * @returns {JSX.Element} Un élément JSX représentant les compétences techniques et un lien vers la mind-map.
 */

export default function Skill() {
    return (
        <>
        <section className='list-skills'>
            <div className='skills fade-in-up'>
                <h3>front-end</h3>
                <img src={frontEnd} alt="compétences front-end"/>
            </div>
            <div className='skills fade-in-up'>
                <h3>back-end</h3>
                <img src={backEnd} alt="compétences back-end"/>
            </div>
            <div className='skills fade-in-up'>
                <h3>framework</h3>
                <img src={framework} alt="compétences framework"/>
            </div>
        </section>
        <div className='mind-map'>
            <Link className="link-skills" to="https://miro.com/app/board/uXjVLNzjaPk=/" target="_blank">mind-map</Link>
        </div>
        </>
    )
}
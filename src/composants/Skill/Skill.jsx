import './skill.css';
import { Link } from "react-router-dom";
import frontEnd from "../../assets/competences/competences_front.png";
import backEnd from "../../assets/competences/competences_back.png";
import framework from "../../assets/competences/competences_framework.png";
import { SiReact, SiNodedotjs, SiPostgresql, SiHtml5, SiJavascript, SiCss, SiExpress, SiSpringboot, SiMysql, SiMongodb, SiGit, SiGithub, SiDocker, SiFigma, SiWordpress  } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiPostgresql, DiPhotoshop, DiIllustrator  } from "react-icons/di";


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
                <div className="icon">
                    <div className="icon-box">
                        <SiHtml5 className="icon-logo"/>
                        <h4>HTML</h4>
                    </div>
                    <div className="icon-box">
                        <SiCss  className="icon-logo" />
                        <h4>CSS</h4>
                    </div>
                    <div className="icon-box">
                        <SiJavascript  className="icon-logo" />
                        <h4>Javascript</h4>
                    </div>
                    <div className="icon-box">
                        <SiReact  className="icon-logo" />
                        <h4>React</h4>
                    </div>
                </div>
            </div>
            <div className='skills fade-in-up'>
                <h3>back-end</h3>
                <div className="icon">
                    <div className="icon-box">
                        <SiNodedotjs className="icon-logo"/>
                        <h4>Node.js</h4>
                    </div>
                    <div className="icon-box">
                        <SiExpress className="icon-logo" />
                        <h4>Express</h4>
                    </div>
                    <div className="icon-box">
                        <FaJava className="icon-logo" />
                        <h4>Java</h4>
                    </div>
                    <div className="icon-box">
                        <SiSpringboot className="icon-logo" />
                        <h4>SpringBoot</h4>
                    </div>
                </div>
            </div>
            <div className='skills fade-in-up'>
                <h3>base de données</h3>
                <div className="icon">
                    <div className="icon-box">
                        <DiPostgresql  className="icon-logo"/>
                        <h4>PostgreSQL</h4>
                    </div>
                    <div className="icon-box">
                        <SiMysql   className="icon-logo" />
                        <h4>MySQL</h4>
                    </div>
                    <div className="icon-box">
                        <SiMongodb   className="icon-logo" />
                        <h4>MongoDB</h4>
                    </div>
                </div>
            </div>
            <div className='skills fade-in-up'>
                <h3>devops et outils</h3>
                <div className="icon">
                    <div className="icon-box">
                        <SiGit className="icon-logo"/>
                        <h4>Git</h4>
                    </div>
                    <div className="icon-box">
                        <SiGithub className="icon-logo" />
                        <h4>GitHub</h4>
                    </div>
                    <div className="icon-box">
                        <SiDocker className="icon-logo" />
                        <h4>Docker</h4>
                    </div>
                </div>
            </div>
             <div className='skills fade-in-up'>
                <h3>design</h3>
                <div className="icon">
                    <div className="icon-box">
                        <SiFigma className="icon-logo" />
                        <h4>Figma</h4>
                    </div>
                    <div className="icon-box">
                        <DiPhotoshop className="icon-logo"/>
                        <h4>Photoshop</h4>
                    </div>
                    <div className="icon-box">
                        <DiIllustrator className="icon-logo" />
                        <h4>Illustrator</h4>
                    </div>
                </div>
            </div>
            <div className='skills fade-in-up'>
                <h3>framework</h3>
                <div className="icon">
                    <div className="icon-box">
                        <SiWordpress className="icon-logo" />
                        <h4>Wordpress</h4>
                    </div>
                </div>
            </div>
        </section>
        <div className='mind-map'>
            <Link className="link-skills" to="https://miro.com/app/board/uXjVLNzjaPk=/" target="_blank">mind-map</Link>
        </div>
        </>
    )
}
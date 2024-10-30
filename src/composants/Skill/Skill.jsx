import './skill.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section>
            <p>Mes compétences:</p>
            <Link to="https://miro.com/app/board/uXjVLNzjaPk=/" target="_blank">Lien vers mes compétences</Link>
        </section>
    )
}
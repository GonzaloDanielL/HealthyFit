import { FaArrowRightLong } from "react-icons/fa6";

export function BlogItem(props) {
    return (
        <div>
            <img src={props.image} alt="" />
            <div>
                <a href="https://www.behance.net/ChaloLD?isa0=1" target="_blank" className="titulo-2">{props.title}</a>
                <p className="parrafo-2">{props.description}</p>
                <span>{props.date}</span>
                <a href="https://www.behance.net/ChaloLD?isa0=1" target="_blank">Seguir leyendo <FaArrowRightLong /></a>
            </div>
        </div>
    )
}
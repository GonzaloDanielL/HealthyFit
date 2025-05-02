import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export function ServiciosEspecialistas(props) {
    return (
        <div className="s3-sub-2-card">
            <img src={props.image} alt={props.name} />
            <div className="s3-sub-2-card-cuerpo">
                <h4 className="titulo-2">{props.name}</h4>
                <span className="titulo-3">{props.especialidad}</span>
                <p className="parrafo-2">
                    {props.descripcion}
                </p>
                <div>
                    <a href="https://web.facebook.com/" target="_blank"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/" target="_blank"><FaSquareInstagram /></a>
                    <a href="https://www.tiktok.com/en" target="_blank"><AiFillTikTok /></a>
                </div>
            </div>
        </div>
    )
}
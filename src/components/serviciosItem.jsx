export function ServiciosItem(props) {
    return (
        <div className="s1-sub">
            <div>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p className="parrafo-1">
                    {props.description}
                </p>
                <h4>
                    <span>A cargo de</span><br />
                    {props.author}
                </h4>
            </div>
            <img
                src={props.image}
                alt={props.title}
            />
        </div>
    )
}
import { useLocation } from "react-router-dom";
import "./data.css"

export function Data ():JSX.Element{

    const location = useLocation();
    const state = location.state;
    return (
        <div className="DataList">
            <img src={state.image}></img>
            <h1>{state.title}</h1>
            <h2>{state.rank}</h2>
            <h3>{state.genre}</h3>
            <p>{state.synopsis}</p>
        </div>
    )
}

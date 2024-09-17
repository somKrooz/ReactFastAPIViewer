import { data } from "../types/data"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Cards(props:data):JSX.Element{
    const navigate = useNavigate(); 

    const handleClick = (title:string) => {

        axios.get(`/api/anime?title=${title}`)
            .then((response) => {
               navigate("/animeData",{state:response.data});
            })
    }
    return(
        <div key ={props.key} className="cards">
            <img onClick={()=>handleClick(props.title)} src={props.img} alt={props.title}/>
            <h4>{props.title}</h4>
        </div>
    )
}
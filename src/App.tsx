import axios from "axios"
import { useState , useEffect} from "react";
import { Cards } from "./components/cards";
import "./App.css"

function App():JSX.Element{
    const [imgs ,setimgs] = useState<string[]>([]);
    const [title ,settitle] = useState<string[]>([]);
    let [lock,setlock] = useState<number>(1)

    const retriveData = (lock:number)=>{

        axios.get(`/api/list?lock=${lock*20}`).then((res)=>{

            const data = res.data;
            let imageUrls:string[] = []
            let titles:string[] = []

            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const item = data[key];
                    if (item && item.image && item.title) {
                       imageUrls.push(item.image)
                       titles.push(item.title) 
                    }
                }
            }

            setimgs(imageUrls)
            settitle(titles)
        });
    }

    const fetchMoreData = ()=>{
        setlock(lock+=1);
        console.log(lock);
    }

    useEffect(() => {
        retriveData(lock)
    },[lock])


    return (
        <div className="root">
            <div className="Main">
                {imgs.map((imageUrl, index) => (
                    <Cards key={index} img={imageUrl} title={title[index]}></Cards>
                ))}
            </div>
            <div className="btn">
            <button className="button" onClick={fetchMoreData}></button>
            </div>
        </div>

    )
}

export default App
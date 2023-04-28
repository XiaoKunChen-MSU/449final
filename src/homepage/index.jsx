import { useState } from "react";
import Animeitem from "../anime-item";
import Search from "../components/search";
import "./style.css"




const Homepage = () => {
    const [loadingstate, setloadingstate] = useState(false);

    const [animes,setanimes] = useState([]);

    const getdatafromsearchcomponent = (searchdata) => {
        setloadingstate(true);
    

        async function getanimes(){
            const apiresponse = await fetch(
                `https://api.jikan.moe/v4/anime?q=${searchdata}`
            );
            const result = await apiresponse.json();
            const {data} = result;
            if (data &&data.length > 0){
                setloadingstate(false)
                setanimes(data)
            }
            console.log(result)
        }
        getanimes();
    };

    console.log(loadingstate,animes);

    return (
        <div className="homepage">  
            <div className="web-top">
                 <h1>Anime Search Engine</h1>
            </div>
            <Search getdatafromsearchcomponent={getdatafromsearchcomponent} />
            {
                loadingstate && (
                    <div>Loading.... please wait</div>
                )
            }
            
            {
                animes && animes.length >0?
                animes.map((item)=>
                <Animeitem
                id = {item.mal_id}
                image = {item.images.jpg.image_url}
                title = {item.title}
                airingstatus = {item.status}
                rank = {item.rank}
                rating = {item.rating}
                url = {item.url}
                tit2 ={item.title_japanese}
                />):null
            }
            
        </div>
    )
}

export default Homepage
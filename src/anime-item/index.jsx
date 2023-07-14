
import "./style.css"

const Animeitem = (props) => {
    const{image,title,episodes, url} = props
    console.log(props,'anime-item-props');
    return (
        <div className= "anime">
            <a href= {url}>
                <img className="image" src={image} alt={title} />
            </a>
            <ul className="description">
                <li><a href= {url}>{title}</a></li>
                {/* <li>{tit2}</li> */}
                {/* <li>rank:{rank}</li>
                <li>rating: {rating}</li> */}
                {/* <li>status: {airingstatus}</li> */}
                <li>latest episodes: {episodes}</li>
                {/* {<li>url: <a href = {url}>myanimelist/{title}</a></li> } */}
                
            </ul>
            

        </div>
    )
}

export default Animeitem

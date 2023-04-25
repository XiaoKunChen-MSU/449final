
import "./style.css"

const Animeitem = (props) => {
    const{id,image,title,airingstatus,rank,rating,url} = props
    return (
        <div>
            <img className="image" src={image} alt={title} />
            <ul className="description">
                <li>{title}</li>
                <li>rank:{rank}</li>
                <li>rating: {rating}</li>
                <li>status: {airingstatus}</li>
                <li>url: {url}</li>
            </ul>
            

        </div>
    )
}

export default Animeitem
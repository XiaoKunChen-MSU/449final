import "./style.css";
import React,{ useState } from "react";


const Search = (props) => {

    const {getdatafromsearchcomponent} = props

    const [inputvalue, setinputvalue] = useState('')

    const handleinputvalue = (e) => {
        const {value} = e.target;
        setinputvalue(value)
    }

    const handlesubmit = (e) =>{
        e.preventDefault()
        getdatafromsearchcomponent(inputvalue)
    }

    return (
        <div className="search">
            <form className="search" onSubmit = {handlesubmit}>
                <input className="inputbox" onChange={handleinputvalue} value={inputvalue} placeholder="Enter anime name. e.g. Naruto" />
                <button className="searchbtn">search</button>  
            </form>
        </div>
    )
}

export default Search
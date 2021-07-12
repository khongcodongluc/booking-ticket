import React, { useState } from 'react'
import './FilmList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function FilmList() {
    const filmList = useSelector(state => state.film)
    const dispatch= useDispatch()

    const [input, setInput] = useState(0);
    
    const arrayInput= ['first', 'second', 'third'];
    const onClickRight = () => {
        if(input != 2)
            setInput(input + 1);
    }
    const onClickLeft = () => {
        if(input != 0)
            setInput(input - 1);
    }

    // const [list, setList] = useState([]);

    // //gọi Api để set cái phim list chạy phía dưới
    // useEffect(() =>{
    //     setList(props.list);
    // },[]);

    return (
        <div className="mainContainer3">
            <div className="flex">
            {   
                filmList.map((item) => (
                    <div key={item.movie_id} className={item.movie_id===1 ? "divname "+ arrayInput[input] : "divname"}
                        // onClick={() => props.click(item.movie_id)}
                        >
                        <Link to="/seat" className="name">
                            <img  src={"img/"+ item.movie_imgSource} 
                                className="poster"/>
                            <p style={{marginTop: '5px'}}>{item.movie_name}</p>
                        </Link>
                    </div>))
            }
            </div>
            <div className="test" onClick={() =>onClickRight()}>
                <FontAwesomeIcon icon={faAngleRight} />  
            </div>
            <div className="test left" onClick={() =>onClickLeft()}>
                <FontAwesomeIcon icon={faAngleLeft} />  
            </div>
        </div>
    )
}

export default FilmList

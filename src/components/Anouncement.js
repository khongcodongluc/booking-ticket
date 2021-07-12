import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Anouncement.css'

function Anouncement(props) {
    const anouncementList = useSelector(state => state.anouncement)
    console.log(anouncementList)
    const dispatch = useDispatch()

    const [input, setInput] = useState('first')

    const auto = () =>{
        setInput(pre => {
            if (pre === 'first')
                return 'second';
            if (pre === 'second')
                return 'third';
            if (pre === 'third')
                return 'first';
        });
    }

    const onClick =(value) => {
        setInput(value);
    }
    useEffect(() => {
        setInterval(auto, 5000);
    },[]);

    return (
        <div className="mainContainer1">
            <div className="img">
                {
                    anouncementList.map((item) => (<img key={item.id} src={"./img/" + item.url } className={item.id === 1 ? "imgPoster " + input : "imgPoster"} />))
                }
            </div>

            <div className="labelInput">
                <label className="labelRadio" onClick={() => onClick('first')} />
                <label className="labelRadio" onClick={() => onClick('second')} />
                <label className="labelRadio" onClick={() => onClick('third')} />
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Anouncement

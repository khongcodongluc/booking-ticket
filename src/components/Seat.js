import React, { useEffect, useState } from 'react'
import './Seat.css'

//Phan dat ve
function Seat(props) {
    const {list, seat}= props;
    
    // Chinh sua className cua tunng box //chua dat co mau trang // dang chon co mau vang
    const onClick = (i, j) => {
        if(itemClassName[i][j].indexOf("chuadat") !== -1){
            setItemClassName((pre) =>{
                let exp=[...pre];
                exp[i][j]=exp[i][j].replace("chuadat", "dangchon");
                return exp;
            });
            return;         
        }
        if(itemClassName[i][j].indexOf("dangchon") !== -1){
            setItemClassName((pre) =>{
                let exp=[...pre];
                exp[i][j]=exp[i][j].replace("dangchon", "chuadat");
                return exp;
            });     
        }
    }

    
    //info
    var info= [];
    for(let i=0; i<6; i++){
        info.push(<div className="seat-abc">{String.fromCharCode(65 + i)}</div>);
    }
    // console.log(info)

    //item
    const [itemClassName, setItemClassName]= useState([[],[],[],[],[],[]]);

    useEffect(() =>{
        let exp=[[],[],[],[],[],[]];
        for(let i=0; i<6; i++){
            for(let j=0; j<6; j++){
                if( j===5){
                    exp[i][j]="seat-chair last-child chuadat " + String.fromCharCode(65 + i)+(j+1);
                    // console.log(String.fromCharCode(65 + i)+(j+1))
                }
                else {
                    exp[i][j]="seat-chair chuadat " + String.fromCharCode(65 + i)+(j+1);

                }
            }
        }
        setItemClassName((pre) =>{
            return exp;
        });
        // console.log(itemClassName)
    }, []);

    const eticket = [];
    const item = () => {
        let x = [];
        if (!itemClassName[0][0]) return x;
        for(let i=0; i<6; i++){
            for(let j=0; j<6; j++){
                x.push(<div 
                            className={itemClassName[i][j]} onClick={()=>onClick(i, j)}>
                    {itemClassName[i][j].indexOf("dangchon") != -1 ? itemClassName[i][j].slice(-2):""}
                    </div>);
                if(itemClassName[i][j].indexOf("dangchon") != -1) 
                    eticket.push(`${itemClassName[i][j].slice(-2)}`);
            }
            x.push(<br/>);
        }

        return x;
    }
    // console.log(eticket)
    // console.log(Intl.NumberFormat('en').format(eticket.length *45000))

    //Day
    const today= new Date;
    const date= today.getDate();
    const month= today.getMonth() +1;
    const year= today.getFullYear();
    const thisDay=`${year}` +'/' + `${month}` +'/' + `${date}`;
    const thatDay=`${year}` +'/' + `${month}` +'/' + `${date + 1}`;

    const [day,setDay]= useState("");

    const time = [];

    const [set, setSeat] = useState([]);
    // useEffect(() =>{
    //     axios.get("http://localhost:3001/api/getmovieTime",{movie_id: seat}).then(res =>{
    //         time=res.data;
    //         console.log(time);
    //     })
    // });

    return (
        <div className="seat-container">
            <div className="seat-note">
                <label className="seat-seat-note chuadat">Ghế trống</label>
                <label className="seat-seat-note dadat">Ghế đã đặt</label>
                <label className="seat-seat-note dangchon" style={{animation: 'none'}}>Ghế đang chọn</label>
            </div>
            <div className="seat-seat">
                <p className="seat-screen">SCREEN</p>
                <div className="seat-chair1">
                    {
                        item()
                    }
                </div>
                <div className="seat-chair1-info">{info}</div>
                <div className="seat-chair1-info n2">{info}</div>
            </div>

            <div className="seat-info">
                <label className="seat-seat-note chuadat">THÔNG TIN VÉ</label><br/>
                <div className="seat-infoTicket">
                    {/* <img src={"/img/" + list[seat - 1].movie_imgSource} alt=""/>  */}
                    <div>
                    {/* <p style={{marginTop: '10px',fontSize: '30px', fontWeight: '700'}}>{list[seat - 1].movie_name}</p>
                    <p>{list[seat - 1].movie_duration +" phút"}</p>
                    <p>{"Ra mắt: " + list[seat - 1].movie_release.slice(0, 10)}</p> */}
                    </div>
                    <div style={{clear: 'both'}}></div>
                    <div className="seat-div">
                        <label className="seat-label n"></label>
                        <select name="Ngày" onChange={
                            e => setDay(e.target.value)
                        }>
                            <option value={thisDay}>{thisDay}</option>
                            <option value={thatDay}>{thatDay}</option>
                        </select>
                    </div>
                    <div className="seat-div">
                        <label className="seat-label sc"></label>
                        <select name="Time">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="seat-div">
                        <label className="seat-label v">{eticket.join(", ")}</label>
                    </div>
                    <div className="seat-div">
                        <label className="seat-label t">{Intl.NumberFormat('en').format(eticket.length * 45000)}</label>
                    </div>
                    <input type="submit" value="Xác Nhận" style={{fontSize: 15}}/>
                </div>
            </div>
        </div>
    )
}

export default Seat

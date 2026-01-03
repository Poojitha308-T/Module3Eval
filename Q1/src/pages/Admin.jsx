import { useState } from "react";

import Sidebar from '../components/Sidebar';
function Admin(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("evalData"))|| []);
    },[]);

    const addRes = () =>{
        const newRes = {
            restaurantID:Date.now(),
            restaurantName:"Demo",
            address:"Jaipur",
            type:"Rajasthani",
            parkingLot:true,
            image:""
        };
        const updated = [...data, newRes];
        localStorage.setItem("evalData",JSON.stringify(updated));
        setData(updated);
        alert("Added");
    };
    return(
        <>
        <button onClick={addRes}>ADD RESTAURANT</button>
        {
            data.map((el)=>
            (
                <Sidebar key={el.restaurantID}{...el} setData={setData}/>
            )
        )}
        </>
    )
}
export default Admin;
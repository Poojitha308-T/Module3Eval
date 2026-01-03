import { useState } from "react";

export default function Sidebar(){
    const [form, setForm] = useState({
        restaurantId:"",
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:"true",
        image:""
    })
    const handleSubmit=()=>
    {
        
    }

    return(
        <div>
            <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"/>
            <input value={form.restaurantName} onChange={e=>setForm({...form, restaurantName: e.target.value})}/>
            <input value={form.address} onChange={e=>setForm({...form, address: e.target.value})}/>
            <select value={form.type} onChange={e=>setForm({...form, type:e.target.value })}>
                <option value="">Select</option>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Mughlai</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North Indian</option>
                <option>South Indian</option>
            </select>
            <select value={form.parkingLot} onChange={e=>setForm({...form, parkingLot:e.target.value})}>
                <option>True</option>
                <option>False</option>
            </select>
            <button onClick={handleSubmit}>ADD</button>
            
        </div>
    )
}
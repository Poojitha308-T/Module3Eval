import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const TYPES=[
    "Rajasthani",
    "Gujarati","Mughali","Jain","Thai","North Indian","SouthIndian"
];
export default function Sidebar({
    
        restaurantId,
        restaurantName,
        address,
        type,
        parkingLot,
        image,
        setData
    }){
        const {auth}=useContext(AuthContext);
        const navigate = useNavigate();
        const[selectedType, setSelectedType] = useState(type);

    }
    

    return(
        <div>
            <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg" width={"100px"}/>
            <p>Address</p>
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
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
            {auth.role==="admin"?(<select value={form.type} onChange={e=>setForm({...form, type:e.target.value })}>
                {TYPES.map((t)=>(
                    <option key={{t} value={t}}/>
                ))}
                )}
            
               
            <select value={form.parkingLot} onChange={e=>setForm({...form, parkingLot:e.target.value})}>
                <option>True</option>
                <option>False</option>
            </select>
            <button onClick={handleSubmit}>ADD</button>
            
        </div>
    )
}
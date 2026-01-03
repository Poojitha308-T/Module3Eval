import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("auth"))||
     {isAuthenticated:false, role:""}
    );

    const login = (email, password) =>{
        if(email==="admin@gmail.com" && password === "admin1234"){
            setIsAuthenticated({isAuthenticated:true, role:"admin"});
            localStorage.setItem("auth",JSON.stringify({isAuthenticated:true,role:"admin"}));
            return "./admin/dashboard";
        }
        if(email==="customer@gmail.com" && password === "customer1234"){
            setIsAuthenticated({isAuthenticated:true, role:"customer"});
            localStorage.setItem("auth",JSON.stringify({isAuthenticated:true,role:"customer"}));
            return "./customers/dashboard";
        }
        alert("Wrong credentials")
        
    };
    

    return(
        <AuthContext.Provider value={{isAuthenticated,login}}>
            {children}
        </AuthContext.Provider>
    )

}
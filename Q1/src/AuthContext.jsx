import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth")===true);

    const login = (email, password) =>{
        if(email==="admin@gmail.com" && password === "admin1234"){
            setIsAuthenticated(true);
            localStorage.setItem("auth",true);
            return true;
        }
        return false;
    };
    const login1 = (email,password)=>{
        if(email === "customer@gmail.com" && password==="customer1234"){
            setIsAuthenticated(true);
            localStorage.setItem("auth",true);
            return true;
        }
        return false;

    };

    const logout=()=>{
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
    };

    return(
        <AuthContext.Provider value={{isAuthenticated,login,login1,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
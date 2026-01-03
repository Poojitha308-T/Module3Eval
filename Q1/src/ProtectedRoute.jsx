import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({children,role}){
    const { isAuthenticated } = useContext(AuthContext);

    if(!auth.isAuthenticated) return <Navigate to="/" />
    if(role&&auth.role !== role) return <Navigate to="/" />
    return children;
}
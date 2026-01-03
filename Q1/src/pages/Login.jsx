import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault();
        const path = login(emailRef.current.value, passRef.current.value);
        if (path) navigate(path);
    };

    return (
        <form onSubmit={handleLogin}>
            <input ref={emailRef} placeholder="Enter Email"/>
            <input ref={passRef} type="password" placeholder="Enter password"/>
            <button>Login</button>
        </form>
    )
}
export default Login;
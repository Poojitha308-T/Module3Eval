import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();
    const { login, login1 } = useContext(AuthContext);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const handleLogin=()=>{
        if(login(email,password)){
            alert("Login Success");
            navigate("/admin/dashboard");
        }else{
            alert("Wrong email or password");
        }
    };
    const handleLogin1=()=>{
        if(login1(email,password)){
            alert("Login Success");
            navigate("/customer/dashboard");
        }else{
            alert("Wrong email or password");
        }
    };

    return (
        <div>
            <div>
                <input ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <input ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={handleLogin1}>Login</button>
            </div>
        </div>
    )
}
export default Login;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Customer from "./pages/Customer";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<Admin/>}/>
        <Route path="/customers/dashboard" element={<Customer/>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )

}
export default App;
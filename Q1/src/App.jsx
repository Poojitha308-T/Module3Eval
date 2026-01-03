import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Customer from "./pages/Customer";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from './ProtectedRoute';

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute role="admin">
            <Admin/>
          </ProtectedRoute>
        }/>
        <Route path="/customers/dashboard" element={<ProtectedRoute role="customer">
            <Customer/>
          </ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )

}
export default App;
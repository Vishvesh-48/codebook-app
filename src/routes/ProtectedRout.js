import { Navigate } from "react-router-dom"


export const ProtectedRout = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("Token"))
  return token ? children : <Navigate to="/Login" />
}

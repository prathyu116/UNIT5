import { useSelector } from "react-redux";
import {useNavigate, Navigate} from 'react-router-dom'

export const PrivateComponent = ({ children }) => {
  const { token } = useSelector((state) => state.AuthState);
  console.log(token);
  const navigate = useNavigate();
  if (token.length === 0 || !token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
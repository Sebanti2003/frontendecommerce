import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hook";
const PrivateRoute = () => {
  const auth = useAppSelector((state) => state.authenticatedornot.role);
  return auth === "admin" ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;

import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;

import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const user = useSelector((state) => state.user);
  const { isAuthenticated } = user.isLoggedIn;

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

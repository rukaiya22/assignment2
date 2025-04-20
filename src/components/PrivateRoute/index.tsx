import { Navigate, Outlet, useLocation  } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext'; 

const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? <Outlet /> : <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
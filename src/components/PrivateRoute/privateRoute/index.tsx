import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';

export const PrivateRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/signin" />;
};
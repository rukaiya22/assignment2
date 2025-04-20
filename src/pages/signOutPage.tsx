import { useEffect } from 'react';
import { useAuth } from '../contexts/authContext'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

export default function SignOutPage() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    signout();                 // Clear auth context & localStorage
    navigate('/signin');       // Redirect to sign-in page
  }, [signout, navigate]);

  return null; // No UI needed — it just logs the user out
}

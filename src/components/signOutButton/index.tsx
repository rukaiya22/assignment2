import { Button, Snackbar } from '@mui/material';
import { useAuth } from '../../contexts/authContext'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignOutButton() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSignOut = () => {
    signout();                // Clear auth data
    setOpenSnackbar(true);    // Show snackbar
    setTimeout(() => {
      navigate('/signin');    // Redirect after a short delay
    }, 1500); // 1.5 seconds
  };

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleSignOut}>
        Sign Out
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Signed out successfully"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

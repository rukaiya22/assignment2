import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useLocation to retrieve the state

export default function ConfirmPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Destructure the passed state (username and code)
  // const { username, code } = location.state || {}; // Get the username and code from the location state

  const handleConfirm = async () => {
    if (!code || code !== code) {
      setError('Invalid activation code');
      return;
    }

    const url = '/auth/confirm_signup';

    setLoading(true);
    setError(''); // Clear previous errors

    // Send the activation code and username to the backend for verification
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, code }), // Send username and activation code
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Account successfully activated:', data);
        // Redirect to the sign-in page upon success
        navigate('/auth/signin');
      } else {
        console.error('Error confirming account:', data);
        setError(data.error || 'Confirmation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during confirmation:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Confirm Your Account
      </Typography>
      <Typography variant="body1" paragraph>
        Please enter the activation code sent to your email to confirm your account.
      </Typography>

      <TextField label="User name" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)} />

      {/* Activation Code Input */}
      <TextField
        label="Activation Code"
        fullWidth
        margin="normal"
        value={code}
        onChange={(e) => setCode(e.target.value)} // Update the activationCode state
      />

      {error && <Typography color="error">{error}</Typography>}

      {/* Confirmation Button */}
      <Button variant="contained" onClick={handleConfirm} disabled={loading}>
        {loading ? 'Verifying...' : 'Confirm Account'}
      </Button>
    </Container>
  );
}

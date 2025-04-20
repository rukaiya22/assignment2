import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async () => {
    const res = await fetch('/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
      signin(data); // Set auth context
      // navigate('/dashboard');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Sign In</Typography>
      <TextField label="User name" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleSignin}>Sign In</Button>
      {/* Link to Signup page */}
      <p>
        Don't have an account?{' '}
        <Link to="/signup">Sign Up</Link>
      </p>
    </Container>
  );
}
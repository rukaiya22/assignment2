import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await fetch('/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      console.log('Signup successful:', data);
      // Assuming the activation code is received in the response
      const activationCode = data.activationCode; // Retrieve the activation code from the server's response

      // Redirect to the confirmation page, passing username and code as state
      navigate('/auth/confirm', { state: { username, code: activationCode } });
    } else {
      console.error('Error signing up:', data);
      // Optionally display error messages to the user
      alert(data.error || 'Signup failed');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Signup</Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update the username state
      />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
    </Container>
  );
}
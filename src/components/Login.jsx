import { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { login } from '../services/authService';
import './Login.css'; 

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const { loginSuccess } = useAuthStore();

  const handleLogin = async () => {
    try {
      const response = await login(usernameInput, password);
      console.log('Response:', response); 

      if (response && response.access_token) {
        const { access_token, username: loggedInUsername, name } = response;
        loginSuccess(loggedInUsername, access_token, name);
      } else {
        console.error('Invalid response:', response);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-card"> 
      <input
        type="text"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

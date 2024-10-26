import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null | undefined>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(email, password);

    if (!result.success) {
      setError(result.error);
    } else {
      setError(null);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePasswordVisibility} aria-label="Mostrar contraseña">
              👁
            </button>
          </div>
          <button type="submit">Iniciar sesión</button>
          {error && <p>{error}</p>}
        </form>
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
      <div>
        <img
          src="../../../public/money-icome.svg"
          alt="Ilustración de finanzas"
        />
      </div>
    </div>
  );
};

export default LoginForm;
